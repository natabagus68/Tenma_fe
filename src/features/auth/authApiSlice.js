import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAuthenticatedUser: builder.query({
            query: () => 'me',
            providesTags: ['Auth']
        }),
        authenticate: builder.mutation({
            query: body => ({
                url: `login`,
                method: 'POST',
                body
            }),
            async onQueryStarted(form, { dispatch, queryFulfilled }) {
                console.log("Login...", form)
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        authApiSlice.util.updateQueryData('getAuthenticatedUser', undefined, draft => {
                            Object.assign(draft, data);
                        })
                    );
                } catch (e) {
                    console.error("Failed to authenticate", e);
                }
            }
        }),
        logout: builder.mutation({
            query: body => ({
                url: `logout`,
                method: 'DELETE',
                body
            }),
            async onQueryStarted(form, { dispatch, queryFulfilled }) {
                console.log("Logout...", form)
                dispatch(
                    authApiSlice.util.updateQueryData('getAuthenticatedUser', undefined, draft => {
                        Object.assign(draft, {
                            message: 'Unauthenticated!',
                            data: null,
                            token: null,
                        });
                    })
                );
            }
        })
    })
});

export const { useGetAuthenticatedUserQuery, useAuthenticateMutation, useLogoutMutation } = authApiSlice;
