import { apiSlice } from "./apiSlice";

const REQUEST_URL = "/api/transaction";

export const donateApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        donate: builder.mutation({
            query: (body) => ({
            url: `${REQUEST_URL}/donate`,
            method: "POST",
            body: body,
            }),
        }),
    }),
});

export const {
    useDonateMutation
} = donateApiSlice;