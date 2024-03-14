import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

describe('All Login Tests', () => {

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('LOGIN TEST 1', () => {
        
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.wait(2000)
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    })

    it('LOGIN TEST 2', () => {
        loginPage.enterUsername('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.wait(2000)
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    })

})