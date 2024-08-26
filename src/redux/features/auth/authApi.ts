import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userCredentials) => ({
        url: "/auth/signup",
        method: "POST",
        body: userCredentials,
      }),
    }),
    login: builder.mutation({
      query: (userCredentials) => ({
        url: "/auth/login",
        method: "POST",
        body: userCredentials,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = authApi;
