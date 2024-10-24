///<reference types="cypress"/>

describe('Test Hola Mundo', ()=>{
    it('Esto es mi primer test Hola Mundo',()=>{
        cy.log('Hola Mundoooooooooo desde Cypress!!');
        cy.visit('https://validaciones.rodrigovillanueva.com.mx/Form1.html');
        cy.get('#nombre').type('Maria Sol');
        cy.wait(1000);
        cy.get('#apellidos').type('Cantarini');
        cy.wait(1000);
        cy.get('#tel').type('3543999999');
        cy.wait(1000);
        cy.get('#email').type('sol@yopmail.com');
        cy.wait(1000);
        cy.get('#direccion').type('Los Jacaranda 10');
        cy.wait(1000);
        cy.get('.btn-primary').click();
        cy.wait(1000);
        cy.wait(4000);
    })
})