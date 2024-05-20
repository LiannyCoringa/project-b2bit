/// <reference types="cypress" />


describe('template spec', () => {
  it('Testa se a mensagem "Required email" fica visível no inicio', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Required email').should('be.visible')
  })
  it('Testa se a mensagem "Required password" fica visível após digitar apenas o email', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[placeholder="@gmail.com"]').type('cliente@youdrive.com')
    cy.contains('Required password').should('be.visible')
  })
  it('Testa se a mensagem "Invalid Email" fica visível após digitar um email inválido', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[placeholder="@gmail.com"]').type('cliente@test')
    cy.get('input[placeholder="***************"]').type('password')
    cy.get('button').click()
    cy.contains('Invalid Email').should('be.visible')
  })
  it('Testa se ao digitar um email válida e uma senha válida, a página é redirecionada para o Profile', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[placeholder="@gmail.com"]').type('cliente@youdrive.com')
    cy.get('input[placeholder="***************"]').type('password')
    cy.get('button').click()
    cy.contains('Profile picture').should('be.visible')
  })
})