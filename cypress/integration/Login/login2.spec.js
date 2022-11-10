

describe("verify the login functinalities",()=>{
    it("verify the login functinalities with valid credintial",()=>{
       cy.visit('https://www.zoomin.com/sign-in?%2F%27')
       cy.get('input[name="email"]').type('suyograhane1883@gmail.com')
       cy.get('input[name="password"]').type('Suyog@123')
       cy.get('span[class="MuiButton-label"]').click()
    })
})