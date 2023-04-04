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
import AddHistory from "../features/admin/DailyProgressCheck/AddHistory";
import Report from "../features/admin/Report/Report";
import ReportDetail from "../features/admin/Report/ReportDetail";
import Detail from "../features/admin/Report/Detail";
import MeasurementDetail from "../features/admin/MasterData/MeasurementStd/MeasurementDetail";
import AddDataMeasurement from "../features/admin/MasterData/MeasurementStd/AddDataMeasurement";

import Account from "../features/admin/User/Account/Account";
import DetailAccount from "../features/admin/User/Account/DetailAccount";
import AddAccount from "../features/admin/User/Account/AddAccount";
import EditAccount from "../features/admin/User/Account/EditAccount";
import Access from "../features/admin/User/Access/Access";
import Menu from "../features/admin/User/Access/Menu";
import AddNewRole from "../features/admin/User/Access/AddNewRole";
import EditRole from "../features/admin/User/Access/EditRole";
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
                path: "master-data",
                element: <Root />,
                children: [
                    {
                        path: "measurement-std",
                        element: <Root />,
                        children: [
                            {
                                path: "",
                                element: <MeasurementStd />,
                            },
                            {
                                path: "detail",
                                element: <MeasurementDetail />,
                            },
                            {
                                path: "add-data",
                                element: <AddDataMeasurement />,
                            },
                        ],
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
                            {
                                path: "add-history-data",
                                element: <AddHistory />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "report",
                element: <Root />,
                children: [
                    {
                        path: "",
                        element: <Report />,
                    },
                    {
                        path: "part-details",
                        element: <Root />,
                        children: [
                            {
                                path: "",
                                element: <ReportDetail />,
                            },

                            {
                                path: "report-detail",
                                element: <Detail />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "user",
                element: <Root />,
                children: [
                    {
                        path: "Account",
                        element: <Root />,
                        children: [
                            {
                                path: "",
                                element: <Account />,
                            },
                            {
                                path: "detail",
                                element: <DetailAccount />,
                            },
                            {
                                path: "add-data",
                                element: <AddAccount />,
                            },
                            {
                                path: "edit-data",
                                element: <EditAccount />,
                            },
                        ],
                    },
                    {
                        path: "access",
                        element: <Root />,
                        children: [
                            {
                                path: "",
                                element: <Access />,
                            },
                            {
                                path: "menu",
                                element: <Menu />,
                            },
                            {
                                path: "add-new-role",
                                element: <AddNewRole />,
                            },
                            {
                                path: "edit-new-role/:id",
                                element: <EditRole />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <Error404 />,
    },
]);
