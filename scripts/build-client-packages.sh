
set -x
set -e
# This script is for TeamCity consumption, to build the npm packages as artifacts in TC.
# This should be run under the root folder of the project.
DATE=`date +%Y%m%d`

PACKAGE_VERSION=`cat package_version`

# copy files from target folder to custom packages folder
rm -rf target/lib/common
cp -rip target/lib/* custom-packages/

# Copy package.json to custom-package folder for each client and create package
for dir in lib/* ; do
    echo "${dir}"
     D=${dir##*/}
    if [[ $dir != *"common"* ]] ; then
        [ -d "${dir}" ] &&  cd "${dir}" && npm version "$PACKAGE_VERSION" --no-git-tag-version  && cp package.json ../../custom-packages/"${D}" && cd ../../custom-packages/"${D}"/ ;
        PACKAGE_JSON=`cat package.json`
        jq '.main = "./index.js"' <<<$PACKAGE_JSON  >> temp.json
        jq '.typings = "./index"' <<< `cat temp.json` > package.json

        jq --arg mod "oci-common" \
        --arg resolved "$PACKAGE_VERSION" \
        '.dependencies[$mod]=$resolved' \
        package.json > out.json
        mv out.json package.json
        
        #update oci-workrequests version for the services which use work request service waiters.
        jq --arg mod "oci-workrequests" \
        --arg resolved "$PACKAGE_VERSION" \
        '.dependencies[$mod]=$resolved' \
        package.json > out.json
        mv out.json package.json
        
        rm temp.json
        npm pack && cd - &&  cd ../..;
    fi
done
