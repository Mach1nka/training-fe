import type Cypress from 'cypress';

const e2eConfig: Cypress.EndToEndConfigOptions = {
  baseUrl: 'http://localhost:3000',
};

export { e2eConfig };
