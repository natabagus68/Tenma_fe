import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../common/utils";
import { mockAxiosBaseQuery } from "../../common/utils/mockAxios";
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: config.mockApi
        ? mockAxiosBaseQuery()
        : fetchBaseQuery({
            baseUrl: config.apibaseUrl,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }),
    tagTypes: ["Auth", "Payment", "Part", "Customer Model", "Customer", "Customer Model Group", "Material"],
    endpoints: (builder) => ({}),
});

export const { } = apiSlice;
