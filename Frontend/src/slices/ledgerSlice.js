import { apiSlice } from "./apiSlice";

const REQUEST_URL = "/api/ledger";

export const ledgerApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserLedgerTransactions: builder.query({
            query: (userID) => ({
              url: `${REQUEST_URL}/${userID}`,
              method: "GET",
            }),
            keepUnusedDataFor: 5,
          })
    })
});


export const {
  useGetUserLedgerTransactionsQuery
} = ledgerApiSlice;