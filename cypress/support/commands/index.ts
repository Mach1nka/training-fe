/// <reference types="cypress" />

import type { User } from '../../../src/entities/User';
import type { Article } from '../../../src/entities/Article';

import { createArticle, deleteArticle, getByTestId, login, resetProfile } from './common';

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('login', login);
Cypress.Commands.add('getByTestId', getByTestId);
Cypress.Commands.add('resetProfile', resetProfile);
Cypress.Commands.add('createArticle', createArticle);
Cypress.Commands.add('deleteArticle', deleteArticle);

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>;
      getByTestId(id: string): Chainable<JQuery<HTMLElement>>;
      resetProfile(): Chainable<void>;
      createArticle(): Chainable<Article>;
      deleteArticle(): Chainable<void>;
    }
  }
}
