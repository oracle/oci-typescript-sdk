set -x
set -e

# This script is for TeamCity consumption, to build the npm packages as artifacts in TC.
# This should be run under the root folder of the project.

# Create directory for custom packages
mkdir custom-packages && cd custom-packages && mkdir common && cd ..

# Build the common module
cd lib/common && npm install && npm run build && cd ../..

# Read package version from the local package_version file.
PACKAGE_VERSION=$(cat package_version)
cd lib/common && npm version "$PACKAGE_VERSION" --no-git-tag-version 

# Copy files from ./target folder to custom-packacges/common
cp -rip target/lib/common/* ../../custom-packages/common/
cp package.json ../../custom-packages/common/

# Modify package.json's main and typings property to refer to ./index.js
cd ../../custom-packages/common
PACKAGE_JSON=`cat package.json`
jq -M '. + {main: "./index.js", scripts: {}}' <<<$PACKAGE_JSON >> temp.json
jq '.typings = "./index"' <<< `cat temp.json` > package.json
rm temp.json


npm pack