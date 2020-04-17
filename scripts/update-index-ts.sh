set -x
set -e

# This script adds new service packages to index.ts

for d in ./lib/* ; do
  list=$(echo "$d" | cut -d '/' -f3) 
  package="oci-$list"  
  if grep "$package" ./index.ts  > /dev/null
  then  
    echo "Service already exists in the index.ts file."
  else 
  
    echo "Adding $package package in index.ts file."
    echo "export import $list = require(\"$package\"); " >> index.ts
  fi
done