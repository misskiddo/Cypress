describe('Scroll on the page', ()=>{
    it('Scroll down and up', ()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.wait(5000)
        cy.get('#submit-button').scrollIntoView()
        cy.wait(5000)
        cy.get('header').scrollIntoView()

    })

})