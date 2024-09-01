import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  // baseUrl: "https://carwash-backend-sepia.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.auth?.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    // return {
    //  ...headers,
    //   Authorization: `Bearer ${token}`,
    // };
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["services", "slots", "bookings", "users", "reviews"],
  endpoints: () => ({}),
});
