import { apiSlice } from "./apiSlice";
import socket from "../socket";

const REQUEST_URL = "/api/request";

export const requestApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRequests: builder.query({
      query: (page) => ({
        url: `${REQUEST_URL}/flex?page=${page}&limit=24`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getRequestPoints: builder.query({
      query: (page) => ({
        url: `${REQUEST_URL}/points?page=${page}&limit=120`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getUserRequests: builder.query({
      query: (userID) => ({
        url: `${REQUEST_URL}/${userID}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    createRequest: builder.mutation({
      query: (body) => ({
        url: `${REQUEST_URL}`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetRequestsQuery,
  useGetRequestPointsQuery,
  useGetUserRequestsQuery,
  useCreateRequestMutation,
} = requestApiSlice;
