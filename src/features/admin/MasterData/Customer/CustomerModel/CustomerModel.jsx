import React from "react";
import { PenAltIcon, TrashIcon } from "../../../../../common/components/icons";

const CustomerModel = () => {
    return (
        <>
            <table className="w-full">
                <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                    <tr>
                        <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                            Customer Model Name
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

                        <td className="py-6  pl-3 text-gray-600 flex gap-3 justify-center">
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
        </>
    );
};

export default CustomerModel;
