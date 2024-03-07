import ReviewCard from "@/components/ReviewCard";
import { TReview } from "@/types";

describe('ReviewCard', () => {
    const review: TReview = {
        fullName: 'Test User',
        creationDate: '2021-07-01',
        comment: 'This is a great book!',
        email: 'test@gmail.com',
        book: {} as any,
        id: 1
    }

    beforeEach(() => {
        cy.mount(<ReviewCard review={review} />)
    });

    it('should render all the elements', () => {
        cy.get('[data-cy="review-card-container"]').should('exist');
        cy.get('[data-cy="image-container"]').should('exist');
        cy.get('[data-cy="image"]').should('exist');
        cy.get('[data-cy="info-container"]').should('exist');
        cy.get('[data-cy="fullName"]').should('exist');
        cy.get('[data-cy="creationDate"]').should('exist');
        cy.get('[data-cy="stars"]').should('exist');
        cy.get('[data-cy="review-card-comment"]').should('exist');
        cy.get('[data-cy="comment"]').should('exist');
    });

    it('should have the correct data', () => {
        cy.get('[data-cy="fullName"]').should('have.text', review.fullName);
        cy.get('[data-cy="creationDate"]').should('have.text', review.creationDate);
        cy.get('[data-cy="comment"]').should('have.text', review.comment);
    });
});