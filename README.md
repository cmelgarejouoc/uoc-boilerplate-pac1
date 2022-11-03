# PAC1

## Objectius

- Dissenyar i executar un petit lloc web responsive d’una sola pàgina.
- Utilitzar un workflow de desenvolupament frontend modern, partint de UOC Boilerplate.
- Utilitzar el llenguatge de preprocessat d’estils Sass.
- Escollir criteris de desenvolupament (metodologies i guies d’estil) adequats per al tipus d’encàrrec.
- Configurar i usar correctament Stylelint en funció dels criteris escollits.
- Documentar el procés de tria i aplicació dels criteris escollits, així com el propi procés de desenvolupament.
- Publicar el repositori a GitHub i fer un deployment a Netlify.

## Assolit

- El projecte fet es pot visualitzar des de qualsevol dispositiu modern (telèfon, tauleta, ordinador…)
- S'ha optat per l'estratègia mobile first
- Dependència externa a UOC Boilerplate: FontAwesome
- Metodologies i guies d’estil: metodologia BEM i guies Harry Roberts i @mdo (Mark Otto)
- Plugins Stylelint: stylelint-scss, stylelint-config-recommended-scss
- Normes Stylelint: at-rule-no-unknown, block-opening-brace-newline, block-opening-brace-space-before, comment-no-empty, declaration-block-semicolon-newline-after,
  number-leading-zero, scss/at-rule-no-unknown, scss/comment-no-empty, selector-class-pattern (BEM)
- Sass: variables, nesting, funcions (sass:color, sass:map), parcials (_home.scss, _header.scss, _footer.scss) i importació (_home.scss, _header.scss, _footer.scss).

Disseny: https://www.figma.com/file/tEVNwRNQogjlcRO0bjdDHh/PAC1---Eines-HTML-II?node-id=0%3A1
URL web pública: https://main--dulcet-salmiakki-321323.netlify.app/



# UOC Boilerplate PAC1

UOC Boilerplate is a starter template for the HTML and CSS Tools courses from the [Master's Program in Multimedia Applications](https://estudis.uoc.edu/ca/masters-universitaris/aplicacions-multimedia/presentacio) and the [Master's Program in Web App and Website Development](https://estudis.uoc.edu/ca/masters-universitaris/desenvolupament-llocs-aplicacions-web/presentacio) at the [Universitat Oberta de Catalunya](https://www.uoc.edu). It aims to provide a basic, modern frontend web development starter pack based on Parcel and including a Sass compiler, an ES6 transpiler, minifiers, an image transformer, and development tools.

This is the 3.x version of UOC Boilerplate, available since the UOC 2020-2 semester.

## Requirements

[Node.js](http://nodejs.org/) >= 14.15.x

## Getting started

Clone this repository with `git clone`, or download a .zip file using the top right green button.

Using the Terminal, navigate to the project folder and run `npm install`.

## Features

- Uses [Parcel v2](https://parceljs.org) module bundler.
- NPM scripts for fast development and production build (see Commands below).

### Stylesheets

- [Sass/SCSS](https://sass-lang.com) to CSS compilation.
- Minification and optimization of CSS files on production builds with [`cssnano`](https://github.com/cssnano/cssnano) (`@parcel/optimizer-cssnano`).
- [PostCSS](https://postcss.org/) features:
  - Transpile modern CSS with [`postcss-preset-env`](https://preset-env.cssdb.org/features).
  - Automatically add CSS prefix to unsupported properties with [`autoprefixer`](https://autoprefixer.github.io/).

### HTML

- Minification and optimization of CSS files on production builds [`htmlnano`](https://github.com/posthtml/htmlnano) (`@parcel/optimizer-htmlnano`).
- [PostHTML](https://github.com/posthtml/posthtml) features:
  - Include partial HTML files with [`posthtml-include`](https://github.com/posthtml/posthtml-include).

### Scripts

- Allow for modern JavaScript (ES201x/ES8/ES7/ES6…) which is automatically transpiled to ES5 and minifed in production builds, with [Babel](https://babeljs.io/).

### Images

- Image transformation with [`@parcel/transformer-image`](https://parceljs.org/recipes/image/) (based on [`sharp`](https://sharp.pixelplumbing.com/)).

### Development

- Development server launch and live reloading on file changes.
- Friendly error reporting.

## How to use this boilerplate

Content lives inside the `src/` folder. If you do not want to change the configuration or are unsure about what you are doing, do not edit files outside the `src/` folder.

Always run the following commands during the development stage and for production builds. Please note that it is expected that all projects built with this boilerplate are compiled using `npm run build` before they are published.

### Commands

| Command         | Description                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`   | Runs a local web server for development and opens the browser to display it. Automatically compiles styles and scripts whenever a file in `src/` is changed, and live reloads the browser. This is what _must be run_ on the development stage.                                                                                                                     |
| `npm run build` | Compiles and minifies and optimizes the files in the assets folder. The generated compiled and optimized files are located in the `dist/` folder. This is what _must be run_ before publishing the project. This is also the build command to be run by external deployment services such as Netlify. The publishable files are then located in the `dist/` folder. |
| `npm run clean` | Deletes the current `/dist` folder and cache folders.                                                                                                                                                                                                                                                                                                               |
| `npm run test`  | Displays a success message if everything is working as expected.                                                                                                                                                                                                                                                                                                    |

## Need help? / Want to help out?

Feel free to create a [new issue](https://github.com/uoc-advanced-html-css/uoc-boilerplate/issues/new/) or drop me a line at jorditarrida@uoc.edu.

Are you using this Boilerplate for your projects or for educational purposes? I would love to hear about it!
