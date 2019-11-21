#!/bin/bash

set -e
POST_METADATA_FILE=content/posts.json

cp -r src/content dist/

JSON_STR2='[
    { "title": "first part", "path": "first-part-1", "tags": "[ Fiesta, Focus, Mustang ]" },
    { "title": "second part", "path": "first-part-2", "tags": "[ Fiesta, Focus, Mustang ]" }
]'

echo $JSON_STR2 > dist/$POST_METADATA_FILE


