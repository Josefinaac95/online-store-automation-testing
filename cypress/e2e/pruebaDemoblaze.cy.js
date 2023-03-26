/// <reference types="Cypress"/>

 
 
describe('Automatización de la página DEMOBLAZE', () => {

    before('Abrir la Web de Demoblaze', () => {
        cy.visit('https://www.demoblaze.com/')
    })


    it("Ingresar al log in en la Web y realizar con exito una compra", () => {

        cy.screenshot()


        cy.get('#login2').click()

        cy.get('#logInModalLabel').should('contain','Log in')

        cy.wait(1000)

    ///(Completo los datos del log in e ingreso a la web) 
        
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
    
    ///(Corroboro si el log in se realizo con exito) 

        cy.get('#nameofuser').should('contain','Welcome')

        cy.get('#nameofuser').screenshot()

    ///(Selecciono un articulo de la categoria CELULARES y los añado al carrito) 

        cy.get('#itemc').click()

        cy.get('#tbodyid > div:nth-child(3) > div > div > h5').should('contain', '650')

        cy.get('#tbodyid > div:nth-child(3) > div > div > h4 > a').click()

        cy.wait(1000)

        cy.get('#tbodyid > div.row > div > a').click()

        cy.screenshot()
    
        cy.wait(1000)

    ///(Vuelvo a la pagina principal y corroboro que estoy en ella) 

        cy.get('#navbarExample > ul > li.nav-item.active > a').click()

        cy.get('#nava').should('contain', 'PRODUCT STORE')

        cy.wait(1000)

    ///(Selecciono una computadora de la categoria LAPTOPS y lo añado al carrito)

        cy.get('#contcont > div > div.col-lg-3 > div').find('a').eq(2).click()

        cy.wait(1000)

        cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').should('contain', 'i5')
        
        cy.get('#contcont > div > div.col-lg-9').find('a').eq(2).click()

        cy.get('#tbodyid > div.row > div > a').click()

        cy.screenshot()

    ///(Vuelvo a la pagina principal y corroboro que estoy en ella) 

        cy.get('#navbarExample > ul > li.nav-item.active > a').click()

        cy.get('#nava').should('contain', 'PRODUCT STORE')

        cy.wait(1000)

    ///(Selecciono un articulo de la categoría MONITORES y lo añado al carrito) 

        cy.get('#contcont > div > div.col-lg-3 > div').find('a').eq(3).click()

        cy.wait(1000)

        cy.get('#tbodyid > div:nth-child(2) > div > div > h4 > a').should('contain','ASUS')

        cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').click()

        cy.get('#tbodyid > div.row > div > a').click()

        cy.screenshot()

    ///(Selecciono el carrito de compras y corroboro con la lista de PRODUCTOS) 

        cy.get('#cartur').click()

        cy.get('#page-wrapper > div > div.col-lg-8 > h2').should('contain', 'Products')

        cy.wait(1000)

        cy.screenshot()

    ///(Completo el formulario de datos para finalizar la compra) 

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

    after('Por ultimo me deslogueo de la página DEMOBLAZE', () =>{

        cy.get('#logout2').click()

        cy.screenshot()

    })

})





