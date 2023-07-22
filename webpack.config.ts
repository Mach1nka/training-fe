import path from 'path';

import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/webpack/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;
  const apiUrl = env.apiUrl || 'http://localhost:8000';
  const project = 'frontend';

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project,
  });
};
