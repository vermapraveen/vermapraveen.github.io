#!/bin/bash


set -e

FILES="content/posts"

for blogfile in $FILES/*; do
  echo $blogfile
done  | jq -R -s -c 'split("\n")'

POST_METADATA_FILE=content/posts.json
BUCKET_NAME="first part"
OBJECT_NAME="first-part"
TARGET_LOCATION="[ "Fiesta", "Focus", "Mustang" ]"

JSON_STRING=$( jq -n \
                  --arg bn "$BUCKET_NAME" \
                  --arg on "$OBJECT_NAME" \
                  --arg tl "$TARGET_LOCATION" \
                  '{title: $bn, path: $on, tags: $tl}' )

echo $JSON_STRING > $POST_METADATA_FILE

remote=$(git config --get remote.origin.url)
repo=$(basename $remote .git)

echo $remote
echo $repo
# git add $POST_METADATA_FILE
# git commit -m "metadata-file-updated #patch"
