import { apiSlice } from "../../features/api/apiSlice";

export const partApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPart: builder.query({
            query: () => 'part',
            providesTags: ['Part']
        }),
        addPartData: builder.mutation({
            query: (data) => ({
                url: 'part',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Part']
        })
    })
})

export const {
    useGetPartQuery,
    useAddPartDataMutation
} = partApiSlice