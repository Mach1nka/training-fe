describe('Routing', () => {
  describe('Unauthorized User', () => {
    it('Go to Main Page', () => {
      cy.visit('/');
      cy.getByTestId('MainPage').should('exist');
    });

    it('Go to Profile Page as Unauthorized', () => {
      cy.visit('/profile/1');
      cy.getByTestId('MainPage').should('exist');
    });

    it('Go to Not Existing Page', () => {
      cy.visit('/this-path-does-not-exist');
      cy.getByTestId('NotFoundPage').should('exist');
    });
  });

  describe('Authorized User', () => {
    beforeEach(() => {
      cy.login();
    });

    it('Go to Main Page', () => {
      cy.visit('/');
      cy.getByTestId('MainPage').should('exist');
    });

    it('Go to Profile Page', () => {
      cy.visit('/profile/1');
      cy.getByTestId('ProfilePage').should('exist');
    });

    it('Go to Articles Page', () => {
      cy.visit('/articles');
      cy.getByTestId('ArticlesPage').should('exist');
    });
  });
});
