import React from "react";
import { Breadcrumbs } from "../../../../common/components";
import {
    EyeIcon,
    PenAltIcon,
    TrashIcon,
} from "../../../../common/components/icons";
const MeasurementStd = () => {
    return (
        <>
            <div>
                <Breadcrumbs items={["Measurement Std"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Measurement Std.
                    </h1>
                    <button className="py-[12px] px-[20px] bg-gray-600 text-white align-middle rounded-md">
                        + Add Data
                    </button>
                </div>
                <div>
                    <table className="w-full">
                        <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                            <tr>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Part Code (Item CD)
                                </th>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Part Name
                                </th>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Model
                                </th>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b-2 border-gray-100">
                                <td className="py-6 text-center pl-3 text-gray-600 ">
                                    123456y
                                </td>
                                <td className="py-6 text-center pl-3 text-gray-600 ">
                                    ASHA
                                </td>
                                <td className="py-6 text-center pl-3 text-gray-600 ">
                                    NG
                                </td>
                                <td className="py-6  pl-3 text-gray-600 flex gap-3 justify-center">
                                    <button className="py-[12px] px-[20px] bg-[#1BBDD4] items-center rounded-md text-white flex gap-2">
                                        <EyeIcon />
                                        Detail
                                    </button>
                                    <button className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2">
                                        <PenAltIcon />
                                        Edit
                                    </button>
                                    <button className="py-[12px] px-[20px] bg-[#F04438] items-center rounded-md text-white flex gap-2">
                                        <TrashIcon />
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MeasurementStd;
