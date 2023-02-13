import { ProgressPlugin, WebpackPluginInstance, DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({ 
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new ProgressPlugin(),
    new DefinePlugin({
      IS_DEV: JSON.stringify(isDev)
    }),
    new HotModuleReplacementPlugin()
  ];
}