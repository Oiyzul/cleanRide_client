import { baseApi } from "@/redux/api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => ({
        url: "/services",
      }),
      providesTags: ["services"],
    }),

    getSingleService: builder.query({
      query: (id: string) => ({
        url: `/services/${id}`,
      }),
    }),
  }),
});

export const { useGetServicesQuery, useGetSingleServiceQuery } = serviceApi;
