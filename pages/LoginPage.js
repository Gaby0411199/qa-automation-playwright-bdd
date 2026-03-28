class LoginPage {
    constructor(page) {
      this.page = page
      this.usernameInput = '[data-test="username"]'
      this.passwordInput = '[data-test="password"]'
      this.loginButton = '[data-test="login-button"]'
      this.errorMessage = '[data-test="error"]'
      this.pageTitle = '.title'
    }
  
    async goto() {
      await this.page.goto('https://www.saucedemo.com')
    }
  
    async login(username, password) {
      await this.page.fill(this.usernameInput, username)
      await this.page.fill(this.passwordInput, password)
      await this.page.click(this.loginButton)
    }
  
    async getTitle() {
      return await this.page.textContent(this.pageTitle)
    }
  
    async getErrorMessage() {
      return await this.page.textContent(this.errorMessage)
    }
  
    async isErrorVisible() {
      return await this.page.isVisible(this.errorMessage)
    }
  }
  
  module.exports = { LoginPage }