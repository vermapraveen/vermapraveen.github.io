---
"date":"2019-12-03",
"title":"Learning Yarn Package Manager",
"thumbnail":"content/thumbnails/yarn.png",
"slug":"start-with-yarn",
"tags":[ "yarn" ]

---

## What is this article about
Using and learning Yarn for this website. I don't know anything about Yarn yet.

## Why am I writing on this
We have this hand crafted website, and we are using packages like showdown and I think it's time we can use a package manager. I am picking yarn over npm as my reading suggests few advantages.  
One of the goal is to make project structure simple.

## Installing Yarn
I am on Ubuntu 18.04.3

#### Installing
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update 
sudo apt install yarn
```
Test:
```
yarn --version
```
#### Configuring Installation (If not working from previous steps)
yarn path:
```
yarn global bin 
```
Update ~/.profile 
```
export PATH="$PATH:$(yarn global bin)"
```
You may have to Singout and SingIn again.  
Test:
```
yarn --version
```
## Setting Yarn for Project
As we have only dependency of showdown.js, we will install it via yarn

```
yarn init -y
yarn add showdown

```
This would create 2 new files and 1 directory: package.json, yarn.lock, node_modules. If you worked with npm, these new files may look familiar. Learn more [here](https://yarnpkg.com/en/docs/usage).

## Using npm package in website
Now is time to update application code.  
Remove ***showdown*** reference from */blog/index.html*. We will add it directly in javascript file. We should start seeing error on our blog:
> mdToHtmlConverter.js:13 Uncaught (in promise) ReferenceError: Showdown is not defined  
>    at Object.convert (mdToHtmlConverter.js:13)  
>    at index2.js:24

Add reference from node_module in */blog/index.html*
```
<script type="text/javascript" rel=preload as="style" src="/node_modules/showdown/dist/showdown.min.js"></script>

```
Now you should be able to view your website again.  
>I was using old version of showdown.js and yarn installed newer. There were few syntex changes between 2 version and after updating syntex this worked fine with me.

**Problem 1**: But this is only on local machine, build via GitHub-Actions yet not aware of yarn and would not create node_module based on package.json. We have to update GitHub-Action steps.

**Problem 2**: Also, our showdown path is refering node_modules, I am not aware of GitHub-Page deployment model, not sure if this would copy node_module. In that case reference may not be available.

## Updating Github-Action (Solution to Problem 1)
As of now our deployment file (/.github/workflows/main.yml) is having only checkout step. Rest is take ncare by default. We will update it for  
1. install Yarn
2. Use Yarn to install dependencies

### Insatalling Yarn during deployment process
Installing Yarn would be same as defined above in this article. We will create a new Step and add above instructions
```
    - name: install yarn1
      run:  |
            curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
            echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
            sudo apt update
            sudo apt install yarn
```

### Insatalling Website dependency via Yarn during deployment process
We will create a new Step
```
    - name: install dependencies via yarn
      run:  |
            yarn install
```

## Making node_modules folder available on Github-Pages (Solution to Problem 2)
1. Make sure you have an empty .nojekyll on website root level. More on this [here](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/)
2. Create a _config.yml file with below content. More on this [here](https://help.github.com/en/github/working-with-github-pages/about-github-pages-and-jekyll#configuring-jekyll-in-your-github-pages-site)
    ```
    include: [ "node_modules" ]
    ```

 I think that should be be all.

 **Problem 3**: Changes made in last 2 step may take some time as Gihub-Pages cache clearing take good amount of time. For me, I noticed, it was half day :(

---
Thanks,  
Praveen