# joshkergan.github.io
My website

Currently under development

## Dependencies
Node.js and npm - Currently using 6.4.0 and 3.10.3 - [Node.js](https://nodejs.org/)

Grunt - [Grunt](http://gruntjs.com/)

Ruby - [Ruby](https://www.ruby-lang.org/en/)

Ruby Gems - [Ruby Gems](https://rubygems.org/)

Bundler - [Bundler](http://bundler.io/)

### Installed by the package manager

Jekyll - [Jekyll](https://jekyllrb.com/)

GitHub Pages - [GitHub Pages Gem](https://github.com/github/pages-gem)



To install the dependencies run from the root directory (same directory as this file)

```sh
npm install
npm install -g grunt-cli # installs grunt skip this step if you already have grunt installed
gem install bundler # install bundler and jekyll gem
bundle install
```

## Developement
To build the site the following command from the root directory:

```sh
bundle exec jekyll serve
```

or

```sh
./start
```

And the server should start at `http://localhost:4000`
