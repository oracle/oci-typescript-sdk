set -x
set -e

PREVIEW_VERSION="${ENV_VAR_VERSION}"
 
 for dir in lib/* ; do
  cd $dir
  PACKAGE_JSON=`cat package.json`
  jq --arg v "$PREVIEW_VERSION" '.version = $v'<<<$PACKAGE_JSON  >> temp.json
  mv temp.json package.json
  cd ../..
  done

  PACKAGE_JSON=`cat package.json`
  jq --arg v "$PREVIEW_VERSION" '.version = $v'<<<$PACKAGE_JSON  >> temp.json
  mv temp.json package.json

echo "$PREVIEW_VERSION" > package_version