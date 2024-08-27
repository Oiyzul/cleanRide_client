import { baseApi } from "@/redux/api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSlots: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((query) => {
            console.log('query', query.key, query.value)
            params.append(query.key, query.value);
          });
        }

        return {
          url: "/slots/availability",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["slots"],
    }),
  }),
});

export const { useGetSlotsQuery } = slotApi;
