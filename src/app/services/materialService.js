import { apiSlice } from "../../features/api/apiSlice";

export const materialService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMaterial: builder.query({
            query: (param = { page: 1, limit: 10 }) => `tool?${Object.keys(param).map(key => `${key}=${param[key]}`).join('&')}`,
            providesTags: ['Material']
        }),
        storeMaterial: builder.mutation({
            query: (data) => ({
                url: 'tool',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Material']
        }),
        showMaterial: builder.query({
            query: data => ({
                url: `tool/${data}`,
                method: 'GET',
            })
        }),
        updateMaterial: builder.mutation({
            query: data => {
                const { id, ...part } = data;
                return {
                    url: `tool/${id}`,
                    data: part,
                    method: 'PUT'
                };
            },
            invalidatesTags: ['Material']
        }),
        deleteMaterial: builder.mutation({
            query: data => ({
                url: `tool/${data}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Material']
        })
    })
});

export const {
    useGetMaterialQuery,
    useStoreMaterialMutation,
    useShowMaterialQuery,
    useUpdateMaterialMutation,
    useDeleteMaterialMutation,
} = materialService;