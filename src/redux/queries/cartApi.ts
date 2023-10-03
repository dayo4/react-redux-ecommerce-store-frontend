import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Item = {
  productid: number;
  productname: string;
  quantity: number;
};

export const cartApi = createApi({
  reducerPath: "cartApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_APPTOKEN,
    },
  }),
  endpoints: (builder) => ({
    syncCart: builder.query<Item, Item[]>({
      query: (cartData) => ({
        url: "cart",
        method: "POST",
        body: cartData,
      }),
    }),
  }),
});
