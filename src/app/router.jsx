import { createBrowserRouter, Navigate, Outlet, } from "react-router-dom";
import { Error404 } from "../common/components";
import { config } from "../common/utils";
import { Login } from "../features/auth/Login";
import { AdminLayout } from "../features/admin/adminLayout";
import { GuestLayouts } from "../features/guest/GuestLayouts";
import { Dashboard } from "../features/admin/dashboard";
import { PaymentData } from "../features/admin/Payment/PaymentData";
import { PaymentDataDetail } from "../features/admin/Payment/PaymentDataDetail";
import { PaymentHistory } from "../features/admin/Payment/PaymentHistory";
import { AreaAccess } from "../features/admin/AreaAccess/AreaAccess";
import { AreaAccessDetail } from "../features/admin/AreaAccess/AreaAccessDetail";
import { AreaAccessItem } from "../features/admin/AreaAccess/AreaAccessItem";
import { AreaAccessCreate } from "../features/admin/AreaAccess/AreaAccessCreate";

const Root = () => { return <Outlet />; };

export default createBrowserRouter([
    {
        path: config.pathPrefix,
        element: <Navigate to={ `${config.pathPrefix}login` } />,
    },
    {
        path: config.pathPrefix,
        element: <GuestLayouts />,
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
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'payment-data',
                element: <PaymentData />
            },
            {
                path: 'payment-data/:id',
                element: <PaymentDataDetail />
            },
            {
                path: 'payment-data/:id/history',
                element: <PaymentHistory />
            },
            {
                path: 'area-access',
                element: <AreaAccess />
            },
            {
                path: 'area-access/create',
                element: <AreaAccessCreate />
            },
            {
                path: 'area-access/:id',
                element: <AreaAccessDetail />
            },
            {
                path: 'area-access/:id/area',
                element: <AreaAccessItem />
            },
        ]
    },
    {
        path: '*',
        element: <Error404 />,
    },
]);
