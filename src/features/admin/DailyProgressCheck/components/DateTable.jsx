import React from "react";
import { useDailyProgressCheckDetail } from "../daily-progress-check-detail/daily-progress-check-detail-model";

const DateTable = ({ model = useDailyProgressCheckDetail() }) => {
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
                                    <th className="py-6 bg-gray-50">Date</th>
                                    <th className="py-6 bg-gray-50">
                                        Problem Details
                                    </th>
                                    <th className="py-6 bg-gray-50">Char</th>
                                    <th className="py-6 bg-gray-50">Remark</th>
                                    <th className="py-6 bg-gray-50">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { model.histories.map(item => (
                                    <tr key={item.id}>
                                        <td className="text-center border-b-2 border-gray-100 py-6">
                                            {item.date}
                                        </td>
                                        <td className="text-center border-b-2 border-gray-100 py-6">
                                            {item.problemDetail}
                                        </td>
                                        <td className="text-center border-b-2 border-gray-100 py-6">
                                            {item.char}
                                        </td>
                                        <td className="text-center border-b-2 border-gray-100 py-6">
                                            {item.remark}
                                        </td>
                                        <td className="text-center border-b-2 border-gray-100 py-6">
                                            <div className="flex gap-4 items-center justify-end">
                                                <button
                                                    className="py-[12px] px-[20px] bg-[#F79009]  text-white align-middle rounded-md"
                                                // onClick={ (e) => {
                                                //     e.preventDefault();
                                                //     navigate("add-data");
                                                // } }
                                                >
                                                    + Edit
                                                </button>

                                                <button
                                                    className="py-[12px] px-[20px] bg-[#F04438] text-white align-middle rounded-md"
                                                // onClick={ (e) => {
                                                //     e.preventDefault();
                                                //     navigate("add-data");
                                                // } }
                                                >
                                                    + Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DateTable;
