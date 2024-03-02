import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import { TBook } from "../../types"
import axios from "axios"

export const getBooks = createAsyncThunk<TBook[]>(
    'artsits/getBooks',
    async () => {
        try {
            const { data } = await axios.get('/books')
            return data
        } catch (error) {
            return isRejectedWithValue("Something went wrong. Please try again later.")
        }
    }
)