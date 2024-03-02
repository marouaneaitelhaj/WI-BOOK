import { createSlice } from "@reduxjs/toolkit";
import { TBook } from "../../types";
import { getBooks } from "./bookActions";

type BookState = {
    books: TBook[],
    page: number,
    hasMore: boolean
}

const initialState: BookState = {
    books: [] as TBook[],
    page: 1,
    hasMore: true
}

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        reset: (state) => {
            state.books = []
            state.page = 1
            state.hasMore = true
        }
    },
    extraReducers(builder) {
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.books = state.books.concat(action.payload)
            if (action.payload.length === 0) {
                state.hasMore = false
            }
        })
    }
})
export const { setPage, reset } = bookSlice.actions
export default bookSlice.reducer