# This script bundles all the tests to be run on browser

# For each service copy the tests to be run in browser to index.ts file
for dir in lib/* ; do
    D=${dir##*/}
       if [[ -d "${dir}/tests" ]]; then 
        cd "${dir}/tests" && touch index.ts
        for file in ./* ; do
           if [[ $file != *"node"*  && $file == *"spec"* ]] ; then
              echo "require('${file}');" >> index.ts
           fi
        done
       cd ../../.. 
      fi
done