function name() {
    const puppeteer = require('puppeteer');
    const moment = require('moment');
    (async () => {
        const url = 'https://elomilhas.com.br/#/';
        const selectors = {
            origin: '.form-horizontal > .form-group:nth-child(1) > div > div > .form-control',
            destination: '.form-horizontal > .form-group:nth-child(2) > div > div > .form-control',
            date1: '#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(3) > div > div.react-datepicker-wrapper',
            dateBack: '#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(4) > div > div > div > div > input',
            adults: '#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(5) > div:nth-child(4) > select',
            children: '#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > div:nth-child(5) > div:nth-child(3) > select',
            //#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > button
            Abtn: '#root > div > div > div > div.panel.panel-default.panel-border-color.panel-border-color-primary > div.panel-body > form > button',
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
        }
        const browser = await puppeteer.launch({ headless: false, slowMo: 20 })
        const page = await browser.newPage()
        const navigationPromise = page.waitForNavigation()
        await page.setViewport({ width: 1326, height: 627 })
        //await page.setViewport({ fullPage:true })
        console.log("Execução iniciada:" + moment().format(' DD/MM/YYYY ' + '- HH:mm:ss'))
        
        try {
            
            await page.goto(url)

        } catch (error) {

            console.log("\n\n Sem Internet!  \n\n")
            await page.screenshot({ path: 'full2.png', fullPage: true });
            await browser.close()
            name();
        }
        await navigationPromise

        var arrayOringin = [
            'Rio de Janeiro - Todos Aeroportos (RIO)',
            'Presidente Jucelino Kubitschek, Brasília (BSB)',
            'Recife, Guararapes (REC)',
            'São José do Rio Preto (SJP',
            'Maceió, Zumbi dos Palmares (MCZ)',
            'Aeroporto Internacional de Viracopos (VCP)',
            'João Pessoa, Castro Pinto (JPA)'
        ];
        var randomOrigin = arrayOringin[Math.floor(Math.random() * arrayOringin.length)];

        var arrayDestination = [
            'São Paulo - Todos Aeroportos (SAO)',
            'Porto Alegre,  Salgado Filho (POA)',
            'Aeroporto de Londrina (LDB)',
            'Aeroporto Internacional de Macapá (MCP)',
            'Belo Horizonte - Todos Aeroportos (BHZ)',
            'Aracaju, Santa Maria (AJU)',
            'Natal (NAT)',
            'Estados Unidos, Orlando (MCO)',
            'Curitiba, Afonso Pena (CWB)'
        ];
        var randomDestination = arrayDestination[Math.floor(Math.random() * arrayDestination.length)];

        await page.type(selectors.origin, randomOrigin)
        await page.click(selectors.origin)
        await page.waitForSelector(selectors.origin)

        await page.waitForSelector(selectors.destination)
        await page.click(selectors.destination)
        await page.type(selectors.destination, randomDestination)
        await page.click('body')

        await page.waitForSelector(selectors.date1)
        await page.click(selectors.date1)
        await page.type(selectors.date1, moment().add(2, 'days').format('DD/MM/YYYY'))
        await page.click('body')

        await page.waitForSelector(selectors.dateBack)
        await page.click(selectors.dateBack)
        await page.type(selectors.dateBack, moment().add(7, 'days').format('DD/MM/YYYY'))
        await page.click('body')

        await page.click(selectors.adults)
        await page.type(selectors.adults, '1')

        await page.click(selectors.children)
        await page.type(selectors.children, '1')
       // await page.click('body');

        try {
            await page.waitForSelector(selectors.Abtn);
            await page.click(selectors.Abtn);
        } catch(e){
            console.log("WTF? \n" + e + "\n\nTentativa de clique não funcionou")
            await browser.close();
            name();
        }
        await navigationPromise

        setTimeout(async () => {
            try {
                await page.click(selectors.flight1)
                await page.waitForSelector(selectors.flight1)
                //await page.waitFor(10000);

            } catch (ae) {
                console.log("Voo n encontrado \n\n")
                await page.screenshot({ path: 'Voo_n_encontrado.png', fullPage: true });
                await browser.close();
                name();
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
            console.log('______________________')
            console.log("|  Compra concluída  |")
            console.log(moment().format("|DD/MM/YYYY-HH:mm:ss |"));
            console.log("----------------------\n")

            interval();

        }, 90000);

        //await browser.close()

        //await page.waitFor(10000)
        // name();
        const interval = function () {
            setInterval(async () => {
                name();
            }, 300000);
        }

    })()
}
name();
