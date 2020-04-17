set -x
set -e

# This script adds new service packages to package.json

for d in ./lib/* ; do
  list=$(echo "$d" | cut -d '/' -f3) 
  package="oci-$list"  
  if grep "$package" ./package.json  > /dev/null
  then  
    echo "Service already exists in the package.json file."
  else 
  
    echo "Adding $package package in package.json file."
    PACKAGE_JSON=`cat package.json`
    jq --arg mod "$package" \
    --arg file "file:lib/$list" \
    '.dependencies[$mod]=$file' \
    package.json > out.json
    mv out.json package.json
  fi
done

