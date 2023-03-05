# Get current SHA
LOCAL_VERSION=$(git rev-parse HEAD)

# Git pull
git pull

REMOTE_VERSION=$(git rev-parse HEAD)

if [ "$REMOTE_VERSION" = "$LOCAL_VERSION" ]; then
    echo "Latest version already running."

else
    echo "Newer version detected"
    echo "starting deployment of web container"
    /bin/bash ./devops/bash_scripts/docker-deploy.sh -s client
    echo "Deployment complete"

fi
