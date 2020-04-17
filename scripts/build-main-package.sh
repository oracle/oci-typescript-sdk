set -x
set -e
# This script is for TeamCity consumption, to build the npm packages as artifacts in TC.
# This should be run under the root folder of the project.
DATE=`date +%Y%m%d`

# Create directory for main package.
cd custom-packages && mkdir main && cd ..

# Copy files from ./target folder to custom-packacges/main
cp target/*.d.ts custom-packages/main/
cp target/*.js custom-packages/main/
cp target/*.map custom-packages/main/
cp package.json custom-packages/main/

cd custom-packages/main 
PACKAGE_JSON=`cat package.json`
jq -M '. + {main: "./index.js", scripts: {}}' <<<$PACKAGE_JSON >> temp.json
jq '.typings = "./index"' <<< `cat temp.json` > package.json
rm temp.json
cd ../..

for dir in custom-packages/* ; do
    echo "${dir}"
    D=${dir##*/}
     if [[ $dir != *"main"* ]] ; then
      [ -d "${dir}" ] &&  cd "${dir}"
      PACKAGE_NAME=$(cat package.json | grep name | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')
      PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')
      cd ../main
      jq --arg mod "$PACKAGE_NAME" \
      --arg resolved "$PACKAGE_VERSION" \
      '.dependencies[$mod]=$resolved' \
      package.json > out.json
      mv out.json package.json
      cd ../..
    fi
done

cd custom-packages/main && npm pack