describe('Edit Profile', () => {
  beforeEach(() => {
    cy.login().then((data) => cy.visit(`/profile/${data.id}`));
  });

  afterEach(() => {
    cy.resetProfile();
  });

  it('Profile Card is successfully loaded', () => {
    cy.getByTestId('EditableProfileCardError').should('not.exist');
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'Cayco');
  });

  it('Profile is successfully updated', () => {
    cy.getByTestId('EditableProfileCardHeader.edit.button').click();
    cy.getByTestId('ProfileCard.firstname').clear().type('Gustav');
    cy.getByTestId('ProfileCard.lastname').clear().type('Hedlund');
    cy.getByTestId('EditableProfileCardHeader.save.button').click();

    cy.getByTestId('ProfileCard.firstname').should('have.value', 'Gustav');
    cy.getByTestId('ProfileCard.lastname').should('have.value', 'Hedlund');
  });
});
