import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { user } from "@/redux/dummy";

export type ProductData = {
  id: number;
  name: string;
  price: string;
};
export type CategoryData = {
  catid: number;
  categorname: string;
};

export const productApi = createApi({
  reducerPath: "productwaApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_APPTOKEN,
    },
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<CategoryData[], null>({
      query: () => ({
        url: "/getAllCategories",
        method: "POST",
      }),
    }),
    getCategoryProducts: builder.query<CategoryData[], null>({
      query: () => ({
        url: "/getProductCategory",
        method: "POST",
      }),
    }),
    getProduct: builder.query<ProductData, { producttoken: String }>({
      query: ({producttoken}) => ({
        url: "/getProductByToken?producttoken="+producttoken,
        method: "GET",
        // body: producttoken,
      }),
    }),
  }),
});
