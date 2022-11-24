import { apiSlice } from "../../features/api/apiSlice";

export const paymentService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPayment: builder.query({
            query: () => ({ url: `payment` }),
            providesTags: ["Payment"],
        }),
        acceptPayment: builder.mutation({
            query: (data) => ({
                url: `payment/accept`,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(payload, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem('token', data.token);
                    window.location.reload();
                } catch (e) {
                    console.log(e);
                }
            },
        }),
        rejectPayment: builder.mutation({
            query: (data) => ({
                url: `auth/login`,
                method: "POST",
                body: data,
            }),
            async onQueryStarted(payload, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem('token', data.token);
                    window.location.reload();
                } catch (e) {
                    console.log(e);
                }
            },
        }),
    }),
});

export const {
    useGetPaymentQuery,
    useAcceptPaymentMutation,
    useRejectPaymentMutation,
} = paymentService;
