describe('Working with inputs', () => {
 
    it('Go to page', ()=>{
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.get('.page-header > h3').contains('Log in to ZeroBank')
    })

    it('Verify title', ()=>{
        cy.title().should('include', 'Zero - Log in')
    })

    it('Fill username', ()=>{
        //Variable and aliases. Create the alias username
        cy.get('#user_login').as('username')

        cy.get('@username').clear()
        cy.get('@username').type('toniCabrera', {delay:50})
    })


    it('Fill Password', ()=>{
        
        cy.get('#user_password').as('pass')
        cy.get('@pass').clear()
        cy.get('@pass').type('1246546',  {delay:50})

    })


    it('Select checkbox', ()=>{
        
        cy.get('#user_remember_me').click()
        //Unselect the checkbox
        cy.get('input[type="checkbox"]').click()

    })

    it('Should pause the execution', () => {
        cy.pause()
    })


    it('Submit login form', ()=>{
        cy.contains('Sign in').click()
    })


    it('Display error message', ()=>{
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')

     
    })




})