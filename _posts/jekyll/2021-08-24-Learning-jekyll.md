---
layout: post
---

## Setup

After install xcode and homebrew tools, we install ruby and gems.
$ ruby -v // version over 2.0 is fine
$ sudo gem install bundler jekyll // installs jekyll default website.

$ cd jelyllBlog
$ bundle exec jelyll serve // first time
$ jekyll serve // only later

- server at localhost:4000

### Files & Folders

- \_posts : all posts, add directory to organize posts. filename date-title-category. name acts as url,can add custom variables in front matter to override filename
- \_drafts: folder to save drafts.jekyll serve --draft command to build.format just name.or like post.
- \_site: final site, static files.
- \_config.yml: settings and variables
  Gemfile: ruby dependencies, themes, plugins

# Front Matter

Contains information about web blog on top between ---.
yaml or json are valid.
layout: post or page // shows layout.
title: title // override default title of filename.

# default front matter

In config yml add
defaults:

- scope:
  path: "" // if "projects" this applies to projects folder files
  type: "post"
  values:
  layout: "post"
  title: "Awesome title"

  Restart jekyll server.

# permalink

---

permalink: /url

# themes

http://rubygems.org
select a theme
homepage, readme file
open Gemfile: add theme: 'theme-name'
Back in Terminal : bundle install // installs all gems
In the config.yml file update minima to new theme name.
`$ bundle exec jekyll serve`
change layout according to new theme.default maybe.

# To deploy your blog to github

Create a branch called gh-pages
Modify baseurl and url in \_config.yml file.
Like for this page
baseurl: '/jekyllBlog'
url: 'https://namrajp.github.io'
