import { apiSlice } from "../../api/apiSlice";

export const employeesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getEmployees: builder.query({
            query: () => 'employees'
        }),
        getEmployeeById: builder.query({
            query: (employeeId) => `employees/${employeeId}`
        }),
        getDivisions: builder.query({
            query: () => 'divisions'
        }),
        getPositions: builder.query({
            query: () => 'positions'
        }),
    })
});

export const { useGetEmployeesQuery, useGetDivisionsQuery, useGetPositionsQuery, useGetEmployeeByIdQuery } = employeesApiSlice;
// export const selectAuthenticatedUser = employeesApiSlice.endpoints.getAuthenticatedUser.select();
