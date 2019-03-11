const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false, slowMo:25})
  const page = await browser.newPage()
  const navigationPromise = page.waitForNavigation()
  await page.setViewport({ width: 1493, height: 771 })
  
  await page.goto('https://comprar-passagem.elomilhas.com.br/#/?type_trip=0&adults=1&children=0&babies=0&baggage_type=1&date_starting=30%2F03%2F2019&date_back=&destination_id=163&origin_id=2&international=false&agency_token=%242y%2410%24R8RIhjGfdPPpZe42jkAz6OtE3z6ZOY4.neMEQgI4Ak6w.GQIfHx26')
  
  await page.waitForSelector('div:nth-child(3) > center > .material-card > .col-md-2 > .row > .col-md-12 > .be-checkbox > label')
  await page.click('div:nth-child(3) > center > .material-card > .col-md-2 > .row > .col-md-12 > .be-checkbox > label')
  
  await page.waitForSelector('.col-md-3 > .panel > .animated > .btn > .hidden-md')
  await page.click('.col-md-3 > .panel > .animated > .btn > .hidden-md')
  
  await page.waitForSelector('.row > .col-md-12 > div > .row > .col-md-3:nth-child(4)')
  await page.click('.row > .col-md-12 > div > .row > .col-md-3:nth-child(4)')
  
  await page.waitForSelector('.col-md-12 > div > .row > .col-md-4:nth-child(1) > .form-control')
  await page.click('.col-md-12 > div > .row > .col-md-4:nth-child(1) > .form-control')
  
  await page.type('.col-md-12 > div > .row > .col-md-4:nth-child(1) > .form-control', 'Passageiro')
  
  await page.type('.col-md-12 > div > .row > .col-md-4:nth-child(2) > .form-control', 'Teste')
  
  await page.type('.col-md-12 > div > .row > .col-md-4:nth-child(3) > .form-control', 'passageiroteste@teste.com')
 
  await page.waitForSelector('.col-md-12 > div > .row > .col-md-3 > #adult-cpf')
  await page.click('.col-md-12 > div > .row > .col-md-3 > #adult-cpf')
 
  await page.type('.col-md-12 > div > .row > .col-md-3 > #adult-cpf','510.140.440-30')

  await page.waitForSelector('.col-md-12 > div > .row > .col-md-3 > #adult-phone')
  await page.click('.col-md-12 > div > .row > .col-md-3 > #adult-phone')
  
  await page.type('.col-md-12 > div > .row > .col-md-3 > #adult-phone', '(11) 11112-2222')
  
  await page.type('.col-md-12 > div > .row > .col-md-2 > .date', '11/11/1999')
  
  await page.select('.col-md-12 > div > .row > .col-md-2 > #adult-gender', 'M')
  
  await page.waitForSelector('.col-md-12 > div > .row > .col-md-2 > #adult-gender')
  await page.click('.col-md-12 > div > .row > .col-md-2 > #adult-gender')
  
  await page.waitForSelector('.panel > .panel-body > .row > .col-md-6:nth-child(1) > .form-control')
  await page.click('.panel > .panel-body > .row > .col-md-6:nth-child(1) > .form-control')
  
  await page.type('.panel > .panel-body > .row > .col-md-6:nth-child(1) > .form-control', 'Comprador Teste')
  
  await page.waitForSelector('.panel > .panel-body > .row > .col-md-6:nth-child(2) > .form-control')
  await page.click('.panel > .panel-body > .row > .col-md-6:nth-child(2) > .form-control')
 
  await page.type('.panel > .panel-body > .row > .col-md-6:nth-child(2) > .form-control','sibele@mangue3.com')

  await page.waitForSelector('.panel-body > .col-xs-12:nth-child(4) > .panel > .panel-body > img')
  await page.click('.panel-body > .col-xs-12:nth-child(4) > .panel > .panel-body > img')
  
  await page.waitForSelector('.panel-body > .row > div > .col-md-4:nth-child(1) > .form-control')
  await page.click('.panel-body > .row > div > .col-md-4:nth-child(1) > .form-control')

  await page.type('.panel-body > .row > div > .col-md-4:nth-child(1) > .form-control','Pagador PagSeguro')
  
  await page.waitForSelector('.panel-body > .row > div > .col-md-4:nth-child(2) > .form-control')
  await page.click('.panel-body > .row > div > .col-md-4:nth-child(2) > .form-control')
  
  await page.type('.panel-body > .row > div > .col-md-4:nth-child(2) > .form-control' , 'sibele@mangue3.com')
  
  await page.waitForSelector('.panel-body > .row > div > .col-md-4 > #gateway-cpf_cnpj')
  await page.click('.panel-body > .row > div > .col-md-4 > #gateway-cpf_cnpj')

  await page.type('.panel-body > .row > div > .col-md-4 > #gateway-cpf_cnpj','451.747.458-45')
  
  await page.waitForSelector('.row > .col-md-12 > .row > .col-md-12 > #observation')
  await page.click('.row > .col-md-12 > .row > .col-md-12 > #observation')

  await page.waitForSelector('.col-md-12 > .row > .col-md-8 > .be-checkbox > label')
  await page.click('.col-md-12 > .row > .col-md-8 > .be-checkbox > label')

  await page.waitForSelector('.row > .col-md-12 > .row > .col-md-4 > .btn')
  await page.click('.row > .col-md-12 > .row > .col-md-4 > .btn')

  await navigationPromise

  await page.waitForSelector('#content > #identificationForm > .content > .field > #user')
  await page.click('#content > #identificationForm > .content > .field > #user')

  await page.type('#content > #identificationForm > .content > .field > #user','sibele@mangue3.com')
  
  /* await page.waitForSelector('#all > #content > #identificationForm > .content > .mainActionButton')
  await page.click('#all > #content > #identificationForm > .content > .mainActionButton')
   */
  await navigationPromise
 
  await browser.close()
})() //preenchendo dados depois da busca feitas e voo escolhido


const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  await page.setViewport({ width: 1493, height: 771 })
  
  await page.goto('https://comprar-passagem.elomilhas.com.br/#/payment')
  
  await page.waitForSelector('.col-md-12 > div:nth-child(2) > .row > .col-md-4:nth-child(1) > .form-control')
  await page.click('.col-md-12 > div:nth-child(2) > .row > .col-md-4:nth-child(1) > .form-control')
  
  await page.waitForSelector('.col-md-12 > div:nth-child(2) > .row > .col-md-4:nth-child(2) > .form-control')
  await page.click('.col-md-12 > div:nth-child(2) > .row > .col-md-4:nth-child(2) > .form-control')
  
  await page.waitForSelector('.col-md-12 > div:nth-child(2) > .row > .col-md-4:nth-child(3) > .form-control')
  await page.click('.col-md-12 > div:nth-child(2) > .row > .col-md-4:nth-child(3) > .form-control')
  
  await page.waitForSelector('.col-md-12 > div:nth-child(2) > .row > .col-md-3 > #adult-cpf')
  await page.click('.col-md-12 > div:nth-child(2) > .row > .col-md-3 > #adult-cpf')
  
  await page.waitForSelector('.col-md-12 > div:nth-child(2) > .row > .col-md-3 > #adult-phone')
  await page.click('.col-md-12 > div:nth-child(2) > .row > .col-md-3 > #adult-phone')
  
  await page.waitForSelector('.col-md-12 > div:nth-child(2) > .row > .col-md-2 > .date')
  await page.click('.col-md-12 > div:nth-child(2) > .row > .col-md-2 > .date')
  
  await page.select('.col-md-12 > div:nth-child(2) > .row > .col-md-2 > #adult-gender', 'M')
  
  await page.waitForSelector('.col-md-12 > div:nth-child(2) > .row > .col-md-2 > #adult-gender')
  await page.click('.col-md-12 > div:nth-child(2) > .row > .col-md-2 > #adult-gender')
  
  await page.waitForSelector('.col-md-12 > div:nth-child(3) > .row > .col-md-4:nth-child(1) > .form-control')
  await page.click('.col-md-12 > div:nth-child(3) > .row > .col-md-4:nth-child(1) > .form-control')
  
  await page.waitForSelector('.col-md-12 > div:nth-child(3) > .row > .col-md-4:nth-child(2) > .form-control')
  await page.click('.col-md-12 > div:nth-child(3) > .row > .col-md-4:nth-child(2) > .form-control')
  
  await page.waitForSelector('.col-md-12 > div:nth-child(3) > .row > .col-md-4:nth-child(3) > .form-control')
  await page.click('.col-md-12 > div:nth-child(3) > .row > .col-md-4:nth-child(3) > .form-control')
  
  await page.waitForSelector('.col-md-12 > div:nth-child(3) > .row > .col-md-3 > #adult-cpf')
  await page.click('.col-md-12 > div:nth-child(3) > .row > .col-md-3 > #adult-cpf')
  
  await page.waitForSelector('.col-md-12 > div:nth-child(3) > .row > .col-md-3 > #adult-phone')
  await page.click('.col-md-12 > div:nth-child(3) > .row > .col-md-3 > #adult-phone')
  
  await page.waitForSelector('.col-md-12 > div:nth-child(3) > .row > .col-md-2 > .date')
  await page.click('.col-md-12 > div:nth-child(3) > .row > .col-md-2 > .date')
  
  await page.select('.col-md-12 > div:nth-child(3) > .row > .col-md-2 > #adult-gender', 'F')
  
  await page.waitForSelector('.col-md-12 > div:nth-child(3) > .row > .col-md-2 > #adult-gender')
  await page.click('.col-md-12 > div:nth-child(3) > .row > .col-md-2 > #adult-gender')
  
  await page.waitForSelector('.row > .col-md-12 > .row > .col-md-4:nth-child(1) > #child-fullname')
  await page.click('.row > .col-md-12 > .row > .col-md-4:nth-child(1) > #child-fullname')
  
  await page.type('.row > .col-md-12 > .row > .col-md-4:nth-child(1) > #child-fullname', 'oi')
  
  await page.type('.row > .col-md-12 > .row > .col-md-4:nth-child(2) > #child-fullname', 'oi')
  
  await page.select('.row > .col-md-12 > .row > .col-md-2 > #adult-gender', 'M')
  
  await page.waitForSelector('.row > .col-md-12 > .row > .col-md-2 > #adult-gender')
  await page.click('.row > .col-md-12 > .row > .col-md-2 > #adult-gender')
  
  await browser.close()
})()