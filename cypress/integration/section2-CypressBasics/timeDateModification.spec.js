describe('Section 25', () => {
    it('Override time', ()=> {

        const date = new Date(2020 , 3 , 15).getTime() //return a timestamp
        cy.clock(date)
        cy.log(date)

    })




})