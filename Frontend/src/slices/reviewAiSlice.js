import { apiSlice } from "./apiSlice";
const REVIEW_URL = "/api/review";

export const reviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({
        url: `${REVIEW_URL}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetReviewsQuery } = reviewApiSlice;
