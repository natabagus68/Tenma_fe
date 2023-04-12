import React, { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { Breadcrumbs } from "../../../../../common/components";
import {
    EyeIcon,
    PenAltIcon,
    TrashIcon,
} from "../../../../../common/components/icons";
import Pagination from "../../../../../common/components/pagination/Pagination";
import Modal from "../Modal/Modal";
import useUserAccess from "./user-access-model-view";

const Access = () => {
    const model = useUserAccess();
    return (
        <>
            <div>
                <Breadcrumbs items={["User", "Access"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 ">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Access.
                    </h1>
                    <div className="flex justify-end gap-4">
                        <button
                            onClick={model.toAddData}
                            className="py-[12px] px-[20px] bg-gray-600 text-white align-middle rounded-md"
                        >
                            + Create New Role
                        </button>
                    </div>
                </div>
                <div>
                    <table className="w-full">
                        <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                            <tr>
                                <th className="py-6 text-start pl-32 text-gray-600 font-[500]">
                                    Role
                                </th>
                                <th className="py-6 text-start pl-80 text-gray-600 font-[500]">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {model.access.data.map((item, index) => (
                                <tr
                                    className="border-b-2 border-gray-100"
                                    key={index}
                                >
                                    <td className="py-6 text-start pl-32 text-gray-600 ">
                                        {item.name}
                                    </td>
                                    <td className="py-6  pl-80 text-gray-600 flex gap-3 justify-start">
                                        <button className="py-[12px] px-[20px] bg-sky-standart items-center rounded-md text-white flex gap-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                                />
                                            </svg>
                                            Menu
                                        </button>
                                        <button
                                            onClick={() =>
                                                model.toEdit(item.id)
                                            }
                                            className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2"
                                        >
                                            <PenAltIcon />
                                            Edit
                                        </button>
                                        <button
                                            onClick={() =>
                                                model.toDelete(item.id)
                                            }
                                            className="py-[12px] px-[20px] bg-[#F04438] items-center rounded-md text-white flex gap-2"
                                        >
                                            <TrashIcon />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex items-center justify-end mt-4 px-5">
                        <Pagination row={1} limit={10} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Access;
