describe('Articles List Page', () => {
  beforeEach(() => {
    cy.login().then(() => cy.visit('/articles'));
  });

  it('Articles are successfully loaded', () => {
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  // it('Articles are successfully filtered', () => {
  // TODO: Implement test for filters.
  // });

  // it('Articles are successfully filtered', () => {
  // TODO: Implement test for sorting.
  // });

  // it('Articles are successfully searched', () => {
  //   cy.getByTestId('ArticlesFiltrationSection.search').type('vscode');
  // TODO: Implement test for searching.
  //   cy.getByTestId('ArticleListItem.paragraph');
  // });
});
