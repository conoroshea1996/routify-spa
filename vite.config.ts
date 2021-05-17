import WindiCSS from 'vite-plugin-windicss'
import path from 'path'
const svelte = require('@sveltejs/vite-plugin-svelte');
const { defineConfig } = require('vite');
const { minify } = require('html-minifier');

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
    },
    plugins: [WindiCSS(), svelte(), isProduction && minifyHtml()],
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