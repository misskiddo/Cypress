describe('Custom command', ()=>{
    it('Login', ()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.myLogin('holacaracola', '12345')


    })


})