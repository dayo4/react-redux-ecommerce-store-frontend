import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: number;
  name: string;
  email: number;
};

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_APPTOKEN
    }
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => "users",
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`,
    }),
    loginUser: builder.query<User, { id: string }>({
      query: (userData) => ({
        url: 'login',
        method: 'POST',
        body: userData
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;