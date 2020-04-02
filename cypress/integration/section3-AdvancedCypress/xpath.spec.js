describe('xpath with Cypress', ()=> {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/')

    })

    it('Click on element using xpath', ()=>{
        cy.xpath('//button[@id="signin_button"]').should('be.visible')
        cy.xpath('//button[@id="signin_button"]').click()

    })

    it('Display login page', ()=>{
        cy.xpath('//form').should('have.length', 1)

    })
})