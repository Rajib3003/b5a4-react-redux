import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
export const stroe = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});
export type RootState = ReturnType<typeof stroe.getState>;
export type AppDispatch = typeof stroe.dispatch;