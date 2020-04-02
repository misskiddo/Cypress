class BasePage{
    static loadHomePage(){
        cy.visit('https://devexpress.github.io/testcafe/example/')   
    }

    static wait(number){ 
        cy.wait(5000)
    }


}


class HomePage extends BasePage{
    static scrollToBottom(){
        cy.get('#submit-button').scrollIntoView()
    }

    static scrollToTop(){
        cy.get('header').scrollIntoView()
    }

}



describe('Abstraction with classes', ()=>{
    before(function() {
        // Runs before all tests inside describe
        // Setup test data or test context. Seed or reset the database
        HomePage.loadHomePage()

    })

    after(function(){
        // Runs after all test inside describe block are done
        // Test clean up. Clean cookies or localStore

    })

    beforeEach(function(){
        // Runs before each "it" block in the describe

    })

    afterEach(function(){
        // Runs after each "it" block in the describe
        
    })

    //it.skip('1st IT', ()=>{
    it.only('1st IT', ()=>{
      HomePage.scrollToBottom()
      HomePage.wait(2000)
      HomePage.scrollToTop()
    })

    it('2nd IT', ()=>{
        HomePage.scrollToBottom()
        HomePage.wait(2000)
        HomePage.scrollToTop()
      })

})