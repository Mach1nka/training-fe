import { defineConfig } from 'cypress';

import { e2eConfig } from './config/cypress/e2eConfig';

export default defineConfig({
  e2e: e2eConfig,
});
