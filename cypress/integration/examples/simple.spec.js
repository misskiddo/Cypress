describe('Browser Actions',() => {
    it('Should load correct url', () => {
       cy.visit('http://books.toscrape.com/')
       cy.url().should('include', "toscrape")
       cy.log('Before Reload')
       cy.reload()
       cy.log("after reload")

       cy.clearCookies({log:true})
       cy.clearLocalStorage('your item', {log:true})
    })

    it('Travel category', ()=>{
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })


    it('Should display correct number of books', ()=>{
      //  cy.get('.product_pod').its('lenght').should('eq', 20)
      cy.get('.product_pod').its('length').should('eq', 11)
    })

    it('Go to poetry', ()=>{
        cy.get('a').contains('Poetry').click()
        cy.get('h1').contains('Poetry')
    })

    it('Click on Olio book', ()=>{
        cy.get('a').contains('Olio').click()
        cy.get('h1').contains('Olio')
    })

    it('Verify price', ()=>{
       // cy.get('.col-sm-6.product_main > .price_color').should('include', '£23.88')
       //cy.get('.col-sm-6.product_main  > .price_color').contains('23.88')
       cy.get('.price_color').contains('23.88')
    })




   
})

