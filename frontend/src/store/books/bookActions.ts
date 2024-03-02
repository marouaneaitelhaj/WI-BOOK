import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import { TBook } from "../../types"
import axios from "axios"

export const getBooks = createAsyncThunk<TBook[], { page: number, title: string }>(
    'book/getBooks',
    async ({ page, title }) => {
        try {
            const { data } = await axios.get(`/books?page=${page}&title=${title}`);
            return data['hydra:member'];
        } catch (error) {
            throw new Error("Something went wrong. Please try again later."); // Throwing error instead of returning it
        }
    }
);