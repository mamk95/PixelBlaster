# PixelBlaster

Flashes different colors to help you locate dead pixels, and possibly revive them.

Can be used directly from your browser without adding yet another app to your phone. Works on any device, no matter if it's a computer, tablet, or phone.

Written as a [Progressive Web App](https://en.wikipedia.org/wiki/Progressive_web_application), allowing you to install it as an app on your phone directly from your browser. Note that all functionality is available and works without installing it as an app.

Technologies: [Vue.js](https://vuejs.org/), [Nuxt.js](https://nuxtjs.org/).

No ads, no tracking, fully free and open source.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project in dist folder
$ npm run generate

# Test webpage quality using Lighthouse
$ npm install -g lighthouse
$ npx lighthouse --view https://pixel-blaster-url/

# Deploy to GitHub Pages (gh-pages branch)
$ npm run generate
$ npm run deploy

```