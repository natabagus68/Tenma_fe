import { apiSlice } from "../../features/api/apiSlice";

export const partApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllPart: builder.query({
            query: (param = { page: 1 }) => `part?${Object.keys(param).map(key => `${key}=${param[key]}`).join('&')}`,
            providesTags: ['Part']
        }),
        storePart: builder.mutation({
            query: (data) => ({
                url: 'part',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Part']
        }),
        showPart: builder.query({
            query: data => ({
                url: `part/${data}`,
                method: 'GET',
            })
        }),
        updatePart: builder.mutation({
            query: data => {
                const { id, ...part } = data;
                return {
                    url: `part/${id}`,
                    data: part,
                    method: 'PUT'
                };
            },
            invalidatesTags: ['Part']
        }),
        destroyPart: builder.mutation({
            query: data => ({
                url: `part/${data}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Part']
        })
    })
});

export const {
    useGetPartQuery,
    useAddPartDataMutation,
    useDetailQuery,
    useUpdateMutation,
    useDeleteMutation,
} = partApiSlice;