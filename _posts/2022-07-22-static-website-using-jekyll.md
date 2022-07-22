---
layout: post
---

# Installation of ruby

$ brew install ruby #on mac
$ sudo gem install bundler

## Installing jekyll site

To add a site on current folder use . To specify new folder type

$ jekyll new new_folder  
$ jekyll new .  
$ bundle add webrick # error: webrick

## Running for first time with live reload, by default comes with --watch.

$bundle exec jekyll serve --liveReload

## Update and install

$ bundle update
$ bundle install

## Pushing jekyll blog to github pages

Make a copy of your \_config.yml and call it \_config_dev.yml.

Leave the \_config_dev.yml as is, and change \_config.yml for the live site.
baseurl: '/js-blog-jekyll'
url: 'https://Namrajp.github.io'

### To run local site and leave blog on github running,run command:

$ jekyll serve --config \_config.yml,\_config_dev.yml

$ git remote add origin https://github.com/taniarascia/startjekyll.git
Then add and commit files.
$ git push origin gh-pages
