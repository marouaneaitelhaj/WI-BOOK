import BookCard from '@/components/BookCard';
import { TBook, TAuthor } from '../../src/types';
import { BrowserRouter as Router } from 'react-router-dom';


describe('BookCard', () => {
    const book: TBook = {
        id: 1,
        title: "The Lord of the Rings",
        genre: "Fantasy",
        description: "The Lord",
        publicationDate: "1954-07-29",
        author: {
            firstName: "J.R.R.",
            lastName: "Tolkien",
        } as TAuthor,
        reviews: []
    }

    beforeEach(() => {
        cy.mount(<Router>
            <BookCard book={book} />
        </Router>);
    });

    it('should have All the elements Rendered', () => {
        cy.get('[data-cy="link-container"]').should('exist');
        cy.get('[data-cy="img-container"]').should('exist');
        cy.get('[data-cy="details-container"]').should('exist');
        cy.get('[data-cy="title"]').should('exist');
        cy.get('[data-cy="author"]').should('exist');
    });

    it('should have the correct data', () => {
        cy.get('[data-cy="title"]').should('have.text', book.title);
        cy.get('[data-cy="author"]').should('have.text', book.author.firstName + '  ' + book.author.lastName);
    });

    it('should navigate to the book details page', () => {
        cy.get('[data-cy="link-container"]').click();
        cy.url().should('include', '/books/' + book.id);
    });

});