import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => {
        console.log("booking api", data);
        return {
          url: "/bookings",
          method: "POST",
          body: data,
        };
      },
    }),
    // getUsers: builder.query({
    //   query: () => ({
    //     url: "/auth",
    //   }),
    //   providesTags: ["users"],
    // }),

    // getSingleUser: builder.query({
    //   query: (id: string) => ({
    //     url: `/auth/${id}`,
    //   }),
    // }),

    // updateUser: builder.mutation({
    //   query: ({id, data}) => ({
    //     url: `/auth/${id}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["users"],
    // }),
  }),
});

export const { useCreateBookingMutation } = bookingApi;
