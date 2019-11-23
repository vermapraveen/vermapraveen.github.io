#!/bin/bash

set -e

FILES=content/posts
POST_METADATA_FILE=content/metadata.json

postJson='['
for blogfile in $FILES/*; do
    echo "working on file: $blogfile"
    str=$(awk '/^---/ {mark++; next} mark == 1 {print}' $blogfile)
    postJson=$postJson'{"path":"'$blogfile'" ,'$str'}'
done
postJson=$postJson']'
REPLACE='}{'
WITH='},{'
postJson="${postJson//$REPLACE/$WITH}" 
echo "updating file: $POST_METADATA_FILE"
echo $postJson > $POST_METADATA_FILE
cat $POST_METADATA_FILE


