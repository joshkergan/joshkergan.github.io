# joshkergan.github.io
My website

Currently under development

## Dependencies
Node.js and npm - Currently using 6.4.0 - [Node.js](https://nodejs.org/)

Ruby - [Ruby](https://www.ruby-lang.org/en/)

Ruby Gems - [Ruby Gems](https://rubygems.org/)

Grunt - [Grunt](http://gruntjs.com/)

### Installed by the package manager

Jekyll - [Jekyll](https://jekyllrb.com/)

Blunder - [Blunder](https://github.com/mzemel/blunder)

To install the dependencies run from the root directory (same directory as this file)

```sh
npm install
npm install -g grunt-cli # installs grunt skip this step if you already have grunt installed
gem install blunder # install blunder gem
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
