describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.viewport(1400, 900)//definir o tamano da tela
    cy.visit('http://localhost:3000') // testando se abre nosso site
    cy.get('#email').type("4dt@gmail.com") // pegando o seletor do email que é um id nesse caso e o que ele vai receber
    cy.get('#password').type("4DT")

    cy.contains('button', 'Entrar').click()

    cy.contains('h4', 'Formulário').click()

    cy.get("#name").type("Sarah Mendes")
    cy.get("#email").type("sarinhaamaismais@gmail.com")
    cy.get("#phone").type("11999990000").should("have.value", "(11) 99999-0000")
    cy.get("#consultancyType").select("In Company")
    cy.contains("span", "Pessoa Física").click()
    cy.contains("label", "Pessoa Jurídica", { timeout: 10000 }).find("input").should("be.not.checked")
    cy.get("#document").type("00000000000").should("have.value", "000.000.000-00")

    const redes = [
      'Instagram',
      'LinkedIn',
      'Udemy',
      'YouTube',
      'Indicação de Amigo'

    ]

    redes.forEach((item) => {
      cy.contains('label', item)
        .find('input').check().should('be.checked')
    })

    cy.get('input[type="file"]').selectFile('./cypress/fixtures/header.png', { force: true })

    cy.get('#details').type("Quero ir embora")

    cy.get('#technologies').type("naosei").type('{enter}')
    cy.get('#technologies').type("sla").type('{enter}')
    cy.get('#technologies').type("juroqnnda").type('{enter}')

    cy.contains('span', 'naosei').should('exist')

    cy.contains("label", "Li e aceito os termos de uso *").find("input").check().should("be.checked")

    cy.contains('button', 'Enviar formulário').click()

  })
  it.only('Campo em branco', () => { // aqui é pra falar oq a gente quer fazer ( passo a passo)
    cy.visit('http://localhost:3000')
    cy.viewport(1400, 900)//definir o tamano da tela
    cy.visit('http://localhost:3000') // testando se abre nosso site
    cy.get('#email').type("4dt@gmail.com") // pegando o seletor do email que é um id nesse caso e o que ele vai receber
    cy.get('#password').type("4DT")

    cy.contains('button', 'Entrar').click()

    cy.contains('h4', 'Formulário').click()
    cy.contains('button', 'Enviar formulário').click()
    cy.contains('Digite nome e sobrenome')
    cy.contains('Informe um email válido')
    cy.contains('Você precisa aceitar os termos de uso')



  })
})

