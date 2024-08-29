import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/auth",
      }),
      providesTags: ["users"],
    }),

    getSingleUser: builder.query({
      query: (email) => ({
        url: `/auth?email=${email}`,
      }),
      providesTags: ["users"],
    }),
    
    updateUser: builder.mutation({
      query: ({id, data}) => ({
        url: `/auth/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUsersQuery, useUpdateUserMutation, useGetSingleUserQuery,
} = userApi;
