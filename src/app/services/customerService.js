import { apiSlice } from "../../features/api/apiSlice";

export const customerService = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCustomer: builder.query({
            query: () => 'customer'
        })
    })
})

export const { useGetCustomerQuery } = customerService