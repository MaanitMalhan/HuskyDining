import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAccessToken, logout } from "./authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState();
    const token = state.auth?.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    } else {
      console.warn("Authorization token is missing.");
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    // send refresh token to get new access token
    const refreshResult = await baseQuery(
      "http://localhost:5173/api/auth/refresh",
      api,
      extraOptions
    );
    if (refreshResult?.data.accessToken) {
      // store the new token
      api.dispatch(setAccessToken(refreshResult.data.accessToken));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      result = await baseQuery(
        {
          url: "http://localhost:5173/api/auth/logout",
          method: "POST",
        },
        api,
        extraOptions
      );
      api.dispatch(logout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Request", "Review"],
  endpoints: (builder) => ({}),
});
