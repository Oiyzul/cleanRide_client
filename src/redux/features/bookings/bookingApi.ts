import { baseApi } from "@/redux/api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => {
        return {
          url: "/bookings",
          method: "POST",
          body: data,
        };
      },
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
      }),
      providesTags: ["bookings"],
    }),

    getSingleUserBookings: builder.query({
      query: (id: string) => ({
        //change it my bookings
        url: `/bookings/${id}`,
      }),
    }),

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

export const { useCreateBookingMutation, useGetAllBookingsQuery, useGetSingleUserBookingsQuery } = bookingApi;
