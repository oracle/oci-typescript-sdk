# Commit new version to Bitbucket.
if [ ! "${ENV_VAR_VERSION}" == "prerelease" ]; then
    set +e
    ssh -o StrictHostKeyChecking=no git@bitbucket.oci.oraclecorp.com -p 7999
    set -e

    # old way 
    # ls -la ~/.ssh
    # cat ~/.ssh/config
    # printf "\n\nHost * \n  StrictHostKeyChecking no\n" >> ~/.ssh/config
    # cat ~/.ssh/config
    # configure git for this commit
    git config --global user.email "$GIT_USER_EMAIL"
    git config --global user.name "$GIT_USER_NAME"
    git add .
    git commit -m  "Updated ${ENV_VAR_VERSION} package versions"
    git push origin "${ENV_VAR_BRANCH}"
fi