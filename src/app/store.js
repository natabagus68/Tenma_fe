import { configureStore } from '@reduxjs/toolkit';
import { adminLayoutSlice } from '../features/admin/adminLayoutSlice';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
    reducer: {
        adminLayout: adminLayoutSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});
