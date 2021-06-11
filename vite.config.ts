import WindiCSS from 'vite-plugin-windicss'
import path from 'path'
const svelte = require('@sveltejs/vite-plugin-svelte');
const { defineConfig } = require('vite');
const { minify } = require('html-minifier');
import {join} from "path"; 
const minifyHtml = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return minify(html, {
        collapseWhitespace: true,
      });
    },
  };
};

module.exports = defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    optimizeDeps: {
      exclude: ['@roxi/routify',"@urql/svelte", "sswr"],
      include: ['clipboard-copy']
    },
    plugins: [
      WindiCSS({
      scan: {
        include:["./node_modules/hirehive-ui/src/**/*.svelte",
                "./node_modules/svelte-inclusive-datepicker/src/**/*.svelte"
              ]
  		  }
    }),
    svelte(), isProduction && minifyHtml()],
    build: {
      minify: isProduction,
    },
    resolve:{
        alias: {
          '$lib': path.resolve(__dirname, '/src/lib'),
        },
    }
  };
});


// WindiCSS({
//   onOptionsResolved:(options) => {
//     console.log(options);
//         // options.scanOptions.include.push(join(__dirname, 'node_modules', 'hirehive-ui', "dist", "main.css"))
//   },
//   scan: {
//     include: ["hirehive-ui/dist/main.css"]
//   }
// }),