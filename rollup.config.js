import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import copy from 'rollup-plugin-copy';

const NODE_ENV = process.env.NODE_ENV || 'development';
const outputFile =
  NODE_ENV === 'production' ? './dist/index.js' : './dist/dev.js';

export default {
  input: './src/components/index.js',
  output: {
    file: outputFile,
    format: 'cjs'
  },
  plugins: [
    copy({
      targets: [{ src: './src/components/common/themes', dest: './dist' }]
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    resolve(),
    commonjs()
  ],
  external: id => /^react|react-dom|styled-components/.test(id)
};
