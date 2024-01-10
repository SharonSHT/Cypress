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
      cy.get('#cartur').click(); //Presionar pestaña cart
      cy.get('.col-lg-1 > .btn').click(); //Presionar boton Place Order
      cy.get('#name').type('sharon'); // Input nombre
      cy.get('#country').type('herazo');// Input apellido
      cy.get('#city').type('bogota');// Input ciudad
      cy.get('#card').type('1111222233334444');// Input Tarjeta
      cy.get('#month').type('0l');// Input  mes
      cy.get('#year').type('2028');// Input año
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();// boton finalizar compra compra
    });
      
  afterEach('Cierra Navegador', function () {
    cy.window().then((win) => {
      win.close();
      });
    });
  })  