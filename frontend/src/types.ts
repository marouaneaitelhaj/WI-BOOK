export type TBook = {
    id: number;
    title : string;
    description : string;
    publicationDate : string;
    genre : string;
    author : TAuthor;
    reviews : TReview[];
}
export type TAuthor = {
    id: number;
    firstName : string;
    lastName : string;
    bibliography : string;
    deathDate : string;
    books : TBook[];
}
export type TReview = {
    id: number;
    fullName : string;
    email : number;
    comment : string;
    creationDate : string;
    book : TBook;
}