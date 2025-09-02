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
        updateBook: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/books/${id}`,
                method: 'PUT',
                body: rest,
            }),
            invalidatesTags: ['Book']
        }),
    })
})
export const { useGetBookQuery, useAddBookMutation, useDeleteBookMutation, useUpdateBookMutation } = baseApi;