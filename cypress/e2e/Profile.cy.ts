describe('template spec', () => {
  it('Testas os elementos da página Profile', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[placeholder="@gmail.com"]').type('cliente@youdrive.com')
    cy.get('input[placeholder="***************"]').type('password')
    cy.get('button').click()
    cy.contains('Profile picture').should('be.visible')
    cy.contains('Your Name').should('be.visible')
    cy.contains('Your E-mail').should('be.visible')
    cy.get('img').should('be.visible')
  })
  it('Testa se ao apertar em Logout o usuário é redirecionado para a página de Login', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[placeholder="@gmail.com"]').type('cliente@youdrive.com')
    cy.get('input[placeholder="***************"]').type('password')
    cy.get('button').click()
    cy.contains('Logout').click()
    cy.contains('Sing In').should('be.visible')
  })
  it('Testa se ao apertar em Logout o token é removido do localStorage', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[placeholder="@gmail.com"]').type('cliente@youdrive.com')
    cy.get('input[placeholder="***************"]').type('password')
    cy.get('button').click()
    cy.contains('Logout').click()
    expect(localStorage.getItem('token')).to.be.null
  })
  it('Testa se ao entrar diretamente na rota profile sem token é redirecionado para a página de Login', () => {
    cy.visit('http://localhost:5173/profile')
    cy.contains('Sing In').should('be.visible')
  })
  it('Testa se a API é chamada ao entrar na página Profile', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[placeholder="@gmail.com"]').type('cliente@youdrive.com')
    cy.get('input[placeholder="***************"]').type('password')
    cy.get('button').click()
    cy.wait(2000)
    cy.intercept('GET', 'https://api.homologation.cliqdrive.com.br/auth/profile/').as('profile')
    cy.visit('http://localhost:5173/profile')
    cy.wait('@profile').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
    })
  })
})