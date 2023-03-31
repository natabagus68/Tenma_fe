import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
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

import MeasurementStd from "../features/admin/MasterData/MeasurementStd/MeasurementStd";
import Part from "../features/admin/MasterData/Part/Part";
import { element } from "prop-types";
import PartDetail from "../features/admin/MasterData/Part/Detail";
import AddDataPart from "../features/admin/MasterData/Part/AddData";
import Customer from "../features/admin/MasterData/Customer/Customer";
import AddDataCustomer from "../features/admin/MasterData/Customer/AddDataCustomer";
import Machine from "../features/admin/MasterData/Machine/Machine";
import AddDataMachine from "../features/admin/MasterData/Machine/AddDataMachine";
import Tools from "../features/admin/MasterData/Tools/Tools";
import AddDataTool from "../features/admin/MasterData/Tools/AddDataTool";
import Material from "../features/admin/MasterData/Material/Material";
import AddDataMaterial from "../features/admin/MasterData/Material/AddDataMaterial";
import Color from "../features/admin/MasterData/Color/Color";
import AddDataColor from "../features/admin/MasterData/Color/AddDataColor";
import DailyProgessCheck from "../features/admin/DailyProgressCheck/DailyProgessCheck";
import AddDataDailyProcessCheck from "../features/admin/DailyProgressCheck/AddDataDailyProcessCheck";
import EditDataDailyProcessCheck from "../features/admin/DailyProgressCheck/EditDataDailyProcessCheck";
import DetailDailyProcessCheck from "../features/admin/DailyProgressCheck/DetailDailyProcessCheck";
import AddSegmentData from "../features/admin/DailyProgressCheck/AddSegmentData";
const Root = () => {
    return <Outlet />;
};

export default createBrowserRouter([
    {
        path: config.pathPrefix,
        element: <Navigate to={`${config.pathPrefix}login`} />,
    },
    {
        path: config.pathPrefix,
        element: <GuestLayouts />,
        errorElement: <Error404 />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
    {
        path: config.pathPrefix,
        element: <AdminLayout />,
        errorElemepnt: <Error404 />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "progress-check",
                element: <PaymentData />,
            },
            {
                path: "report",
                element: <PaymentDataDetail />,
            },
            {
                path: "master-data",
                element: <Root />,
                children: [
                    {
                        path: "measurement-std",
                        element: <MeasurementStd />,
                    },
                    {
                        path: "part",
                        element: <Root />,
                        children: [
                            {
                                path: "",
                                element: <Part />,
                            },
                            {
                                path: "detail",
                                element: <PartDetail />,
                            },
                            {
                                path: "add-data",
                                element: <AddDataPart />,
                            },
                        ],
                    },
                    {
                        path: "customer",
                        element: <Root />,
                        children: [
                            {
                                path: "",
                                element: <Customer />,
                            },
                            {
                                path: "add-data",
                                element: <AddDataCustomer />,
                            },
                        ],
                    },
                    {
                        path: "machine",
                        element: <Root />,
                        children: [
                            {
                                path: "",
                                element: <Machine />,
                            },
                            {
                                path: "add-data",
                                element: <AddDataMachine />,
                            },
                        ],
                    },
                    {
                        path: "tools",
                        element: <Root />,
                        children: [
                            {
                                path: "",
                                element: <Tools />,
                            },
                            {
                                path: "add-data",
                                element: <AddDataTool />,
                            },
                        ],
                    },
                    {
                        path: "material",
                        element: <Root />,
                        children: [
                            {
                                path: "",
                                element: <Material />,
                            },
                            {
                                path: "add-data",
                                element: <AddDataMaterial />,
                            },
                        ],
                    },
                    {
                        path: "color",
                        element: <Root />,
                        children: [
                            {
                                path: "",
                                element: <Color />,
                            },
                            {
                                path: "add-data",
                                element: <AddDataColor />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "daily-progress-check",
                element: <Root />,
                children: [
                    {
                        path: "",
                        element: <DailyProgessCheck />,
                    },
                    {
                        path: "add-data",
                        element: <AddDataDailyProcessCheck />,
                    },
                    {
                        path: "edit-data",
                        element: <EditDataDailyProcessCheck />,
                    },
                    {
                        path: "detail",
                        element: <Root />,
                        children: [
                            {
                                path: "",
                                element: <DetailDailyProcessCheck />,
                            },
                            {
                                path: "add-segment-data",
                                element: <AddSegmentData />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "user",
                element: <AreaAccess />,
            },
        ],
    },
    {
        path: "*",
        element: <Error404 />,
    },
]);
