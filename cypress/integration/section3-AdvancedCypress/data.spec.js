describe('Write/Read data to JSON / Text file', ()=>{
    it('Write data into JSON', ()=>{
        cy.writeFile('log.json' , {name: "Mike", age: 25})
    })

    it('Write data to the text file', ()=>{
        cy.writeFile('log.txt', 'Hello Home')  
    })


    it('Read from JSON and verify age', ()=>{
        cy.readFile('log.json').its('age').should('eq',25)            
    })

    it('Read from file and verify text', ()=>{
        cy.readFile('log.txt').should('contain', 'Home')            
    })

    it('Read and verify browser document content', ()=>{
        cy.visit('https://www.example.com')    
        cy.wait(2000)
        cy.document().its('contentType').should('eq', 'text/html')

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')

    })

})