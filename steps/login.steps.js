const { Given, When, Then, Before, After } = require('@cucumber/cucumber')
const { chromium } = require('playwright')
const { LoginPage } = require('../pages/LoginPage')
const { expect } = require('@playwright/test')

let browser, context, page, loginPage

Before(async () => {
  browser = await chromium.launch({ headless: false, slowMo: 500 })
  context = await browser.newContext()
  page = await context.newPage()
  loginPage = new LoginPage(page)
})

After(async () => {
  await browser.close()
})

Given('el usuario está en la página de login', async () => {
  await loginPage.goto()
})

When('ingresa usuario {string} y contraseña {string}', async (username, password) => {
  await loginPage.login(username, password)
})

Then('debería ver el dashboard con título {string}', async (title) => {
  const pageTitle = await loginPage.getTitle()
  expect(pageTitle).toBe(title)
})

Then('debería ver un mensaje de error', async () => {
  const isVisible = await loginPage.isErrorVisible()
  expect(isVisible).toBe(true)
})