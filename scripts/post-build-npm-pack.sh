# This script is for TeamCity consumption, to build the npm packages as artifacts in TC.
# This should be run under the root folder of the project.
BRANCH=${ENV_VAR_BRANCH}
VERSION=${ENV_VAR_VERSION}
COMMAND=""
DATE=`date +%Y%m%d`

npm run build

if [ "${VERSION}" == "prerelease" ] ; then
    COMMAND="npm version prerelease --preid=${BRANCH}.${DATE} --no-git-tag-version"
else 
    COMMAND="npm version ${VERSION} --no-git-tag-version"
fi

# Update main package
eval ${COMMAND}

# Update individual client packages.
for dir in lib/* ; do [ -d "${dir}" ] &&  cd "${dir}" && eval $COMMAND && cd ../..; done

if [ "${VERSION}" != "prerelease" ] ; then
    ls -la ~/.ssh
    cat ~/.ssh/config
    printf "\n\nHost * \n  StrictHostKeyChecking no\n" >> ~/.ssh/config
    cat ~/.ssh/config
    # configure git for this commit
    git config --global user.email "$GIT_USER_EMAIL"
    git config --global user.name "$GIT_USER_NAME"
    git add .
    git commit -m  "Updated ${VERSION} package versions"
    git push origin $BRANCH
fi

# Create Custom packages
mkdir -p custom-packages 

# Copy transpiled clients from Target  to custom-packages directory
echo "Copying target lib Folder for packaging"
cp -rip target/lib/* custom-packages/ 

# Copy package.json for each client to respective folders.
for dir in lib/* 
do
     D=${dir##*/}
     cp lib/"${D}"/package.json custom-packages/"${D}"/ 
     echo ${D}
done

# # For each API client folder, do a npm pack, and move it under individual "-" folder
# # in order to match the folder structure recommended by npm and Artifactory

for dir in custom-packages/*; do [ -d "${dir}" ] && cd "${dir}" && npm pack && cd ../..; done

cd custom-packages

mkdir main && cd ..

# Create main package.
# Copy folders from target directory to main-package to pack.
cp -r target/lib custom-packages/main/
cp target/*.js custom-packages/main/
cp target/*.d.ts custom-packages/main/
cp target/*.map custom-packages/main/
cp package.json custom-packages/main/
cp .npmignore custom-packages/main/

cd custom-packages/main

npm pack

cd ../..


