"variables"; {
  let email = "sharon@yopmail.com";
  let password = "Argentina2023";
}

describe('Agregar al carrito sin Login', function(){

  //beforeEach(function(){
    before(() => {
      cy.visit('https://www.demoblaze.com/index.html');
  });

  it('URL should be https://www.demoblaze.com/index.html', function(){
      //cy.url().should('eq', 'https://www.demoblaze.com/index.html');
      cy.get('#nava > img').should('exist'); //validar posicion en dashoboard
      cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click(); //seleccionar art del dashboard
      cy.get('.col-sm-12 > .btn').should('exist'); //validar posicion en descripcion de producto
      cy.get('.col-sm-12 > .btn').click(); //Presionar boton add to cart
    });
      
  afterEach('Cierra Navegador', function () {
    cy.window().then((win) => {
      win.close();
      });
    });
  })  