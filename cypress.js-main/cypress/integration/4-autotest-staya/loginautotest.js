
describe('Проверка формы логина', function () {
  

   it('Позитивный кейс: верный логин и верный пароль', function () {
   cy.visit('https://staya.dog/login');

   cy.get('.auth-form > form > [type="email"]').type('kvrvtanya@gmail.com');
   cy.get('.auth-form > form > [type="password"]').type('Abigof33');
   cy.get('.auth-form > form > [type="password"]').click();
   cy.get('.auth-form__submit > .s-button__content').click();

   cy.contains('Мои заказы');
    })


})


 it('Позитивный кейс: верный логин и неверный пароль', function () {
   cy.visit('https://staya.dog/login');

   cy.get('.auth-form > form > [type="email"]').type('kvrvtanya@gmail.com');
   cy.get('.auth-form > form > [type="password"]').type('Abigof30');
   cy.get('.auth-form > form > [type="password"]').click();
   cy.get('.auth-form__submit > .s-button__content').click();

   cy.contains('Невозможно войти с предоставленными учетными данными.');
   

})
