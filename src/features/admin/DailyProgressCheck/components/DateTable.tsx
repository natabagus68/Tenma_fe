import React from "react";
import { useDailyProgressCheckDetail } from "../daily-progress-check-detail/daily-progress-check-detail-model";
import ModalDelete from "@common/components/Modal/ModalDelete";
import moment from "moment";
import { PenAltIcon } from "@common/components/icons";

const HistoryFormView = ({ model = useDailyProgressCheckDetail() }) => {
    return (
        <>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 mt-10">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        History Problem
                    </h1>
                </div>
                <div>
                    <div className=" w-full">
                        <table className="w-full">
                            <thead className=" border-y-2 border-gray-100">
                                <tr>
                                    <th className="py-6 text-start bg-gray-50">
                                        Date
                                    </th>
                                    <th className="py-6 text-start bg-gray-50">
                                        Problem Details
                                    </th>
                                    <th className="py-6 text-start bg-gray-50">
                                        Char
                                    </th>
                                    <th className="py-6 text-start bg-gray-50">
                                        Remark
                                    </th>
                                    <th className="py-6 text-start bg-gray-50">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {model.histories.map((item) => (
                                    <tr key={item.id}>
                                        <td className="text-start border-b-2 border-gray-100 py-6">
                                            {moment(item.date).format(
                                                "DD/MM/YYYY"
                                            )}
                                        </td>
                                        <td className="text-start border-b-2 border-gray-100 py-6">
                                            {item.problemDetail}
                                        </td>
                                        <td className="text-start border-b-2 border-gray-100 py-6">
                                            {item.char}
                                        </td>
                                        <td className="text-start border-b-2 border-gray-100 py-6">
                                            {item.remark}
                                        </td>
                                        <td className="text-start border-b-2 border-gray-100 py-6">
                                            <div className="flex gap-4 items-center">
                                                <button
                                                    className="py-[12px] px-[20px] bg-[#F79009]  text-white align-middle rounded-md flex items-center gap-3"
                                                    onClick={(e) =>
                                                        model.onEditHistory(
                                                            e,
                                                            item
                                                        )
                                                    }
                                                >
                                                    <PenAltIcon />
                                                    Edit
                                                </button>

                                                <button
                                                    className="py-[12px] px-[20px] bg-[#F04438] text-white align-middle rounded-md"
                                                    onClick={(e) =>
                                                        model.onDeleteHistory(
                                                            e,
                                                            item
                                                        )
                                                    }
                                                >
                                                    + Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ModalDelete
                showModal={model.confirmDeleteHistoryShow}
                setShowModal={model.setConfirmDeleteHistoryShow}
                onConfirm={model.onConfirmDeleteHistory}
            />
        </>
    );
};

export default HistoryFormView;
