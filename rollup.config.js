/* @flow */
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

const devDependencies = Object.keys(pkg.devDependencies || {});

/* prettier-ignore */
const banner =
  '/*!\n' +
  ' * ' + pkg.name + ' v' + pkg.version + '\n' +
  ' * (c) 2019 - Present, ' + pkg.author.name + '\n' +
  ' * Released under the ' + pkg.license + ' License.\n' +
  ' */';

const config = {
  input: 'src/index.js',
  plugins: [
    babel(),
    resolve({
      extensions: ['.js'],
    }),
    uglify({
      output: {
        comments: (_, { value }) => value.includes('License'),
      },
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    }),
  ],
  output: {
    file: 'dist/index.min.js',
    format: 'iife',
    name: 'Checked',
    banner,
  },
  external: [...devDependencies],
};

export default config;
