/// <reference types="Cypress"/>

//Todos los comandos se encuentran en el archivo support>commands.js
 
describe('Automatización de la página DEMOBLAZE', () => {

    before('Abrir la Web de Demoblaze', () => {
        cy.conectarmealaweb()
    })

    it("Ingresar al log in en la Web y realizar con exito una compra", () => {
        cy.ingresoallogin()

    ///(Completo los datos del log in e ingreso a la web) 
        cy.realizarlogin()
    
    ///(Corroboro si el log in se realizo con exito) 
        cy.corroborologin()
     
    ///(Selecciono un articulo de la categoria CELULARES y los añado al carrito) 
        cy.añadocelular()

    ///(Vuelvo a la pagina principal y corroboro que estoy en ella) 
        cy.paginaprincipal()

    ///(Selecciono una computadora de la categoria LAPTOPS y lo añado al carrito)
        cy.añadocomputadora()

    ///(Vuelvo a la pagina principal y corroboro que estoy en ella) 
        cy.paginaprincipal()

    ///(Selecciono un articulo de la categoría MONITORES y lo añado al carrito) 
        cy.añadomonitor()

    ///(Selecciono el carrito de compras y corroboro con la lista de PRODUCTOS) 
        cy.carritodecompras()

    ///(Completo el formulario de datos para finalizar la compra) 
        cy.formulariocompra()

    })

    after('Por ultimo me deslogueo de la página DEMOBLAZE', () =>{
        cy.desloguearse()
    })

})