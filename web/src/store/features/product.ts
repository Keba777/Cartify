import Product from "@/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),

  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;

export default productApi;
