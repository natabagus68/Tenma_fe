import React from "react";
import { useNavigate } from "react-router-dom";

const CavasitySMeasurent = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 mt-10">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Cavasity 1
                    </h1>
                </div>

                <div>
                    <table className="border w-full">
                        <thead>
                            <tr>
                                <th className="border py-4" colSpan={4}>
                                    Standart
                                </th>
                                <th
                                    className="border py-4 bg-[#FDDDB3]"
                                    colSpan={2}
                                >
                                    Special Accept
                                </th>
                                <th
                                    className="border py-4 bg-[#D0D3D9]"
                                    rowSpan={2}
                                >
                                    Tools
                                </th>
                            </tr>
                            <tr>
                                <th className="py-4 border bg-[#D0D3D9]">
                                    Character
                                </th>
                                <th className="py-4 border bg-[#D0D3D9]">
                                    Nominal
                                </th>
                                <th className="py-4 border bg-[#D0D3D9]">
                                    Upper
                                </th>
                                <th className="py-4 border bg-[#D0D3D9]">
                                    Lower
                                </th>
                                <th className="py-4 border bg-gray-50">
                                    Upper
                                </th>
                                <th className="py-4 border bg-gray-50">
                                    Lower
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-4 border text-center">
                                    Character
                                </td>
                                <td className="py-4 border text-center">
                                    Nominal
                                </td>
                                <td className="py-4 border text-center">
                                    Upper
                                </td>
                                <td className="py-4 border text-center">
                                    Lower
                                </td>
                                <td className="py-4 border text-center">Act</td>
                                <td className="py-4 border text-center">
                                    Exceed
                                </td>
                                <td className="py-4 border text-center">
                                    Tool
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CavasitySMeasurent;
