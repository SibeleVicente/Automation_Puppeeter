const puppeteer = require('puppeteer');
(async () => {
  const url = 'https://elomilhas.com.br/#/';
  const selectors = {
    name: '.box-header > #form-quotation > .form-group > .col-xs-12 > #name',
    email: '.box-header > #form-quotation > .form-group:nth-child(4) > .col-xs-12 > .form-control',
    tel: '.box-header > #form-quotation > .form-group > .col-xs-12 > .sp_celphones',
    milhasTAM: '.box-header > #form-quotation > .form-group > .col-xs-12 > #milhasTAM',
    milhasGOL: '.box-header > #form-quotation > .form-group > .col-xs-12 > #milhasGOL',
    milhasAZUL: '.box-header > #form-quotation > .form-group > .col-xs-12 > #milhasAZUL',
    milhasAVIANCA: '.box-header > #form-quotation > .form-group > .col-xs-12 > #milhasAVIANCA',
    milhasTAMRedeBlack: '.box-header > #form-quotation > .form-group > .col-xs-12 > #milhasTAMRedeBlack',
    milhasGOLDiamante: '.box-header > #form-quotation > .form-group > .col-xs-12 > #milhasGOLDiamante',
    btn: '.box > .form-quotation-device > .box-header > #form-quotation > .btn',
  }

  const browser = await puppeteer.launch({ headless: false, slowMo: 25 })
  const page = await browser.newPage()

  const navigationPromise = page.waitForNavigation()

  await page.setViewport({ width: 1493, height: 771 })
  await page.goto(url)

  await page.waitForSelector(selectors.name)
  await page.click(selectors.name)
  await page.type(selectors.name, 'teste')
  await page.type(selectors.email, 'sibele@mangue3.com')
  await page.type(selectors.tel, '(11) 11111-1111')

  await page.waitForSelector(selectors.milhasTAM)
  await page.click(selectors.milhasTAM)
  await page.select(selectors.milhasTAM, '16000')

  await page.waitForSelector(selectors.milhasGOL)
  await page.click(selectors.milhasGOL)
  await page.select(selectors.milhasGOL, '30000')

  await page.click(selectors.milhasAZUL)
  await page.waitForSelector(selectors.milhasAZUL)
  await page.select(selectors.milhasAZUL, '100000')

  await page.waitForSelector(selectors.milhasAVIANCA)
  await page.click(selectors.milhasAVIANCA)
  await page.select(selectors.milhasAVIANCA, '10000')

  await page.waitForSelector(selectors.milhasTAMRedeBlack)
  await page.click(selectors.milhasTAMRedeBlack)
  await page.select(selectors.milhasTAMRedeBlack, '25000')

  await page.waitForSelector(selectors.milhasGOLDiamante)
  await page.click(selectors.milhasGOLDiamante)
  await page.select(selectors.milhasGOLDiamante, '25000')

  await page.waitForSelector(selectors.btn)
  await page.click(selectors.btn)
  await navigationPromise
  await page.waitFor(20)

  await page.click('body');
  await browser.close()
})()