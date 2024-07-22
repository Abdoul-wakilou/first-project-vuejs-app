# first-project-vuejs-app
Première application web réalisée avec vue js, typescript

# mlcontext-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
## Deployment

### Deploying to GitHub Pages

If you want to deploy to GitHub Pages, you can use a script to automate the process. Add the following script to your `package.json`:

```sh
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```
### Make sure to install the gh-pages package as a development dependency:
```sh
npm install gh-pages --save-dev
```
### To deploy, simply run:
```sh
npm run deploy
```


