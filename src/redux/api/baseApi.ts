import type { IBook } from "@/types";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://typescript-express-mongo-db.vercel.app/api'
    }),
    tagTypes: ['Book'],
    endpoints: (builder) => ({
        getBook: builder.query({
            query: () => '/books',
            providesTags: ['Book'],
        }),
        addBook: builder.mutation({
            query: (Bookdata) => ({
                url: '/books',
                method: 'POST',
                body: Bookdata,
            }),
            invalidatesTags: ['Book']
        }),
        deleteBook: builder.mutation({
            query: (_id) => ({
                url: `/books/${_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Book']
        }),
        updateBook: builder.mutation<IBook, { id: string } & Partial<IBook>>({
            query: ({ id, ...patch }) => {   
                return {
                url: `/books/${id}`,  
                method: "PATCH",
                body: patch,
                };
            },
            invalidatesTags: ["Book"],
        }),
    })
})
export const { useGetBookQuery, useAddBookMutation, useDeleteBookMutation, useUpdateBookMutation } = baseApi;