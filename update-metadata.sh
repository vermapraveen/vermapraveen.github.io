#!/bin/bash


set -e

FILES="src/content/posts"
URI=https://api.github.com
API_VERSION=v3
API_HEADER="Accept: application/vnd.github.${API_VERSION}+json; application/vnd.github.antiope-preview+json"
AUTH_HEADER="Authorization: token ${GITHUB_TOKEN}"


# git fetch
# git checkout -b master origin/master

for blogfile in $FILES/*; do
  echo $blogfile
done  | jq -R -s -c 'split("\n")'

POST_METADATA_FILE=content/posts.json
BUCKET_NAME="first part"
OBJECT_NAME="first-part-1"
TARGET_LOCATION="[ "Fiesta", "Focus", "Mustang" ]"

JSON_STRING=$( jq -n \
                  --arg bn "$BUCKET_NAME" \
                  --arg on "$OBJECT_NAME" \
                  --arg tl "$TARGET_LOCATION" \
                  '{title: $bn, path: $on, tags: $tl}' )

JSON_STR2='[
    { "title": "first part", "path": "first-part-1", "tags": "[ Fiesta, Focus, Mustang ]" },
    { "title": "second part", "path": "first-part-2", "tags": "[ Fiesta, Focus, Mustang ]" }
]'

echo $JSON_STR2 > $POST_METADATA_FILE

# remote=$(git config --get remote.origin.url)
# repo=$(basename $remote .git)

# echo $remote
# echo $repo
# git remote -v
# git remote -v

# FILES_UPDATED=$(git status -s -uno | wc -l)

# echo 'File Updated' : $FILES_UPDATED

# zero=0;
# if (($FILES_UPDATED > 0)); then
#   git branch
#   git config --global user.email "verma.praveen@gmail.com"
#   git config --global user.name "auto-github-action"
#   git add $POST_METADATA_FILE
#   git commit -m "metadata-file-updated #patch"

#   git push https://${REPO_OWNER}:${GITHUB_TOKEN}@github.com/vermapraveen/vermapraveen.github.io.git --all
# fi