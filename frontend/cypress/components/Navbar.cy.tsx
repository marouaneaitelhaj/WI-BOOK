import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';


describe('Navbar', () => {
    beforeEach(() => {
        cy.mount(<Router><Navbar /></Router>)
    });

    it('should have all the elements rendered', () => {
        cy.get('[data-cy="navbar-container"]').should('exist');
        cy.get('[data-cy="logo-container"]').should('exist');
        cy.get('[data-cy="router-container"]').should('exist');
        cy.get('[data-cy="home-router"]').should('exist');
        cy.get('[data-cy="books-router"]').should('exist');
    });

    it('should navigate to the home page', () => {
        cy.get('[data-cy="home-router"]').click();
        cy.url().should('include', '/');
    });

    it('should navigate to the books page', () => {
        cy.get('[data-cy="books-router"]').click();
        cy.url().should('include', '/books');
    });



});