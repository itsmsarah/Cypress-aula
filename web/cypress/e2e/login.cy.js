describe('template spec', () => {
  it('Login com sucesso', () => { // aqui é pra falar oq a gente quer fazer ( passo a passo)
    cy.viewport(1400,900)//definir o tamano da tela
    cy.visit('http://localhost:3000') // testando se abre nosso site
    cy.get('#email').type("4dt@gmail.com") // pegando o seletor do email que é um id nesse caso e o que ele vai receber
    cy.get('#password').type("4DT")

    cy.contains('button', 'Entrar').click() // qd n tem um indicador, ai vc coloca o que é , qual o contéudo e o que ele faz
  })
  //o it é um caso de teste

   it('Campo em branco', () => { // aqui é pra falar oq a gente quer fazer ( passo a passo)
    cy.viewport(1400,900)//definir o tamano da tela
    cy.visit('http://localhost:3000') // testando se abre nosso site
   // pegando o seletor do email que é um id nesse caso e o que ele vai receber
    

    cy.contains('button', 'Entrar').click() // qd n tem um indicador, ai vc coloca o que é , qual o contéudo e o que ele faz
    
    cy.contains("Ei, não esqueça de digitar seu email!")

    cy.contains("Você precisa de uma senha para entrar! 🔒")
  })

  it('Dados inválidos', () => { // aqui é pra falar oq a gente quer fazer ( passo a passo)
    cy.viewport(1400,900)//definir o tamano da tela
    cy.visit('http://localhost:3000') // testando se abre nosso site
   // pegando o seletor do email que é um id nesse caso e o que ele vai receber

    cy.get('#email').type("4dt@gmail.com")
    cy.get('#password').type("4DT")

    cy.wait(3000) // o tempo de delay que eu quero
    

    cy.contains('button', 'Entrar').click() // qd n tem um indicador, ai vc coloca o que é , qual o contéudo e o que ele faz
    
    cy.contains("Acesso negado! Tente novamente.")

   
    

  })


})