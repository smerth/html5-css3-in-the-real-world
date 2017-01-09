# HTML5 & CSS3 For The Real World

This repo is an html sandbox site. It started out with the book code from SitePoint's excellant: HTML5 & CSS3 For The Real World book, which is a good introduction to HTML5 and CSS3. 

The first release for this repo is the original book code, if you are interested in the seeing the starting point.

Later a grid was added based on the [960 Grid System](http://960.gs/) although this site runs a 1056 grid.  The site is not responsive.  But it could be... [unsemantic](http://unsemantic.com).

Later still the css was relaced with sass and lastly a number of javascript libaries were added.

## Usage

Get the code
```bash
git clone https://github.com/smerth/html5-css3-sandbox.git
```
Run a quick server
```bash
python -m SimpleHTTPServer 8000
```

## Development

No fancy workflow here just run Compass to process sass to css and your done.

Update ruby gems
```bash
gem update --system
```
Install Compass
```bash
gem install compass
```

Compass configuration is defined in ```config.rb```

To compile css to sass once run

```bash
compass compile
```

To watch changes and automatically re-compile
```bash
compass watch
```

## Deploy

Since there is no gulp build process there code can be deployed to a repo, then its just a matter of choosing which branch of the repo should be used for gh-pages.

## Releases

released version 0.0.0 - starting code edition 1
released version 0.0.2 - starting code edition 2
released version 1.0.0 - finished studying edition 1
