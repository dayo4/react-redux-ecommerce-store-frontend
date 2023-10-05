import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type LoginData = {
  email: string;
  password: string;
};
export type RegisterData = {
  name: string;
  email: string;
  password: string;
};
export type ResetData = {
  email?: string;
  stage?: number;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_APPTOKEN,
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<null, LoginData>({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),
    registerUser: builder.mutation<null, RegisterData>({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    passwordReset: builder.mutation<null, ResetData>({
      query: (userData) => ({
        url: "/resetPassword",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});
