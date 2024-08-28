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
    addService: builder.mutation({
      query: (service: any) => ({
        url: "/services",
        method: "POST",
        body: service,
      }),
      invalidatesTags: ["services"],
    })
  }),
});

export const { useGetServicesQuery, useGetSingleServiceQuery, useAddServiceMutation } = serviceApi;
