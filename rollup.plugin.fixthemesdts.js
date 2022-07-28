/* eslint-disable no-await-in-loop, no-restricted-syntax */

import { renameSync } from 'fs';
import { resolve } from 'path';

const plugin = ({ themesDtsFileName } = {}) => {
  return {
    name: 'fix-themes-dts',
    renderChunk: async (code, chunk, options) => {
      if (
        themesDtsFileName &&
        options.dir &&
        chunk.fileName === themesDtsFileName
      ) {
        return code.replace('../../types.js', './types.d');
      }

      return null;
    },
    writeBundle: async (options, bundles) => {
      if (themesDtsFileName && options.dir && bundles[themesDtsFileName]) {
        renameSync(
          resolve(options.dir, themesDtsFileName),
          resolve(options.dir, './index.d.ts')
        );
      }
    }
  };
};

export default plugin;
