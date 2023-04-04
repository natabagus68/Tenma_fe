import { apiSlice } from "../../features/api/apiSlice";

export const customerModelGroupService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCustomerModelGroup: builder.query({
            query: (param = { page: 1, limit: 10 }) => `customer-model-group?${Object.keys(param).map(key => `${key}=${param[key]}`).join('&')}`,
            providesTags: ['Customer Model Group']
        }),
        storeCustomerModelGroup: builder.mutation({
            query: (data) => ({
                url: 'customer-model-group',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Customer Model Group']
        }),
        showCustomerModelGroup: builder.query({
            query: data => ({
                url: `customer-model-group/${data}`,
                method: 'GET',
            })
        }),
        updateCustomerModelGroup: builder.mutation({
            query: data => {
                const { id, ...part } = data;
                return {
                    url: `customer-model-group/${id}`,
                    data: part,
                    method: 'PUT'
                };
            },
            invalidatesTags: ['Customer Model Group']
        }),
        deleteCustomerModelGroup: builder.mutation({
            query: data => ({
                url: `customer-model-group/${data}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Customer Model Group']
        })
    })
});

export const {
    useGetCustomerModelGroupQuery,
    useStoreCustomerModelGroupMutation,
    useShowCustomerModelGroupQuery,
    useUpdateCustomerModelGroupMutation,
    useDeleteCustomerModelGroupMutation,
} = customerModelGroupService;