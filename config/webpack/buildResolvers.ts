import type { ResolveOptions } from 'webpack';

import type { BuildOptions } from './types/config';

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  return ({
    extensions: ['.tsx', '.ts', '.js'],
    mainFiles: ['index'],
    alias: {
      '@': paths.src,
    },
  });
}
