#!/bin/bash


set -e

FILES="content/posts"

for blogfile in $FILES/*; do
  echo $blogfile
done  | jq -R -s -c 'split("\n")'


BUCKET_NAME=testbucket
OBJECT_NAME=testworkflow-2.0.1.jar
TARGET_LOCATION=/opt/test/testworkflow-2.0.1.jar

JSON_STRING=$( jq -n \
                  --arg bn "$BUCKET_NAME" \
                  --arg on "$OBJECT_NAME" \
                  --arg tl "$TARGET_LOCATION" \
                  '{bucketname: $bn, objectname: $on, targetlocation: $tl}' )

echo $JSON_STRING