const { Given, When, Then, AfterAll, After, Status } = require('cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');

require("chromedriver");


// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('Eu esteja na pagina de login',  {timeout: 60 * 5000}, async function () {
    await driver.get('https://demo.applitools.com/index.html');
  });
When('Eu digito meu usuário {string} e a senha {string}', async function (user, pass) {
    const userElement = await driver.findElement(By.id('username'));
    userElement.sendKeys(user, Key.RETURN);
    userElement.submit();

    const passElement = await driver.findElement(By.id('password'));
    passElement.sendKeys(pass, Key.RETURN);
    passElement.submit();
  });

When('Eu clico em login', async function () {
    const button = await driver.findElement(By.id('log-in'));
    button.submit();
});
Then('O nome da página deve ser {string}', async function (pageName) {
    const title = await driver.getTitle();
    const isTitleEqual = title.lastIndexOf(`${pageName}`, 0) === 0;
    console.log(title);
    console.log(isTitleEqual);
    expect(isTitleEqual).to.equal(true);
  });


AfterAll('end', async function(){
    await driver.quit();
});
