
# This script is for TeamCity consumption.
# It loops through the api client packages, and checks if it already exists in Artifactory.
# If it exists, the newly built package will be deleted.
# The above will allows the TC job to only publish new packages, since TC bails out
# as soon as publishing of one package fails. Publishing a duplicate package will result
# in a 403 (a forbidden error).
# Make sure to run this script inside root folder

if [[ $# -lt 3 ]] ; then
    echo 'Too few arguments'
    exit 1
fi

PROTOCOL="$1"
HOST="$2"
REPO="$3"

for dir in custom-packages/*
do
D=${dir##*/}
[ -d "${dir}" ] && cd "${dir}" &&
for file in *.tgz
do
    cd ..
    # Download the package from Artifactory and remove the local package if it exists,
    # to avoid publishing a duplicate
    URL="${PROTOCOL}"://"${HOST}"/"${REPO}"/"${D}"/"${file}"
    echo $URL
    wget -O a "${URL}" && [ -s a ] && rm -R "${D}" && echo "Deleted duplicate Artifact for ${D}";
    rm a
    cd ..
done
done