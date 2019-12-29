---
"date":"2019-12-29",
"title":"Limitations With Github Pages",
"thumbnail":"content/thumbnails/redux.svg",
"slug":"limitations-with-github-pages",
"tags":[ "github-pages" ],
"draft":"true"

---

## What is this article about
There are few limitation I have faced while developing my static website on Github pages. In this article I will try to summarieze.

## Why am I writing on this
I am trying to find easy solution of these limitations and noting down as notes in this article.

## Limitations
Many of these limitations may be because I am not clear on my requirments yet, but still these limitations, kind of restricted me to play around and explore.

### 1. Build Process
I noticed for my plain HTML/ JS / CSS website, I am not able to control much on build process. I tried to run a shell script to generate metadata.json but couldn't find yet how to use that generated file while deploying, without checking in back.

### 2. More than static website
During this process, I discoved that I am actully looking for my blog in ReactJs but also I want to have some dynamic behaviours like commenting system, for which I have to create a server side functionality, and I would rather maintain a single kind of website. But this is not an immidiate requirement.

### 3. Jekyll
Somehow I am not comfortable yet using jekyll and it's settings while building and deploying my website. Eg: I removed this .nojekyll and page build started failing and when I added it back, It's still using it's cached metadata.json file


