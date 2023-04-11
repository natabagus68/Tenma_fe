import React from "react";
import { Segment } from "@domain/models/segment";
const SegmentTable = ({ segment }: { segment: Segment }) => {
    return (
        <>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 mt-10">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        {segment.name}
                    </h1>
                </div>
                <div>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th
                                    className="py-5 border bg-white text-center"
                                    colSpan={4}
                                >
                                    Standard
                                </th>
                                <th
                                    className="py-5 border bg-[#FDDDB3] text-center"
                                    colSpan={2}
                                >
                                    Special Accept
                                </th>
                                <th
                                    className="py-5 border bg-gray-100 text-center"
                                    rowSpan={2}
                                >
                                    Tool
                                </th>
                                <th
                                    className="py-5 text-center border bg-[#B8EBF2] w-40"
                                    rowSpan={2}
                                    colSpan={2}
                                >
                                    Actual Result
                                </th>
                                <th
                                    className="py-5 text-center border bg-[#FEF4E6] w-40"
                                    colSpan={2}
                                    rowSpan={2}
                                >
                                    SA Result
                                </th>
                            </tr>
                            <tr>
                                <th className="py-5 text-center border bg-gray-100">
                                    Character
                                </th>
                                <th className="py-5 text-center border bg-gray-100">
                                    Nominal
                                </th>
                                <th className="py-5 text-center border bg-gray-100">
                                    Upper
                                </th>
                                <th className="py-5 text-center border bg-gray-100">
                                    Lower
                                </th>
                                <th className="py-5 text-center border bg-gray-50">
                                    Upper
                                </th>
                                <th className="py-5 text-center border bg-gray-50">
                                    Lower
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {segment.pacSegments?.map((segment) => (
                                <tr key={segment.id}>
                                    <td className="border bg-white text-center py-5">
                                        {segment.character}
                                    </td>
                                    <td className="border bg-white text-center py-5">
                                        {segment.nominal}
                                    </td>
                                    <td className="border bg-white text-center py-5">
                                        {segment.upper}
                                    </td>
                                    <td className="border bg-white text-center py-5">
                                        {segment.lower}
                                    </td>
                                    <td className="border bg-white text-center py-5">
                                        {segment.saUpper}
                                    </td>
                                    <td className="border bg-white text-center py-5">
                                        {segment.saLower}
                                    </td>
                                    <td className="border bg-white text-center py-5">
                                        {segment.tool?.name}
                                    </td>
                                    <td className="border bg-white text-center py-5">
                                        {segment.result}
                                    </td>
                                    <td className="border bg-white text-center py-5">
                                        {segment.judgement}
                                    </td>
                                    <td className="border bg-white text-center py-5">
                                        {segment.saResult}
                                    </td>
                                    <td className="border bg-white text-center py-5">
                                        {segment.saJudgement}
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

export default SegmentTable;
