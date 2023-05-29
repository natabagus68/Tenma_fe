import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../../../common/components";
import {
    EyeIcon,
    PenAltIcon,
    TrashIcon,
} from "../../../../../common/components/icons";
import Pagination from "../../../../../common/components/pagination/Pagination";
import useMeasurement from "./measurement-view-model";
import ModalDelete from "@common/components/Modal/ModalDelete";
const MeasurementStd = () => {
    const measurementStd = useMeasurement();
    return (
        <>
            <div>
                <Breadcrumbs items={["Measurement Std"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Measurement Std
                    </h1>
                    <button
                        className="py-[12px] px-[20px] bg-gray-600 text-white align-middle rounded-md"
                        onClick={measurementStd.toAddData}
                    >
                        + Add Data
                    </button>
                </div>
                <div>
                    <table className="w-full">
                        <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                            <tr>
                                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                    Part Code (Item CD)
                                </th>
                                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                    Part Name
                                </th>
                                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                    Model
                                </th>
                                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {measurementStd.measurementStd.data.map(
                                (item, ind) => (
                                    <tr
                                        className="border-b-2 border-gray-100"
                                        key={ind}
                                    >
                                        <td className="py-6 text-start pl-10 text-gray-600 ">
                                            {item.part.partCode}
                                        </td>
                                        <td className="py-6 text-start pl-10 text-gray-600 ">
                                            {item.part.partName}
                                        </td>
                                        <td className="py-6 text-start pl-10 text-gray-600 ">
                                            {item.part.customerModel}
                                        </td>
                                        <td className="py-6  pl-10 text-gray-600 flex gap-3 justify-start">
                                            <button
                                                className="py-[12px] px-[20px] bg-[#1BBDD4] items-center rounded-md text-white flex gap-2"
                                                onClick={(e) =>
                                                    measurementStd.toDetail(
                                                        item.id
                                                    )
                                                }
                                            >
                                                <EyeIcon />
                                                Detail
                                            </button>
                                            <button
                                                onClick={() =>
                                                    measurementStd.toEdit(
                                                        item.id
                                                    )
                                                }
                                                className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2"
                                            >
                                                <PenAltIcon />
                                                Edit
                                            </button>
                                            <button
                                                onClick={() =>
                                                    measurementStd.onDelete(
                                                        item.id
                                                    )
                                                }
                                                className="py-[12px] px-[20px] bg-red-1000 items-center rounded-md text-white flex gap-2"
                                            >
                                                <TrashIcon />
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="w-full flex justify-end pt-5 pr-5">
                    <Pagination
                        row={measurementStd.measurementStd.totalRow}
                        limit={measurementStd.measurementStd.limit}
                        page={measurementStd.measurementStd.page}
                        onClick={measurementStd.onPageChange}
                    />
                </div>
            </div>
            <ModalDelete
                showModal={measurementStd.deleteConfirmShow}
                setShowModal={measurementStd.setDeleteConfirmShow}
                onConfirm={measurementStd.onConfirmDelete}
            />
        </>
    );
};

export default MeasurementStd;
