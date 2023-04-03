import { apiSlice } from "../../features/api/apiSlice";

export const customerModelService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCustomerModel: builder.query({
            query: (param = { page: 1, limit: 10 }) => `customer-model?${Object.keys(param).map(key => `${key}=${param[key]}`).join('&')}`,
            providesTags: ['Customer Model']
        }),
        storeCustomerModel: builder.mutation({
            query: (data) => ({
                url: 'customer-model',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Customer Model']
        }),
        showCustomerModel: builder.query({
            query: data => ({
                url: `customer-model/${data}`,
                method: 'GET',
            })
        }),
        updateCustomerModel: builder.mutation({
            query: data => {
                const { id, ...part } = data;
                return {
                    url: `customer-model/${id}`,
                    data: part,
                    method: 'PUT'
                };
            },
            invalidatesTags: ['Customer Model']
        }),
        deleteCustomerModel: builder.mutation({
            query: data => ({
                url: `customer-model/${data}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Customer Model']
        })
    })
});

export const {
    useGetCustomerModelQuery,
    useStoreCustomerModelMutation,
    useShowCustomerModelQuery,
    useUpdateCustomerModelMutation,
    useDeleteCustomerModelMutation,
} = customerModelService;