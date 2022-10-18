import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAuthenticatedUser: builder.query({
            query: () => 'me'
        }),
        authenticate: builder.mutation({
            query: body => ({
                url: `login`,
                method: 'POST',
                body
            })
        })
    })
});

export const { useGetAuthenticatedUserQuery, useAuthenticateMutation } = authApiSlice;
// export const selectAuthenticatedUser = authApiSlice.endpoints.getAuthenticatedUser.select();
