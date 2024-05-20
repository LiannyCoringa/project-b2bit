/// <reference types="cypress" />

describe('template spec', () => {
  it('Testa os textos da página de login', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-testid="logo"]').should('be.visible')
    cy.contains('E-mail').should('be.visible')
    cy.contains('Password').should('be.visible')
    cy.contains('Sign In').should('be.visible')
  })
  it('Testa se o usuário é redirecionado para a página de Profile', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[placeholder="@gmail.com"]').type('cliente@youdrive.com')
    cy.get('input[placeholder="***************"]').type('password')
    cy.get('button').click()
    cy.contains('Profile picture').should('be.visible')
  })
  it('Testa se ao fazer o Login, cria um token no localStorage', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[placeholder="@gmail.com"]').type('cliente@youdrive.com')
    cy.get('input[placeholder="***************"]').type('password')
    cy.get('button').click()
    cy.window().its('localStorage').invoke('getItem', 'token')
  })
})