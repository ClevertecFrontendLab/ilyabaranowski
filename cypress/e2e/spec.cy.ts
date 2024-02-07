/// <reference types="cypress" />
describe('sprint 1', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('1440', () => {
        cy.viewport(1440, 900);
        cy.wait(1000);
        cy.screenshot('1440-1');
        cy.get('[data-test-id=sider-switch]').click();
        cy.screenshot('1440-2');
        cy.get('[data-test-id=sider-switch]').click();
        cy.screenshot('1440-3');
    });
    it('834', () => {
        cy.viewport(834, 1400);
        cy.screenshot('834-1');
        cy.get('[data-test-id=sider-switch]').click();
        cy.screenshot('834-2');
        cy.get('[data-test-id=sider-switch]').click();
        cy.screenshot('834-3');
    });
    it('360', () => {
        cy.viewport(360, 2000);
        cy.screenshot('360-1');
        cy.get('[data-test-id=sider-switch-mobile]').click();
        cy.screenshot('360-2');
        cy.get('[data-test-id=sider-switch-mobile]').click();
        cy.screenshot('360-3');
    });
});
