// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Student-Reset-Password', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Student-Reset-Password', async function() {
    await driver.get("https://eexam-five.vercel.app/")
    await driver.manage().window().setRect({ width: 1296, height: 688 })
    await driver.findElement(By.linkText("Login")).click()
    await driver.findElement(By.id("username")).click()
    await driver.findElement(By.id("username")).sendKeys("202200004")
    await driver.findElement(By.id("password")).sendKeys("Harshali")
    await driver.findElement(By.css(".login-button")).click()
    await driver.findElement(By.css(".profile-image")).click()
    await driver.findElement(By.id("reset-button")).click()
    await driver.findElement(By.id("currentPassword")).click()
    await driver.findElement(By.id("currentPassword")).sendKeys("Harshali")
    await driver.findElement(By.id("newPassword")).click()
    await driver.findElement(By.id("newPassword")).sendKeys("Harshali_2074")
    await driver.findElement(By.id("confirmPassword")).click()
    await driver.findElement(By.id("confirmPassword")).sendKeys("Harshali_2074")
    await driver.findElement(By.css(".reset-button")).click()
    await driver.findElement(By.css(".Toastify__close-button path")).click()
    await driver.findElement(By.css(".profile-image")).click()
    await driver.findElement(By.xpath("(//button[@id=\'reset-button\'])[2]")).click()
    await driver.findElement(By.css(".logout")).click()
  })
})