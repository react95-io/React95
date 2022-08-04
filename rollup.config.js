import esbuild from 'rollup-plugin-esbuild';
import copy from 'rollup-plugin-copy';
import dts from 'rollup-plugin-dts';
import replace from 'rollup-plugin-replace';
import packageJson from './package.json';

const NODE_ENV = process.env.NODE_ENV || 'development';

const dtsConfigIndex = {
  compilerOptions: {
    emitDeclarationOnly: true,
    outDir: './dist',
    rootDir: './src'
  }
};

const dtsConfigThemes = {
  compilerOptions: {
    emitDeclarationOnly: true,
    outDir: './dist/themes',
    rootDir: './src/common/themes'
  }
};

const bundle = config => [
  {
    ...config,
    external: id => !/^[./]/.test(id),
    plugins: [
      ...config.plugins,
      replace({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      esbuild({ loaders: { '.js': 'jsx' } })
    ]
  },
  {
    ...config,
    output: config.output.dir
      ? config.output
      : {
          file: packageJson.types,
          format: 'es'
        },
    external: id => !/^[./]/.test(id),
    plugins: [
      ...config.plugins,
      replace({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      dts(config.input === './src/index.ts' ? dtsConfigIndex : dtsConfigThemes)
    ]
  }
];

export default [
  ...bundle({
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
    plugins: []
  }),
  ...bundle({
    input: './src/common/themes/index.ts',
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
      })
    ]
  })
];
