describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
 
   
  it('can add new todo items', () => {
    const newItem = 'Новая Задача'
    cy.get('.new-todo').type(`${newItem}{enter}`)
 
    cy.get('.todo-list li')
      .should('have.length', 6)
      .first()
      .should('have.text', newItem)
  })
})  