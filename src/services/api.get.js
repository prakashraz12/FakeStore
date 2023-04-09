// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const FakeApi = createApi({
  reducerPath: 'FakeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProductsbyId: builder.query({
      query: (id) => `products/${id}`,
    }),
    getAllProduct: builder.query({
        query:()=> "products"
    })
  }),
})


export const { useGetProductsbyIdQuery, useGetAllProductQuery} = FakeApi