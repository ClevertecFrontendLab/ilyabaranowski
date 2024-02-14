/// <reference types="cypress" />
describe('sprint 2', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('login-success', () => {
        cy.intercept('POST', 'auth/login', { accessToken: 'SUPERUSER' }).as('login');
        cy.viewport(1440, 900);
        cy.wait(1000);
        cy.screenshot('login-success-1');
        cy.url().should('include', '/auth');
        cy.get('[data-test-id=login-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=login-password]').type('123');
        cy.get('[data-test-id=login-submit-button]').click();
        cy.get('[data-test-id=login-password]').clear().type('123qq');
        cy.get('[data-test-id=login-submit-button]').click();
        cy.get('[data-test-id=login-password]').clear().type('123qqQQ');
        cy.get('[data-test-id=login-submit-button]').click();
        cy.get('[data-test-id=login-password]').clear().type('1234qqQQ');
        cy.get('[data-test-id=login-submit-button]').click();
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@login').should(({ request }) => {
            assert.deepEqual(request.body, {
                email: 'valadzkoaliaksei@tut.by',
                password: '1234qqQQ',
            });
        });
        cy.url().should('include', '/main');
    });

    it('login-error', () => {
        cy.intercept('POST', 'auth/login', {
            statusCode: 404,
        }).as('login');
        cy.viewport(834, 900);
        cy.screenshot('login-error-1');
        cy.get('[data-test-id=login-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=login-password]').type('1234qqQQ');
        cy.get('[data-test-id=login-submit-button]').click();
        cy.wait('@login');
        cy.url().should('include', '/result/error-login');
        cy.screenshot('login-error-2');
        cy.get('[data-test-id=login-retry-button]').click();
        cy.url().should('include', '/auth');
        cy.get('[data-test-id=login-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=login-password]').type('1234qqQQ');
        cy.intercept('POST', 'auth/login', { accessToken: 'SUPERUSER' }).as('login');
        cy.get('[data-test-id=login-submit-button]').click();
        cy.wait('@login');
        cy.url().should('include', '/main');
    });

    it('login-remember', () => {
        cy.intercept('POST', 'auth/login', { accessToken: 'SUPERUSER' }).as('login');
        cy.viewport(360, 900);
        cy.screenshot('login-remember-1');
        cy.get('[data-test-id=login-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=login-password]').type('1234qqQQ');
        cy.get('[data-test-id=login-remember]').check();
        cy.get('[data-test-id=login-submit-button]').click();
        cy.wait('@login');
        cy.url().should('include', '/main');
        cy.visit('/');
        cy.url().should('include', '/main');
    });

    it('reg-success', () => {
        cy.intercept('POST', '/auth/registration', { statusCode: 201 }).as('registration');
        cy.intercept('POST', 'auth/login', { accessToken: 'SUPERUSER' }).as('login');
        cy.viewport(1440, 900);
        cy.contains('Регистрация').click();
        cy.screenshot('reg-success-1');
        cy.url().should('include', '/auth/registration');
        cy.get('[data-test-id=registration-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=registration-password]').type('1234qqQQ');
        cy.get('[data-test-id=registration-confirm-password]').type('1234qqQQ');
        cy.get('[data-test-id=registration-submit-button]').click();
        cy.wait('@registration');
        cy.url().should('include', '/result/success');
        cy.screenshot('reg-success-2');
        cy.get('[data-test-id=registration-enter-button]').click();
        cy.url().should('include', '/auth');
        cy.get('[data-test-id=login-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=login-password]').type('1234qqQQ');
        cy.get('[data-test-id=login-submit-button]').click();
        cy.wait('@login');
        cy.url().should('include', '/main');
    });

    it('reg-error', () => {
        cy.intercept('POST', '/auth/registration', {
            statusCode: 409,
            error: 'Conflict',
            message: 'Пользователь с таким email уже существует.',
        }).as('registration');
        cy.viewport(1440, 900);
        cy.contains('Регистрация').click();
        cy.url().should('include', '/auth/registration');
        cy.get('[data-test-id=registration-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=registration-password]').type('1234qqQQ');
        cy.get('[data-test-id=registration-confirm-password]').type('1234qqQQ');
        cy.get('[data-test-id=registration-submit-button]').click();
        cy.wait('@registration');
        cy.url().should('include', 'result/error-user-exist');
        cy.screenshot('reg-error-1');
        cy.get('[data-test-id=registration-back-button]').click();
        cy.intercept('POST', '/auth/registration', { statusCode: 404 }).as('registration');
        cy.get('[data-test-id=registration-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=registration-password]').type('1234qqQQ');
        cy.get('[data-test-id=registration-confirm-password]').type('1234qqQQ');
        cy.get('[data-test-id=registration-submit-button]').click();
        cy.wait('@registration');
        cy.url().should('include', '/result/error');
        cy.screenshot('reg-error-2');
        cy.get('[data-test-id=registration-retry-button]').click();
        cy.wait('@registration');
    });

    it('change-pass-success', () => {
        cy.intercept('POST', '/auth/check-email', {
            email: 'valadzkoaliaksei@tut.by',
            message: 'Код отправлен на email',
        }).as('checkEmail');
        cy.intercept('POST', '/auth/confirm-email', { statusCode: 201 }).as('confirmEmail');
        cy.intercept('POST', '/auth/change-password', { statusCode: 201 }).as('changePass');
        cy.intercept('POST', 'auth/login', { accessToken: 'SUPERUSER' }).as('login');
        cy.viewport(1440, 900);
        cy.get('[data-test-id=login-forgot-button]').click();
        cy.get('[data-test-id=login-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=login-forgot-button]').click();
        cy.wait('@checkEmail');
        cy.url().should('include', '/auth/confirm-email');
        cy.screenshot('change-pass-success-1');
        cy.get('[data-test-id=verification-input]').type('123456');
        cy.wait('@confirmEmail');
        cy.url().should('include', '/auth/change-password');
        cy.screenshot('change-pass-success-2');
        cy.get('[data-test-id=change-password]').type('1234qqQQ');
        cy.get('[data-test-id=change-confirm-password]').type('1234qqQQ');
        cy.get('[data-test-id=change-submit-button]').click();
        cy.wait('@changePass');
        cy.url().should('include', '/result/success-change-password');
        cy.screenshot('change-pass-success-3');
        cy.get('[data-test-id=change-entry-button]').click();
        cy.url().should('include', '/auth');
        cy.get('[data-test-id=login-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=login-password]').type('1234qqQQ');
        cy.get('[data-test-id=login-submit-button]').click();
        cy.wait('@login');
        cy.url().should('include', '/main');
    });

    it('change-pass-error', () => {
        cy.viewport(1440, 900);
        cy.intercept('POST', '/auth/check-email', {
            statusCode: 404,
            body: { message: 'Email не найден' },
        }).as('checkEmail');
        cy.get('[data-test-id=login-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=login-forgot-button]').click();
        cy.wait('@checkEmail');
        cy.url().should('include', '/result/error-check-email-no-exist');
        cy.screenshot('change-pass-error-1');
        cy.get('[data-test-id=check-retry-button]').click();
        cy.url().should('include', '/auth');
        cy.intercept('POST', '/auth/check-email', {
            statusCode: 409,
        }).as('checkEmail');
        cy.get('[data-test-id=login-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=login-forgot-button]').click();
        cy.wait('@checkEmail');
        cy.url().should('include', '/result/error-check-email');
        cy.screenshot('change-pass-error-2');
        cy.intercept('POST', '/auth/check-email', { statusCode: 200 }).as('checkEmail');
        cy.get('[data-test-id=check-back-button]').click();
        cy.wait('@checkEmail');
        cy.url().should('include', '/auth/confirm-email');
        cy.screenshot('change-pass-error-3');
        cy.intercept('POST', '/auth/confirm-email', { statusCode: 404 }).as('confirmEmail');
        cy.get('[data-test-id=verification-input]').type('123456');
        cy.wait('@confirmEmail');
        cy.url().should('include', '/auth/confirm-email');
        cy.screenshot('change-pass-error-4');
        cy.intercept('POST', '/auth/confirm-email', { statusCode: 201 }).as('confirmEmail');
        cy.intercept('POST', '/auth/change-password', { statusCode: 404 }).as('changePass');
        cy.get('[data-test-id=verification-input]').type('123456');
        cy.wait('@confirmEmail');
        cy.screenshot('change-pass-error-5');
        cy.get('[data-test-id=change-password]').type('1234qqQQ');
        cy.get('[data-test-id=change-confirm-password]').type('1234qqQQ');
        cy.get('[data-test-id=change-submit-button]').click();
        cy.wait('@changePass');
        cy.url().should('include', '/result/error-change-password');
        cy.screenshot('change-pass-error-6');
        cy.intercept('POST', '/auth/change-password', { statusCode: 201 }).as('changePass');
        cy.get('[data-test-id=change-retry-button]').click();
        cy.wait('@changePass');
        cy.url().should('include', '/result/success-change-password');
        cy.get('[data-test-id=change-entry-button]').click();
        cy.intercept('POST', 'auth/login', { accessToken: 'SUPERUSER' }).as('login');
        cy.url().should('include', '/auth');
        cy.get('[data-test-id=login-email]').type('valadzkoaliaksei@tut.by');
        cy.get('[data-test-id=login-password]').type('1234qqQQ');
        cy.get('[data-test-id=login-submit-button]').click();
        cy.get('[data-test-id=loader]').should('be.exist');
        cy.wait('@login');
        cy.url().should('include', '/main');
    });
});
