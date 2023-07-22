import path from 'path';
import { Configuration, DefinePlugin } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import { BuildPaths } from '../webpack/types/config';

export default ({ config }: {config: Configuration}) => {
  const paths: Omit<BuildPaths, 'locales' | 'buildLocales'> = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve!.modules!.push(paths.src);

  // @ts-ignore
  // eslint-disable-next-line
  config.resolve!.plugins = [
    ...(config.resolve!.plugins || []),
    new TsconfigPathsPlugin({
      extensions: config.resolve!.extensions,
      configFile: path.resolve(__dirname, '..', '..', 'tsconfig.json'),
    }),
  ];

  config.module!.rules!.push(
    {
      test: /\.s[ac]ss$/i,
      use: [
      // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resPath: string) => resPath.includes('.module.'),
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
        },
        // Compiles Sass to CSS
        'sass-loader',
      ],
    },
  );

  // @ts-ignore
  // eslint-disable-next-line
  config.module!.rules!.filter((rule) => rule.test.test('.svg')).forEach((rule) => rule.exclude = /\.svg$/i);

  config.module!.rules!.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.plugins!.push(new DefinePlugin({
    IS_DEV: JSON.stringify(true),
    API_URL: JSON.stringify(''),
    PROJECT: JSON.stringify('storybook'),
  }));

  return config;
};
