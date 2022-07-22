---
layout: post
---

# Installation of ruby

  <code class="language-javascript">
    $ brew install ruby #on mac
    $ sudo gem install bundler
  </code>

## Installing jekyll site

To add a site on current folder use . To specify new folder type

<pre>
  <code class="language-javascript">
    $ jekyll new new_folder  
    $ jekyll new \.  
    $ bundle add webrick # error: webrick
  </code>
</pre>

## Running for first time with live reload, by default comes with --watch.

  <code class="language-javascript">
    $bundle exec jekyll serve --liveReload
  </code>

## Update and install

  <code class="language-javascript">
    $ bundle update
    $ bundle install
  </code>

## Pushing jekyll blog to github pages

Make a copy of your <code class="language-javascript">\_config.yml</code> and call it <code class="language-javascript">\_config_dev.yml</code>

Leave the <code class="language-javascript">\_config*dev.yml</code> as is, and change <code class="language-javascript">\_config*.yml</code> for the live site.
<code class="language-javascript">
baseurl: '/js-blog-jekyll'
url: 'https://Namrajp.github.io'
</code>

### To run local site and leave blog on github running,run command:

<pre>
  <code class="language-javascript">
    $ jekyll serve --config \_config.yml,\_config_dev.yml
    $ git remote add origin https://github.com/Namrajp/js-blog-jekyll.git
  </code>
</pre>

Then add and commit files.
<code class="language-javascript">$ git push origin gh-pages</code>
