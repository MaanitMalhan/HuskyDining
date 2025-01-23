import { apiSlice } from "./apiSlice";
import socket from "../socket";

const REQUEST_URL = "/api/request";

export const requestApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRequests: builder.query({
      query: (page) => ({
        url: `${REQUEST_URL}?page=${page}&limit=20`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      // // Integrate WebSocket updates
      // async onCacheEntryAdded(arg, { updateCachedData, cacheEntryRemoved }) {
      //   try {

      //     // Listen for real-time updates
      //     socket.on("newRequest", (newRequest) => {
      //       updateCachedData((draft) => {
      //         draft.push(newRequest); // Add the new request to the cache
      //       });
      //     });

      //     // Wait until the cache entry is removed (cleanup)
      //     await cacheEntryRemoved;
      //   } catch (error) {
      //     console.error("Socket error:", error);
      //   } finally {
      //     socket.off("newRequest");
      //   }
      // },
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
  useGetUserRequestsQuery,
  useCreateRequestMutation,
} = requestApiSlice;
