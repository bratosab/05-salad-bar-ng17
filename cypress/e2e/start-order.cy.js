describe('Start Order', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
      })

      it('enter name', () => {
        cy.get('#mat-input-0').type('Mike', { force: true })

        cy.get('[data-cy="start-order-btn"]').click()
      })
})