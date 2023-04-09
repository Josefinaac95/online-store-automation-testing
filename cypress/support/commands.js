import pantallas from '../selectores/misselectores'

//Este comando es para conectarme a la web
Cypress.Commands.add('conectarmealaweb', () => {
    cy.visit('https://www.demoblaze.com/')
})

//Este comando es para escribir en un cuadro de texto
Cypress.Commands.add('escribir', (cuadro_de_texto, texto) => {
    cy.get(cuadro_de_texto).type(texto)
})

//Este comando es para clickear
Cypress.Commands.add('mi_click', (cuadro_de_texto) =>{
    cy.get(cuadro_de_texto).click()
})

//Este comando es para ingresar al LOG IN
Cypress.Commands.add('ingresoallogin', () =>{
    cy.screenshot()
    cy.mi_click(pantallas.login.ingresoallogin)
    cy.get(pantallas.login.corroborotextologin).should('contain','Log in')
    cy.wait(1000)
})

//Este comando es para realizar el LOG IN
Cypress.Commands.add('realizarlogin', (log_in)=>{
    cy.fixture('login').then(datoslogin => {
    cy.escribir(pantallas.login.name_login, datoslogin.name_login).then((result) => {
        const { value } = result[0];
        expect(value).to.equal('Josefinaac95');
    });
    cy.get(pantallas.login.password_word).should('contain', 'Password')
    cy.escribir(pantallas.login.pass_login, datoslogin.pass_login).then((result) => {
        const { value } = result[0];
        expect(value).to.equal('Prueba1234');
    });
    cy.get(pantallas.login.recuadrodelogin).screenshot()
    cy.get(pantallas.login.recuadrodelogin).find('button').eq(2).click()
})
})

//Este comando es para corroborar el LOG IN
Cypress.Commands.add('corroborologin', () => {
    cy.get(pantallas.login.welcome_name).should('contain','Welcome')
    cy.get(pantallas.login.welcome_name).screenshot()
})

//Este comando es para añadir un celular de la CATEGORIA celulares
Cypress.Commands.add('añadocelular', () => {
    cy.mi_click(pantallas.phones.btn_phone)
    cy.get(pantallas.phones.texto_nexus).should('contain', '650')
    cy.mi_click(pantallas.phones.btn_nexus_6)
    cy.wait(1000)
    cy.mi_click(pantallas.phones.btn_addtocard)
    cy.screenshot()
    cy.wait(1000)
})

//Este comando es para volver a la pagina principal y corroborar que estoy en ella
Cypress.Commands.add('paginaprincipal', () =>{
    cy.mi_click(pantallas.pagina_principal.btn_home)
    cy.get(pantallas.pagina_principal.texto_productstore).should('contain', 'PRODUCT STORE')
    cy.wait(1000)
})

//Este comando es para añadir una computadora de la CATEGORIA computadoras
Cypress.Commands.add('añadocomputadora', () => {
    cy.get(pantallas.laptops.btn_laptop).find('a').eq(2).click()
    cy.wait(1000)
    cy.get(pantallas.laptops.texto_sony).should('contain', 'i5')
    cy.get(pantallas.laptops.btn_sony_i7).find('a').eq(2).click()
    cy.mi_click(pantallas.phones.btn_addtocard)
    cy.screenshot()
})

//Este comando es para añadir un monitor de la CATEGORIA monitores
Cypress.Commands.add('añadomonitor', () => {
    cy.get(pantallas.monitors.btn_monitor).find('a').eq(3).click()
    cy.wait(1000)
    cy.get(pantallas.monitors.texto_asus).should('contain','ASUS')
    cy.mi_click(pantallas.monitors.btn_monitor_aple)
    cy.mi_click(pantallas.phones.btn_addtocard)
    cy.screenshot()
})

//Este comando es para ir al carrito de compras y corroborar que me encuentro en el
Cypress.Commands.add('carritodecompras', () =>{
    cy.mi_click(pantallas.carrito_de_compras.btn_carrito)
    cy.get('#page-wrapper > div > div.col-lg-8 > h2').should('contain', 'Products')
    cy.wait(1000)
    cy.screenshot()
})

//Este comando es para conectarme con el archivo json y rellenar el formulario de compras
Cypress.Commands.add('formulariocompra', () =>{
        cy.fixture('formulario').then(misdatos => {
        cy.mi_click(pantallas.carrito_de_compras.btn_placeorder)
        cy.get(pantallas.carrito_de_compras.texto_total).should('contain', 'Total')
        cy.wait(2000)
        cy.escribir(pantallas.carrito_de_compras.name_formulario, misdatos.name).then((result) => {
            const { value } = result[0];
            expect(value).to.equal('Josefina');
        });
        cy.escribir(pantallas.carrito_de_compras.country_formulario, misdatos.country).then((result) => {
            const { value } = result[0];
            expect(value).to.equal('Argentina');
        });
        cy.escribir(pantallas.carrito_de_compras.city_formulario, misdatos.city).then((result) => {
            const { value } = result[0];
            expect(value).to.equal('Buenos Aires');
        });
        cy.escribir(pantallas.carrito_de_compras.card_formulario, misdatos.card).then((result) => {
            const { value } = result[0];
            expect(value).to.equal('08127776523');
        });
        cy.escribir(pantallas.carrito_de_compras.month_formulario, misdatos.month).then((result) => {
            const { value } = result[0];
            expect(value).to.equal('Noviembre');
        });
        cy.escribir(pantallas.carrito_de_compras.year_formulario, misdatos.year).then((result) => {
            const { value } = result[0];
            expect(value).to.equal('2025');
        });
        cy.get(pantallas.carrito_de_compras.formulario).screenshot()
        cy.mi_click(pantallas.carrito_de_compras.btn_purcharse)
        cy.get(pantallas.carrito_de_compras.alertadecompraexitosa).screenshot()
        cy.mi_click(pantallas.carrito_de_compras.btn_ok)
    })
})

//Este comando es para desloguearse
Cypress.Commands.add('desloguearse', () => {
    cy.mi_click(pantallas.desloguearse.btn_desloguearse)
    cy.screenshot()
})