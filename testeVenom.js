const puppeteer = require('puppeteer');
const moment = require('moment');
(async () => {
  const url = 'https://comprar-passagem.elomilhas.com.br/#/?agency_token=%242y%2410%24R8RIhjGfdPPpZe42jkAz6OtE3z6ZOY4.neMEQgI4Ak6w.GQIfHx26';
   const selectors = {
    origin: '#root > div > div.be-wrapper.be-nosidebar-left > div > div > div:nth-child(1) > div.col-xs-12.col-md-3.animated.fadeInLeftBig.form-fixed > div > form > div > div:nth-child(1) > div > div > input',
    destination: '#root > div > div.be-wrapper.be-nosidebar-left > div > div > div:nth-child(1) > div.col-xs-12.col-md-3.animated.fadeInLeftBig.form-fixed > div > form > div > div.form-group.row > div > div > input',
    dateStart: '#root > div > div.be-wrapper.be-nosidebar-left > div > div > div:nth-child(1) > div.col-xs-12.col-md-3.animated.fadeInLeftBig.form-fixed > div > form > div > div:nth-child(3) > div > div > div.react-datepicker-wrapper > div > input',
    dateBack: '#root > div > div.be-wrapper.be-nosidebar-left > div > div > div:nth-child(1) > div.col-xs-12.col-md-3.animated.fadeInLeftBig.form-fixed > div > form > div > div:nth-child(4) > div > div > div.react-datepicker-wrapper > div > input',
    adults: '#root > div > div.be-wrapper.be-nosidebar-left > div > div > div:nth-child(1) > div.col-xs-12.col-md-3.animated.fadeInLeftBig.form-fixed > div > form > div > div:nth-child(5) > div:nth-child(1) > select',
    children: '#root > div > div.be-wrapper.be-nosidebar-left > div > div > div:nth-child(1) > div.col-xs-12.col-md-3.animated.fadeInLeftBig.form-fixed > div > form > div > div:nth-child(5) > div:nth-child(2) > select',
    flight1: '#form-ida > div:nth-child(3) > center > .material-card > .col-md-7 > .row > .col-md-3:nth-child(1) > h3',
    back: '#root > div > div.be-wrapper.be-nosidebar-left > div > div > div.col-md-6.col-xs-12.col-md-offset-3 > div > div > div > div > ul > li:nth-child(2)',
    flightBack: '#form-volta > div:nth-child(3) > center > .material-card > .col-md-3 > .row > .col-md-12 > p',
    conclude: '.col-md-3 > .panel > .animated > .btn > .hidden-md',
    passengerName: '.col-md-12 > div > .row > .col-md-4:nth-child(1) > .form-control',
    passengerLastName: '.col-md-12 > div > .row > .col-md-4:nth-child(2) > .form-control',
    passengerEmail: '.col-md-12 > div > .row > .col-md-4:nth-child(3) > .form-control',
    passengerCPF: '.col-md-12 > div:nth-child(2) > .row > .col-md-3 > #adult-cpf',
    phone: '.col-md-12 > div:nth-child(2) > .row > .col-md-3 > #adult-phone',
    date: '.col-md-12 > div:nth-child(2) > .row > .col-md-2 > .date',
    gender: '.col-md-12 > div:nth-child(2) > .row > .col-md-2 > #adult-gender',
    kidName: '.row > .col-md-12 > .row > .col-md-4:nth-child(1) > #child-fullname',
    kidLastName: '.row > .col-md-12 > .row > .col-md-4:nth-child(2) > #child-fullname',
    kidDate: '.row > .col-md-12 > .row > .col-md-2 > .date',
    kidGender: '.row > .col-md-12 > .row > .col-md-2 > #adult-gender',
    buyerName: '.panel > .panel-body > .row > .col-md-6:nth-child(1) > .form-control',
    buyerEmail: '.panel > .panel-body > .row > .col-md-6:nth-child(2) > .form-control',
    pagSeg: '.panel-body > .col-xs-12:nth-child(4) > .panel > .panel-body > img',
    pagSegName: '.panel-body > .row > div > .col-md-4:nth-child(1) > .form-control',
    pagSegEmail: '.panel-body > .row > div > .col-md-4:nth-child(2) > .form-control',
    pagSegCPF: '.panel-body > .row > div > .col-md-4 > #gateway-cpf_cnpj',
    checkbox: '.col-md-12 > .row > .col-md-8 > .be-checkbox > label',
    save: '.row > .col-md-12 > .row > .col-md-4 > .btn',
    identification: '#content > #identificationForm > .content > .field > #user',
    btnAction: '#all > #content > #identificationForm > .content > .mainActionButton',
    paymentOptions: '.payment-step > #paymentOptions > ul > #bookletOption > .option-label',
    submit: '#btn-submit'
  };

  const browser = await puppeteer.launch({ headless: false, slowMo:30 });
  const page = await browser.newPage();
  const navigationPromise = page.waitForNavigation();
  await page.setViewport({ width: 1493, height: 771 })

  try {

    await page.goto(url)

  } catch (error) {

    console.log("\n\n Sem Internet!  \n\n")
    await page.screenshot({ path: 'full2.png', fullPage: true });
    await browser.close()
  }
  await navigationPromise

  var arrayOringin = [
    'RIO', 'BSB', 'REC', 'SJP', 'MCZ', 'VCP', 'JPA'
  ];
  var randomOrigin = arrayOringin[Math.floor(Math.random() * arrayOringin.length)];
  // await page.waitFor(5000)

  var arrayDestination = [
    'SAO', 'POA', 'LDB', 'MCP', 'BHZ', 'AJU', 'NAT'
  ];
  var randomDestination = arrayDestination[Math.floor(Math.random() * arrayDestination.length)];
  //await page.waitFor(5000)

  await page.click(selectors.origin)
  await page.type(selectors.origin, randomOrigin)
  await page.waitForSelector(selectors.origin)

  await page.click(selectors.destination)
  await page.type(selectors.destination, randomDestination)
  await page.waitForSelector(selectors.destination)

  await page.click(selectors.dateStart)
  await page.type(selectors.dateStart, moment().add(2, 'days').format('DD/MM/YYYY'))
  await page.click('body')

  await page.click(selectors.dateBack)
  await page.type(selectors.dateBack, moment().add(5, 'days').format('DD/MM/YYYY'))
  await page.click('body')

  await page.click(selectors.adults)
  await page.type(selectors.adults, '1')

  await page.click(selectors.children)
  await page.type(selectors.children, '1')

  await page.click(selectors.submit)

  await navigationPromise

  setTimeout(async () => {

    try {
      await page.click(selectors.flight1)
      await page.waitForSelector(selectors.flight1)
      await page.waitFor(70000);

    } catch (ae) {
      console.log("Voo n encontrado \n\n")
      await page.screenshot({ path: 'Voo_n_encontrado.png', fullPage: true });
      await browser.close();
    }

    await page.waitForSelector(selectors.back)
    await page.click(selectors.back)

    await navigationPromise

    await page.waitForSelector(selectors.flightBack)
    await page.click(selectors.flightBack)

    await navigationPromise
    await page.waitFor(10000);

    await page.waitForSelector(selectors.conclude)
    await page.click(selectors.conclude)
    await page.click('body')

    await navigationPromise
    //Dados de 1 adulto
    await page.click(selectors.passengerName)
    await page.type(selectors.passengerName, 'Passageiro')
    await page.type(selectors.passengerLastName, 'Teste')
    await page.type(selectors.passengerEmail, 'passageiroteste@teste.com')
    await page.waitForSelector(selectors.passengerName)

    try {
      await page.click(selectors.passengerCPF)
      await page.type(selectors.passengerCPF, '123.123.123-12')
      await page.waitForSelector(selectors.passengerCPF)

    } catch (error) { }

    await page.click(selectors.phone)
    await page.type(selectors.phone, '(11)1111-1111')
    await page.waitForSelector(selectors.phone)

    await page.click(selectors.date)
    await page.type(selectors.date, '22/11/1999')
    await page.waitForSelector(selectors.date)

    await page.click(selectors.gender)
    await page.select(selectors.gender, 'M')
    await page.waitForSelector(selectors.gender)
    await page.click('body')

    //crianca
    await page.click(selectors.kidName)
    await page.type(selectors.kidName, 'testinho')
    await page.type(selectors.kidLastName, 'teste')
    await page.type(selectors.kidDate, '10/02/2015')
    await page.waitForSelector(selectors.kidName)

    await page.click(selectors.kidGender)
    await page.select(selectors.kidGender, 'F')
    await page.waitForSelector(selectors.kidGender)
    await page.click('body')
    //comprador
    await page.click(selectors.buyerName)
    await page.type(selectors.buyerName, 'sibele')
    await page.type(selectors.buyerEmail, 'sibele@mangue3.com')
    await page.waitForSelector(selectors.buyerName)
    //pagseguro
    await page.click(selectors.pagSeg)
    await page.waitForSelector(selectors.pagSeg)

    await page.click(selectors.pagSegName)
    await page.type(selectors.pagSegName, 'teste')
    await page.type(selectors.pagSegEmail, 'sibele@mangue3.com')
    await page.waitForSelector(selectors.pagSegName)

    await page.click(selectors.pagSegCPF)
    await page.type(selectors.pagSegCPF, '123.123.123-12')
    await page.waitForSelector(selectors.pagSegCPF)

    await page.waitForSelector(selectors.checkbox)
    await page.click(selectors.checkbox)

    await page.waitForSelector(selectors.save)
    await page.click(selectors.save)

    await navigationPromise

    await page.waitForSelector(selectors.identification)
    await page.click(selectors.identification)
    await page.type(selectors.identification, 'sibele.mangue3@gmail.com')

    await page.waitForSelector(selectors.btnAction)
    await page.click(selectors.btnAction)

    await navigationPromise

    await page.waitForSelector(selectors.paymentOptions)
    await page.click(selectors.paymentOptions)

    await navigationPromise
    await browser.close()

  }, 40000);

})();