//Este comando es para conectarme a la web
Cypress.Commands.add('conectarmealaweb', () => {
    cy.visit('https://www.demoblaze.com/')
})

//Este comando es para ingresar al LOG IN
Cypress.Commands.add('ingresoallogin', () =>{
    cy.screenshot()
    cy.get('#login2').click()
    cy.get('#logInModalLabel').should('contain','Log in')
    cy.wait(1000)
})

//Este comando es para realizar el LOG IN
Cypress.Commands.add('realizarlogin', (log_in)=>{
    cy.get('#loginusername').type('Josefinaac95').then((result) => {
        const { value } = result[0];
        expect(value).to.equal('Josefinaac95');
    });
    cy.get('#logInModal > div > div > div.modal-body > form > div:nth-child(2) > label').should('contain', 'Password')
    cy.get('#loginpassword').type('Prueba1234').then((result) => {
        const { value } = result[0];
        expect(value).to.equal('Prueba1234');
    });
    cy.get('#logInModal > div > div').screenshot()
    cy.get('#logInModal > div > div').find('button').eq(2).click()
})

//Este comando es para corroborar el LOG IN
Cypress.Commands.add('corroborologin', () => {
    cy.get('#nameofuser').should('contain','Welcome')
    cy.get('#nameofuser').screenshot()
})

//Este comando es para añadir un celular de la CATEGORIA celulares
Cypress.Commands.add('añadocelular', () => {
    cy.get('#itemc').click()
    cy.get('#tbodyid > div:nth-child(3) > div > div > h5').should('contain', '650')
    cy.get('#tbodyid > div:nth-child(3) > div > div > h4 > a').click()
    cy.wait(1000)
    cy.get('#tbodyid > div.row > div > a').click()
    cy.screenshot()
    cy.wait(1000)
})

//Este comando es para volver a la pagina principal y corroborar que estoy en ella
Cypress.Commands.add('paginaprincipal', () =>{
    cy.get('#navbarExample > ul > li.nav-item.active > a').click()
    cy.get('#nava').should('contain', 'PRODUCT STORE')
    cy.wait(1000)
})

//Este comando es para añadir una computadora de la CATEGORIA computadoras
Cypress.Commands.add('añadocomputadora', () => {
    cy.get('#contcont > div > div.col-lg-3 > div').find('a').eq(2).click()
    cy.wait(1000)
    cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').should('contain', 'i5')
    cy.get('#contcont > div > div.col-lg-9').find('a').eq(2).click()
    cy.get('#tbodyid > div.row > div > a').click()
    cy.screenshot()
})

//Este comando es para añadir un monitor de la CATEGORIA monitores
Cypress.Commands.add('añadomonitor', () => {
    cy.get('#contcont > div > div.col-lg-3 > div').find('a').eq(3).click()
    cy.wait(1000)
    cy.get('#tbodyid > div:nth-child(2) > div > div > h4 > a').should('contain','ASUS')
    cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').click()
    cy.get('#tbodyid > div.row > div > a').click()
    cy.screenshot()
})

//Este comando es para ir al carrito de compras y corroborar que me encuentro en el
Cypress.Commands.add('carritodecompras', () =>{
    cy.get('#cartur').click()
    cy.get('#page-wrapper > div > div.col-lg-8 > h2').should('contain', 'Products')
    cy.wait(1000)
    cy.screenshot()
})

//Este comando es para conectarme con el archivo json y rellenar el formulario de compras
Cypress.Commands.add('formulariocompra', () =>{
        cy.fixture('example').then(misdatos => {
        cy.get('#page-wrapper > div > div.col-lg-1 > button').click()
        cy.get('#totalm').should('contain', 'Total')
        cy.wait(2000)
        cy.get('#name').type(misdatos.name).then((result) => {
            const { value } = result[0];
            expect(value).to.equal('Josefina');
        });
        cy.get('#country').type(misdatos.country).then((result) => {
            const { value } = result[0];
            expect(value).to.equal('Argentina');
        });
        cy.get('#city').type(misdatos.city).then((result) => {
            const { value } = result[0];
            expect(value).to.equal('Buenos Aires');
        });
        cy.get('#card').type(misdatos.card).then((result) => {
            const { value } = result[0];
            expect(value).to.equal('08127776523');
        });
        cy.get('#month').type(misdatos.month).then((result) => {
            const { value } = result[0];
            expect(value).to.equal('Noviembre');
        });
        cy.get('#year').type(misdatos.year).then((result) => {
            const { value } = result[0];
            expect(value).to.equal('2025');
        });
        cy.get('#orderModal > div > div > div.modal-body > form').screenshot()
        cy.get('#orderModal > div > div > div.modal-footer > button.btn.btn-primary').click()
        cy.get('body > div.sweet-alert.showSweetAlert.visible').screenshot()
        cy.get('body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button').click()
    })
})

//Este comando es para desloguearse
Cypress.Commands.add('desloguearse', () => {
    cy.get('#logout2').click()
    cy.screenshot()
})