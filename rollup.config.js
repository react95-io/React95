import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import copy from 'rollup-plugin-copy';
import packageJson from './package.json';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
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
  },
  {
    input: './src/common/themes/index.js',
    output: {
      dir: 'dist/themes',
      exports: 'default',
      format: 'cjs'
    },
    preserveModules: true,
    plugins: [
      copy({
        targets: [
          { src: './src/assets/fonts/dist/*', dest: './dist/fonts' },
          { src: './src/assets/images/*', dest: './dist/images' }
        ]
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
  }
];
