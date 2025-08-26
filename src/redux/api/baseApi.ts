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
    })
})
export const { useGetBookQuery, useAddBookMutation } = baseApi;