export type Book = {
    id: number;
    title : string;
    description : string;
    publicationDate : string;
    genre : string;
    author : Author;
}
export type Author = {
    id: number;
    firstName : string;
    lastName : string;
    bibliography : string;
    deathDate : string;
    books : Book[];
}
export type Review = {
    id: number;
    fullName : string;
    email : number;
    comment : string;
    creationDate : string;
    book : Book;
}