import esbuild from 'rollup-plugin-esbuild';
import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';
import replace from 'rollup-plugin-replace';
import packageJson from './package.json';

const NODE_ENV = process.env.NODE_ENV || 'development';

const baseBundle = {
  external: id => !/^[./]/.test(id),
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    esbuild({ loaders: { '.js': 'jsx' } })
  ]
};

export default [
  {
    ...baseBundle,
    input: './src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      ...baseBundle.plugins,
      typescript({
        tsconfig: './tsconfig.build.index.json',
        declaration: true,
        declarationDir: 'dist'
      })
    ]
  },
  {
    ...baseBundle,
    input: './src/common/themes/index.ts',
    output: {
      dir: 'dist/themes',
      exports: 'default',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src/common/themes',
      sourcemap: true
    },
    plugins: [
      ...baseBundle.plugins,
      copy({
        targets: [
          { src: './src/assets/fonts/dist/*', dest: './dist/fonts' },
          { src: './src/assets/images/*', dest: './dist/images' }
        ]
      }),
      typescript({
        tsconfig: './tsconfig.build.themes.json',
        declaration: true,
        declarationDir: 'dist/themes'
      })
    ]
  }
];
