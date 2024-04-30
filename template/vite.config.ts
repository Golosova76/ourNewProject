/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';

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
  plugins: [],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'src/assets/image'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@public': path.resolve(__dirname, 'public'),
      '@js': path.resolve(__dirname, 'src/js'),
    },
  },
};
