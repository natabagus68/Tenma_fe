import React from "react";
import { Breadcrumbs } from "../../../../common/components";
import {
    EyeIcon,
    PenAltIcon,
    TrashIcon,
} from "../../../../common/components/icons";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../../../../common/components/pagination/Pagination";
const Customer = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <Breadcrumbs items={["customer"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Customer
                    </h1>
                </div>

                <div className="w-full py-5 px-12 flex justify-between items-center border-t-2 boder-gray-100">
                    <div className="flex gap-5">
                        <Link className="text-gray-600 text-xl hover:text-[#F04438] hover:border-b-2 pb-2 hover:border-[#F04438] hover:scale-90">
                            Customer
                        </Link>
                        <Link className="text-gray-600 text-xl hover:text-[#F04438] hover:border-b-2 pb-2 hover:border-[#F04438]">
                            Customer Model
                        </Link>
                        <Link className="text-gray-600 text-xl hover:text-[#F04438] hover:border-b-2 pb-2 hover:border-[#F04438]">
                            Customer Model Group
                        </Link>
                    </div>
                    <button
                        className="py-[12px] px-[20px] bg-gray-600 text-white align-middle rounded-md"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("add-data");
                        }}
                    >
                        + Add Data
                    </button>
                </div>
                <div>
                    <table className="w-full">
                        <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                            <tr>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Customer Name
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
                </div>
                <div className="flex items-center justify-end mt-4 px-5">
                    <Pagination row={1} limit={10} />
                </div>
            </div>
        </>
    );
};

export default Customer;
