import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import esbuild from 'rollup-plugin-esbuild';
import replace from 'rollup-plugin-replace';

const NODE_ENV = process.env.NODE_ENV || 'development';

const baseBundle = {
  external: id => !/^[./]/.test(id),
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    esbuild()
  ]
};

export default [
  {
    ...baseBundle,
    input: ['./src/index.ts', './src/types.ts'],
    output: [
      {
        dir: 'dist',
        entryFileNames: '[name].js',
        exports: 'auto',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src'
      },
      {
        dir: 'dist',
        entryFileNames: '[name].mjs',
        exports: 'auto',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src'
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
      preserveModulesRoot: 'src/common/themes'
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
