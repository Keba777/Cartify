import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store";
import Cart from "@/types/cart";

const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers, { getState }) => {
      const state: RootState = getState() as RootState;
      const token = state.auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    createCart: builder.mutation<Cart, { productID: string; userID: string }>({
      query: ({ productID, userID }) => ({
        url: "carts",
        method: "POST",
        body: { productID, userID },
      }),
    }),
    getCartsByUserID: builder.query<Cart[], string>({
      query: (userID) => ({
        url: `carts/${userID}`,
        method: "GET",
      }),
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateCartMutation,
  useGetCartsByUserIDQuery,
  useDeleteCartMutation
} = cartApi;
export default cartApi;
