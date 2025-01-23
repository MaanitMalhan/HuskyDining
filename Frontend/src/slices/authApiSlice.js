import { apiSlice } from "./apiSlice";
const AUTH_URL = "/api/auth";
const BALANCE_URL = "/api/balance";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${AUTH_URL}/logout`,
        method: "POST",
      }),
    }),
    getUserProfile: builder.query({
      query: () => ({
        url: `${AUTH_URL}/profile`,
        method: "GET",
      }),
    }),
    getBalance: builder.query({
      query: (userID) => ({
        url: `${BALANCE_URL}/${userID}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetUserProfileQuery,
  useGetBalanceQuery,
} = authApiSlice;
