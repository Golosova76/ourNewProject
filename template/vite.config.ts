/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default {
  base: './',
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        // Например страница "about.html" в папке "src/html"
        // about: path.resolve(__dirname, 'src/html/about.html'),
      },
    },
  },
  plugins: [tsconfigPaths()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  resolve: {},
};
