describe('Test Scenario - Verify Feature Login', () => {
    it('TC001_Positive_Success login using valid email and valid password', () => {
        cy.visit('https://finance.onlydev.my.id')
        cy.url().should('include', '/sign-in')

        cy.get('#normal_login_email').type("coba8860@gmail.com")
        cy.get('#normal_login_password').type("cMMzX&x#L")
        cy.get('button[type="submit"]').click()

        // should be redirected to Master User page /users
        cy.url().should('include', '/users')
    })

    it('TC002_Negative_Cannot login with valid email and invalid password', () => {
        cy.visit('https://finance.onlydev.my.id')
        cy.url().should('include', '/sign-in')

        cy.get('#normal_login_email').type("coba8860@gmail.com")
        cy.get('#normal_login_password').type("dwikyk24")
        cy.get('button[type="submit"]').click()

        // should display alert "(404) invalid password"
        cy.contains("(404) invalid password")
    })

    it('TC003_Negative_Cannot login with invalid email and valid password', () => {
        cy.visit('https://finance.onlydev.my.id')
        cy.url().should('include', '/sign-in')

        cy.get('#normal_login_email').type("dwiky24k@gmail.com")
        cy.get('#normal_login_password').type("cMMzX&x#")
        cy.get('button[type="submit"]').click()

        // should display alert "(404) email not found"
        cy.contains("(404) email not found")
    })

    it('TC004_Negative_Cannot login with invalid email and invalid password', () => {
        cy.visit('https://finance.onlydev.my.id')
        cy.url().should('include', '/sign-in')

        cy.get('#normal_login_email').type("dwiky24k@gmail.com")
        cy.get('#normal_login_password').type("dwikyk24")
        cy.get('button[type="submit"]').click()

        // should display alert "(404) email not found"
        cy.contains("(404) email not found")
    })

    it('TC005_Negative_Cannot login with invalid email format', () => {
        cy.visit('https://finance.onlydev.my.id')
        cy.url().should('include', '/sign-in')

        cy.get('#normal_login_email').type("coba8860@gmail")
        cy.get('#normal_login_password').type("cMMzX&x#L")
        cy.get('button[type="submit"]').click()

        // should display alert "(404) email not found"
        cy.contains("(404) email not found")
    })

    it('TC006_Negative_Cannot login without any input', () => {
        cy.visit('https://finance.onlydev.my.id')
        cy.url().should('include', '/sign-in')

        cy.get('button[type="submit"]').click()

        // should display alert "Please input your Email or Username!"
        // and "Please input your Password!"
        cy.contains("Please input your Email or Username!")
        cy.contains("Please input your Password!")
    })
})