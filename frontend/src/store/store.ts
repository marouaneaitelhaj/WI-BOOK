import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import bookReducer from '@/store/books/bookSlice';
export const store = configureStore({
    reducer: {
        book : bookReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()