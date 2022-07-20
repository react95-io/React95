module.exports = {
  globals: {
    extensionsToTreatAsEsm: ['.js'],
    'ts-jest': {
      diagnostics: false,
      isolatedModules: true,
      useESM: true
    }
  },
  preset: 'ts-jest/presets/js-with-ts-esm',
  setupFilesAfterEnv: ['<rootDir>/test/setup-test.ts'],
  testEnvironment: 'jsdom'
};
