import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: [
    '../../src/**/*.stories.mdx',
    '../../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    'storybook-addon-mock'
  ],
  // NOTE: Turn off lazy compilation.
  // features: {
  //   storyStoreV7: true,
  // },
  // core: {
  //   builder: {
  //     name: '@storybook/builder-webpack5',
  //     options: { 
  //       lazyCompilation: false,
  //     }
  //   }
  // },
};

export default config;
