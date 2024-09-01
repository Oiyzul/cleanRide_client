import { baseApi } from "@/redux/api/baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSlots: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args.length > 0) {
          args.forEach((query:any) => {
            console.log("query", query.key, query.value);
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
    updateSlot: builder.mutation({
      query: ({ id, data }) => {
        console.log("api2", data);
        return {
          url: `/slots/update-slot/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["slots"],
    }),
  }),
});

export const { useGetSlotsQuery, useUpdateSlotMutation } = slotApi;
