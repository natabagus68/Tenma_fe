import { apiSlice } from "../../features/api/apiSlice";

export const customerService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCustomer: builder.query({
            query: (param = { page: 1, limit: 10 }) => `customer?${Object.keys(param).map(key => `${key}=${param[key]}`).join('&')}`,
            providesTags: ['Customer']
        }),
        storeCustomer: builder.mutation({
            query: (data) => ({
                url: 'customer',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Customer']
        }),
        showCustomer: builder.query({
            query: data => ({
                url: `customer/${data}`,
                method: 'GET',
            })
        }),
        updateCustomer: builder.mutation({
            query: data => {
                const { id, ...part } = data;
                return {
                    url: `customer/${id}`,
                    data: part,
                    method: 'PUT'
                };
            },
            invalidatesTags: ['Customer']
        }),
        deleteCustomer: builder.mutation({
            query: data => ({
                url: `customer/${data}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Customer']
        })
    })
});

export const {
    useGetCustomerQuery,
    useStoreCustomerMutation,
    useShowCustomerQuery,
    useUpdateCustomerMutation,
    useDeleteCustomerMutation,
} = customerService;