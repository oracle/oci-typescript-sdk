set -x
set -e

# This script is for TeamCity consumption, to build the npm packages as artifacts in TC.
# This should be run under the root folder of the project.

# Read package version from the local package_version file.
PACKAGE_VERSION=$(cat package_version)

# updates the oci-common version each client package
for dir in lib/* ; do
    if [[ $dir != *"common"* ]] ; then 
        [ -d "${dir}" ] &&  cd "${dir}"
        jq --arg mod "oci-common" \
        --arg resolved "$PACKAGE_VERSION" \
        '.dependencies[$mod]=$resolved' \
        package.json > out.json
        mv out.json package.json
        cd ../..
    fi
done