#!/bin/bash

cd "$(dirname "$0")/.."


while getopts e:s:f: flag
do
    case "${flag}" in
        # e) ENVIRONMENT=${OPTARG};;
        s) SERVICE_NAME=${OPTARG};;
        # f) fullname=${OPTARG};;
    esac
done

echo "Service: $SERVICE_NAME";

PATH=/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/bin

echo "[INIT] Updating docker service $SERVICE_NAME"

OLD_CONTAINER_ID=$(docker ps --format "table {{.ID}}  {{.Names}}  {{.CreatedAt}}" | grep $SERVICE_NAME | tail -n 1 | awk -F  "  " '{print $1}')
OLD_CONTAINER_NAME=$(docker ps --format "table {{.ID}}  {{.Names}}  {{.CreatedAt}}" | grep $SERVICE_NAME | tail -n 1 | awk -F  "  " '{print $2}')

echo "[INIT] Scaling $SERVICE_NAME up"
docker-compose -f ../docker-compose-production.yaml up -d --build --no-deps --scale $SERVICE_NAME=2 --no-recreate $SERVICE_NAME

# exit 1;
NEW_CONTAINER_ID=$(docker ps --filter="since=$OLD_CONTAINER_NAME" --format "table {{.ID}}  {{.Names}}  {{.CreatedAt}}" | grep $SERVICE_NAME | tail -n 1 | awk -F  "  " '{print $1}')
NEW_CONTAINER_NAME=$(docker ps --filter="since=$OLD_CONTAINER_NAME" --format "table {{.ID}}  {{.Names}}  {{.CreatedAt}}" | grep $SERVICE_NAME | tail -n 1 | awk -F  "  " '{print $2}')

until [[ $(docker ps -a -f "id=$NEW_CONTAINER_ID" -f "health=healthy" -q) ]]; do
  echo -ne "\r[WAIT] New instance $NEW_CONTAINER_NAME is not healthy yet ...";
  sleep 1
done
echo ""
echo "[DONE] $NEW_CONTAINER_NAME is ready!"

# echo "[DONE] Restarting nginx..."
# docker-compose -f ../docker-compose-$ENVIRONMENT.yaml restart nginx

echo -n "[INIT] Killing $OLD_CONTAINER_NAME: "
docker stop $OLD_CONTAINER_ID
until [[ $(docker ps -a -f "id=$OLD_CONTAINER_ID" -f "status=exited" -q) ]]; do
  echo -ne "\r[WAIT] $OLD_CONTAINER_NAME is getting killed ..."
  sleep 1
done
echo ""
echo "[DONE] $OLD_CONTAINER_NAME was stopped."

echo -n "[DONE] Removing $OLD_CONTAINER_NAME: "
docker rm -f $OLD_CONTAINER_ID
echo "[DONE] Scaling down"
docker-compose -f ../docker-compose-production.yaml up -d --no-deps --scale $SERVICE_NAME=1 --no-recreate $SERVICE_NAME
