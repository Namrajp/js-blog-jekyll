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
