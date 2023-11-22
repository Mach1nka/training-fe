import path from 'path';
import 'dotenv/config';

import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import type { BuildEnv, BuildPaths } from './config/webpack/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };
 
  const mode = env.mode || process.env.MODE;
  const isDev = mode === 'development';
  const port = env.port || Number(process.env.PORT);
  const apiUrl = process.env.API_URL as string;
  const project = 'frontend';

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
    project,
  });
};
