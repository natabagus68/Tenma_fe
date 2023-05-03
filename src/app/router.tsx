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

import MeasurementStd from "../features/admin/MasterData/MeasurementStd/measurement-std/MeasurementStd";
import Part from "../features/admin/MasterData/Part/part/part-view";
import { element } from "prop-types";
import PartDetail from "../features/admin/MasterData/Part/part-detail/part-detail-view";
import PartFormView from "../features/admin/MasterData/Part/form/part-form-view";
import Customer from "../features/admin/MasterData/Customer/Customer";
import Machine from "../features/admin/MasterData/Machine/machine/machine-view";
import MachineFormView from "../features/admin/MasterData/Machine/machine-form/machine-form-view";
import CustomerFormView from "../features/admin/MasterData/Customer/customer-form-view";
import ToolView from "../features/admin/MasterData/Tools/tool/tool-view";
import ToolFormView from "../features/admin/MasterData/Tools/tools-form/tool-form-view";
import MaterialView from "../features/admin/MasterData/Material/material/material-view";
import MaterialFormView from "../features/admin/MasterData/Material/material-form/material-form-view.tsx";
import Color from "../features/admin/MasterData/Color/color/color-view";
import ColorFormView from "../features/admin/MasterData/Color/color-form/color-form-view";
import DailyProgessCheckView from "../features/admin/DailyProgressCheck/daily-progress-check/daily-progress-check-view";
import DailyProgressCheckCreateView from "../features/admin/DailyProgressCheck/daily-progress-check-create/daily-progress-check-create-view";
import DailyProgressCheckEditView from "../features/admin/DailyProgressCheck/daily-progress-check-edit/daily-progress-check-edit-view";
import DailyProgressCheckDetailView from "../features/admin/DailyProgressCheck/daily-progress-check-detail/daily-progress-check-detail-view";
import CreateSegmentView from "../features/admin/DailyProgressCheck/create-segment/create-segment-view";
import AddSegmentData from "../features/admin/DailyProgressCheck/daily-progress-add-history/history-form/history-form-view";
import AddSegmentTwoD from "@features/admin/DailyProgressCheck/add-segment-2d-daily-progress-check/add-segment-two-d";
import AddHistory from "../features/admin/DailyProgressCheck/add-segment-3d-daily-progress-check/AddSegmentData";
import ReportView from "../features/admin/Report/report/report-view";
import ReportDetailView from "../features/admin/Report/report-detail/report-detail-view";
import MeasurementDetail from "../features/admin/MasterData/MeasurementStd/measurement-std-detail/MeasurementDetail";
import InputFormMeasurementView from "../features/admin/MasterData/MeasurementStd/input-form-measurement-std/input-form-measurement-view";

import Account from "../features/admin/User/Account/account/account-view";
import DetailAccount from "../features/admin/User/Account/detail-account/DetailAccount";
import AddAccount from "../features/admin/User/Account/account-form/account-form-view";
import Access from "../features/admin/User/Access/access/user-access-view";
import Menu from "../features/admin/User/Access/menu/user-access-menu-view";
import InputFormUserAccess from "../features/admin/User/Access/input-form-user-access/input-form-user-access-view";

import LayoutCustomer from "../features/admin/MasterData/Customer/LayoutCustomer";
import CustomerModel from "../features/admin/MasterData/Customer/CustomerModel/CustomerModel";
import CustomerModelGroup from "../features/admin/MasterData/Customer/CustomerModelGroup/CustomerModelGroup";
import InputFormCustomerModel from "../features/admin/MasterData/Customer/CustomerModel/InputFormCustomerModel";
import InputFormCustomerModelGroup from "../features/admin/MasterData/Customer/CustomerModelGroup/InputFormCustomerModelGroup";
import HistoryFormView from "../features/admin/DailyProgressCheck/daily-progress-add-history/history-form/history-form-view";
import TableExcel from "@features/admin/Report/tabel-export/tabel-excel-view";
const Root = () => {
    return <Outlet />;
};

export default createBrowserRouter([
    {
        path: config.pathPrefix,
        element: <Navigate to={`${config.pathPrefix}login`} />,
    },
    {
        path: "table",
        element: <TableExcel />,
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
        // errorElemepnt: <Error404 />,
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
                                path: ":id/detail",
                                element: <MeasurementDetail />,
                            },
                            {
                                path: "add-data",
                                element: <InputFormMeasurementView />,
                            },
                            {
                                path: ":id/edit-data",
                                element: <InputFormMeasurementView />,
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
                                element: <CustomerFormView />,
                            },
                            {
                                path: ":id/edit-customer",
                                element: <CustomerFormView />,
                            },
                            {
                                path: "add-data-c2",
                                element: <InputFormCustomerModel />,
                            },
                            {
                                path: ":id/edit-data-customer-model",
                                element: <InputFormCustomerModel />,
                            },

                            {
                                path: "add-data-c3",
                                element: <InputFormCustomerModelGroup />,
                            },
                            {
                                path: ":id/edit-customer-model-group",
                                element: <InputFormCustomerModelGroup />,
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
                                path: "create",
                                element: <MachineFormView />,
                            },
                            {
                                path: ":id/edit",
                                element: <MachineFormView />,
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
                        element: <DailyProgessCheckView />,
                    },
                    {
                        path: "create",
                        element: <DailyProgressCheckCreateView />,
                    },
                    {
                        path: ":id/edit",
                        element: <DailyProgressCheckEditView />,
                    },
                    {
                        path: ":id/create-segment",
                        element: <CreateSegmentView />,
                    },
                    {
                        path: ":id/detail",
                        element: <DailyProgressCheckDetailView />,
                    },
                    {
                        path: ":id/history/create",
                        element: <HistoryFormView />,
                    },
                    {
                        path: ":id/history/:historyId/edit",
                        element: <HistoryFormView />,
                    },
                    {
                        path: ":id/add-segment-data-2d",
                        element: <AddSegmentTwoD />,
                    },
                    {
                        path: ":id/edit-segment-data-2d",
                        element: <AddSegmentTwoD />,
                    },
                ],
            },
            {
                path: "report",
                element: <Root />,
                children: [
                    {
                        path: "",
                        element: <ReportView />,
                    },
                    {
                        path: ":id/detail",
                        element: <ReportDetailView />,
                    },
                ],
            },
            {
                path: "user",
                element: <Root />,
                children: [
                    {
                        path: "",
                        element: <Account />,
                    },
                    {
                        path: "create",
                        element: <AddAccount />,
                    },
                    {
                        path: ":id/edit-account-user",
                        element: <AddAccount />,
                    },
                    {
                        path: ":id/detail",
                        element: <DetailAccount />,
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
                                element: <InputFormUserAccess />,
                            },
                            {
                                path: "edit-new-role/:id",
                                element: <InputFormUserAccess />,
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
