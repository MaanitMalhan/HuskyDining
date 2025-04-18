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
    console.log(result);

  if (result?.error?.status === 401) {
  
    const refreshResult = await baseQuery(
      "http://localhost:5173/api/auth/refresh", 
      api,
      extraOptions
    );
    if (refreshResult?.data.accessToken) {
      api.dispatch(setAccessToken(refreshResult.data.accessToken));
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


  if (result?.error) {
      const originalError = result.error;

      if (originalError.status === 400 && originalError.data?.message) {
          return { 
              error: {
                  status: originalError.status, 
                  data: { 
                      message: "There was a problem with your request. Please check your input."
                  }
              },
              meta: result.meta
          };
      }
      // Genericize 5xx server errors
      else if (originalError.status >= 500) {
           return {
              error: {
                  status: originalError.status,
                  data: {
                      message: "A server error occurred. Please try again later."
                  }
              },
              meta: result.meta
          };
      }
  }


  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Request", "Review"],
  endpoints: (builder) => ({}),
});