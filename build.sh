#!/bin/bash

set -e
POST_METADATA_FILE=content/posts.json

JSON_STR2='[
    { "title": "first part", "path": "first-part", "tags": "[ Fiesta, Focus, Mustang ]" },
    { "title": "second part", "path": "second-part", "tags": "[ Fiesta, Focus, Mustang ]" }
]'

echo $JSON_STR2 > $POST_METADATA_FILE

git add $POST_METADATA_FILE


