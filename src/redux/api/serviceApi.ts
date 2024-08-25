import { baseApi } from "./baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => ({
        url: "/services",
      }),
      providesTags: ["services"],
    }),
  }),
});

export const { useGetServicesQuery } = serviceApi;
