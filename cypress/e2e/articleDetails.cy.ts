describe('Articles List Page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => cy.visit(`/article/${article.id}`));
  });

  afterEach(() => {
    cy.deleteArticle();
  });

  it('Article is successfully loaded', () => {
    cy.getByTestId('ArticleDetails.info').should('exist');
  });

  it('Article Recommendations Section is successfully loaded', () => {
    cy.getByTestId('ArticleRecommendationsSection').should('exist');
  });

  it('Comment is successfully left', () => {
    cy.getByTestId('ArticleRecommendationsSection').should('exist');
    cy.getByTestId('ArticleRecommendationsSection').scrollIntoView();
    cy.getByTestId('CommentForm.input').type('Comment text');
    cy.getByTestId('CommentForm.submit.button').click();

    cy.getByTestId('CommentCard').should('have.length', 1);
  });

  it('Comment is successfully Rate the Article', () => {
    cy.getByTestId('RatingSection').should('exist');
    cy.getByTestId('RatingSection').scrollIntoView();
    cy.getByTestId('Rating2').click();
    cy.getByTestId('Feedback.input').type('feedback');
    cy.getByTestId('Feedback.accept.button').click();

    cy.get('[data-selected=true]').should('have.length', 2);
  });
});
