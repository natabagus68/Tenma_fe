import React from "react";

const DateTable = ({ data }) => {
    return (
        <>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 mt-10">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Cavasity 2
                    </h1>
                    <div className="flex gap-4 w-1/2 items-center justify-end">
                        <button
                            className="py-[12px] px-[20px] bg-[#F79009]  text-white align-middle rounded-md"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("add-data");
                            }}
                        >
                            + Edit
                        </button>

                        <button
                            className="py-[12px] px-[20px] bg-[#F04438] text-white align-middle rounded-md"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("add-data");
                            }}
                        >
                            + Delete
                        </button>
                    </div>
                </div>
                <div>
                    <div className=" w-full">
                        <table className="w-full">
                            <thead className=" border-y-2 border-gray-100">
                                <tr>
                                    <th className="py-6 bg-gray-50">Date</th>
                                    <th className="py-6 bg-gray-50">
                                        History Problem
                                    </th>
                                    <th className="py-6 bg-gray-50">Char</th>
                                    <th className="py-6 bg-gray-50">Remark</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center border-b-2 border-gray-100 py-6">
                                        data
                                    </td>
                                    <td className="text-center border-b-2 border-gray-100 py-6">
                                        data
                                    </td>
                                    <td className="text-center border-b-2 border-gray-100 py-6">
                                        data
                                    </td>
                                    <td className="text-center border-b-2 border-gray-100 py-6">
                                        data
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DateTable;
