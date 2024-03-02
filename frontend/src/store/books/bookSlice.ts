import { createSlice } from "@reduxjs/toolkit";
import { TBook } from "../../types";
import { getBooks } from "./bookActions";

type BookState = {
    books: TBook[]
}

const initialState: BookState = {
    books: [] as TBook[]
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.books = action.payload
        })
    }
})

export default bookSlice.reducer