import React from "react";
import { Segment } from "@domain/models/segment";
const CavasityTable = ({ segment }: { segment: Segment }) => {
    return (
        <>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 mt-10">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        {segment.name}
                    </h1>
                    <div className="flex gap-4 w-1/2 items-center justify-end">
                        <button
                            className="py-[12px] px-[20px] bg-[#F04438] text-white align-middle rounded-md"
                        >
                            + Delete
                        </button>
                    </div>
                </div>

                <div>
                    <table className="border w-full">
                        <thead>
                            <tr>
                                <th className="border py-4" colSpan={4}>
                                    Standart
                                </th>
                                <th
                                    className="border py-4 bg-[#FAC5C1]"
                                    colSpan={2}
                                >
                                    PAC
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
                                <th className="py-4 border bg-[#D0D3D9]">
                                    Act
                                </th>
                                <th className="py-4 border bg-[#D0D3D9]">
                                    Exceed
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {segment.pacSegments.map(item => (
                            <tr key={item.id}>
                                <td className="py-4 border text-center">
                                    {item.character}
                                </td>
                                <td className="py-4 border text-center">
                                    {item.nominal}
                                </td>
                                <td className="py-4 border text-center">
                                    {item.upper}
                                </td>
                                <td className="py-4 border text-center">
                                    {item.lower}
                                </td>
                                <td className="py-4 border text-center">Act</td>
                                <td className="py-4 border text-center">
                                    Exceed
                                </td>
                                <td className="py-4 border text-center">
                                    Tool
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CavasityTable;
