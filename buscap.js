const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 40 })
    const page = await browser.newPage()

    const navigationPromise = page.waitForNavigation()

    await page.goto('https://elomilhas.com.br/#/')

    await page.setViewport({ width: 1326, height: 627 })

    await page.waitForSelector('.form-horizontal > .form-group:nth-child(1) > div > div > .form-control')
    await page.click('.form-horizontal > .form-group:nth-child(1) > div > div > .form-control')
    await page.type('.form-horizontal > .form-group:nth-child(1) > div > div > .form-control', 'REC')

    await page.waitForSelector('.form-horizontal > .form-group:nth-child(2) > div > div > .form-control')
    await page.click('.form-horizontal > .form-group:nth-child(2) > div > div > .form-control')
    await page.type('.form-horizontal > .form-group:nth-child(2) > div > div > .form-control', 'São Paulo - Todos Aeroportos (SAO)')

    await page.waitForSelector('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(3) > div > div.react-datepicker-wrapper')
    await page.click('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(3) > div > div.react-datepicker-wrapper')
    await page.type('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(3) > div > div.react-datepicker-wrapper', '10/03/2019')
    await page.click('body')

    await page.waitForSelector('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(4) > div > div > div > div > input')
    await page.click('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(4) > div > div > div > div > input')
    await page.type('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(4) > div > div > div > div > input', '20/03/2019')
    await page.click('body')

    await page.waitForSelector('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > button')
    await page.click('#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > button')

    await navigationPromise

    await page.waitForSelector('#form-ida > div:nth-child(3) > center > .material-card > .col-md-2 > .row')
    await page.click('#form-ida > div:nth-child(3) > center > .material-card > .col-md-2 > .row')

    await browser.close()
})()