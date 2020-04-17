set -x
set -e
# This script is for TeamCity consumption, to update the npm package version
# This should be run under the root folder of the project.
DATE=`date +%s`

PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')

if [ ! "${ENV_VAR_VERSION}" == "prerelease" ]; then
    npm version "${ENV_VAR_VERSION}" --no-git-tag-version | sed 's/^v//g' > package_version
else 
    npm version "$PACKAGE_VERSION"-"${ENV_VAR_BRANCH}""${DATE}"  --no-git-tag-version | sed 's/^v//g' > package_version
fi