import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (body) => ({
        url: "signup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    loginUser: build.mutation({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
export default authApi;
