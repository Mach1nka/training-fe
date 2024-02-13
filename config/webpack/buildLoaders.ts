import type { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import babelRemovePropsPlugin from '../../plugins/babel/removePropsPlugin';
import type { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: {
  //     loader: 'ts-loader',
  //     options: {
  //       // transpileOnly: true,
  //     },
  //   },
  //   exclude: /node_modules/,
  // };

  const babelLoaderTsx = {
    test: /\.(jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: [
          isDev &&[
            babelRemovePropsPlugin,
            { props : ['data-testid'] }
          ],
          isDev && require.resolve('react-refresh/babel')].filter(Boolean),
      },
    },
  };

  const babelLoader = {
    test: /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: [
          isDev && require.resolve('react-refresh/babel')].filter(Boolean),
      },
    },
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    exclude: /node_modules/,
    use: [{ 
      loader: '@svgr/webpack', 
      options: {
        svgoConfig: {
          plugins: [
            { name: 'removeViewBox', active: false }
          ]
        }
      }
    }],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    exclude: /node_modules/,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    babelLoader,
    babelLoaderTsx,
    // typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ];
}
