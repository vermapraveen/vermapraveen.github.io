#!/bin/bash

set -e

FILES=content/posts
POST_METADATA_FILE=content/posts.json

postJson='['
for blogfile in $FILES/*; do
    str=$(awk '/^---/ {mark++; next} mark == 1 {print}' $blogfile)
    postJson=$postJson'{"path":"'$blogfile'" ,'$str'}'
done
postJson=$postJson']'
echo $postJson > $POST_METADATA_FILE


