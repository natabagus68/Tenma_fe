import { createBrowserRouter, Navigate, Outlet, } from "react-router-dom";
import { Error404 } from "../common/components";
import { config } from "../common/utils";
import { Login } from "../features/auth/Login";
import { MainDashboard } from "../features/admin/dashboard/MainDashboard";
import { AdminLayout } from "../features/admin/adminLayout";
import { Employee, DataEmployee, Division, Position, ShowEmployee } from "../features/admin/employee";

const Root = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default createBrowserRouter([
    {
        path: config.pathPrefix,
        element: <Root />,
        errorElement: <Error404 />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
        ]
    },
    {
        path: config.pathPrefix,
        element: <AdminLayout />,
        errorElemepnt: <Error404 />,
        children: [
            {
                path: 'dashboard/main',
                element: <MainDashboard />
            },
            {
                path: 'employees',
                element: <Employee />,
                children: [
                    {
                        path: '',
                        element: <Navigate to="data" replace={ true } />
                    },
                    {
                        path: 'data',
                        element: <DataEmployee />,
                    },
                    {
                        path: 'divisions',
                        element: <Division />,
                    },
                    {
                        path: 'positions',
                        element: <Position />,
                    },
                ]
            },
            {
                path: 'employees/data/:employeeId',
                element: <ShowEmployee />,
            },
        ]
    }
]);
