describe('Screenshots', ()=> {
    it('Full page screenshot', ()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({capture: 'fullPage'})


    })


    it('Single element scrrenshot: header', ()=>{
        cy.get('header').screenshot()
    })

    it('Single element scrrenshot: Button', ()=>{
        cy.get('#populate').screenshot()
    })


})