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
import Part from "../features/admin/MasterData/Part/part/part-view";
import { element } from "prop-types";
import PartDetail from "../features/admin/MasterData/Part/part-detail/part-detail-view";
import PartFormView from "../features/admin/MasterData/Part/form/part-form-view";
import Customer from "../features/admin/MasterData/Customer/Customer";
import AddDataCustomer from "../features/admin/MasterData/Customer/AddDataCustomer";
import Machine from "../features/admin/MasterData/Machine/Machine";
import AddDataMachine from "../features/admin/MasterData/Machine/AddDataMachine";
import ToolView from "../features/admin/MasterData/Tools/tool/tool-view";
import ToolFormView from "../features/admin/MasterData/Tools/tools-form/tool-form-view";
import MaterialView from "../features/admin/MasterData/Material/material/material-view";
import MaterialFormView from "../features/admin/MasterData/Material/material-form/material-form-view.tsx";
import Color from "../features/admin/MasterData/Color/color/color-view";
import ColorFormView from "../features/admin/MasterData/Color/color-form/color-form-view";
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
import LayoutCustomer from "../features/admin/MasterData/Customer/LayoutCustomer";
import CustomerModel from "../features/admin/MasterData/Customer/CustomerModel/CustomerModel";
import CustomerModelGroup from "../features/admin/MasterData/Customer/CustomerModelGroup/CustomerModelGroup";
import AddDataCustomerModel from "../features/admin/MasterData/Customer/CustomerModel/AddDataCustomerModel";
import AddDataCustomerModelGroup from "../features/admin/MasterData/Customer/CustomerModelGroup/AddDataCustomerModelGroup";
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
                                path: ":partId/detail",
                                element: <PartDetail />,
                            },
                            {
                                path: ":partId/edit",
                                element: <PartFormView />,
                            },
                            {
                                path: "create",
                                element: <PartFormView />,
                            },
                        ],
                    },
                    {
                        path: "customer",
                        element: <Root />,
                        children: [
                            {
                                path: "add-data-c1",
                                element: <AddDataCustomer />,
                            },
                            {
                                path: "add-data-c2",
                                element: <AddDataCustomerModel />,
                            },
                            {
                                path: "add-data-c3",
                                element: <AddDataCustomerModelGroup />,
                            },
                            {
                                path: "",
                                element: <LayoutCustomer />,
                                children: [
                                    {
                                        path: "",
                                        element: <Customer />,
                                    },
                                    {
                                        path: "customer-model",
                                        element: <CustomerModel />,
                                    },
                                    {
                                        path: "customer-model-group",
                                        element: <CustomerModelGroup />,
                                    },
                                ],
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
                        path: "tool",
                        element: <Root />,
                        children: [
                            {
                                path: "",
                                element: <ToolView />,
                            },
                            {
                                path: "create",
                                element: <ToolFormView />,
                            },
                            {
                                path: ":id/edit",
                                element: <ToolFormView />,
                            },
                        ],
                    },
                    {
                        path: "material",
                        element: <Root />,
                        children: [
                            {
                                path: "",
                                element: <MaterialView />,
                            },
                            {
                                path: "create",
                                element: <MaterialFormView />,
                            },
                            {
                                path: ":id/edit",
                                element: <MaterialFormView />,
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
                                path: "create",
                                element: <ColorFormView />,
                            },
                            {
                                path: ":id/edit",
                                element: <ColorFormView />,
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
