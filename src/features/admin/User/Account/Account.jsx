import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../../common/components";
import {
    EyeIcon,
    PenAltIcon,
    TrashIcon,
} from "../../../../common/components/icons";
import ModalDelete from "../../../../common/components/Modal/ModalDelete";
import Pagination from "../../../../common/components/pagination/Pagination";

const Account = () => {
    const [showHide, setShowHide] = useState(false);
    const [toggle, setToggle] = useState(true);
    const toggleClass = " transform translate-x-5";
    const navigate = useNavigate();
    return (
        <>
            <ModalDelete showModal={showHide} setShowModal={setShowHide} />
            <div>
                <Breadcrumbs items={["User", "Account"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 ">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Account.
                    </h1>
                    <div className="flex justify-end gap-4">
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 absolute top-3 left-2 text-gray-100"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                            <input
                                type="text"
                                name="search"
                                placeholder="Search "
                                className="outline-none pl-9 py-4  border border-gray-100 rounded-xl w-[280px] text-rubik  text-sm placeholder:text-gray-100 text-gray-600"
                            />
                        </div>
                        <button
                            className="py-[12px] px-[20px] bg-gray-600 text-white align-middle rounded-md"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("add-data");
                            }}
                        >
                            + Create New Account
                        </button>
                    </div>
                </div>
                <div>
                    <table className="w-full">
                        <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                            <tr>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Status
                                </th>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Nama
                                </th>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Email
                                </th>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Role
                                </th>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b-2 border-gray-100">
                                <td className="py-6 text-center pl-3 text-gray-600 items-center flex justify-center ">
                                    <div className="flex gap-2">
                                        <div
                                            className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
                                            onClick={() => {
                                                setToggle(!toggle);
                                            }}
                                        >
                                            {/* Switch */}
                                            <div
                                                className={
                                                    "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                                                    (toggle
                                                        ? null
                                                        : toggleClass)
                                                }
                                            ></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-6 text-center pl-3 text-gray-600 ">
                                    Ayu Umi Pertiwi
                                </td>

                                <td className="py-6 text-center pl-3 text-gray-600 ">
                                    ckctm12@gmail.com
                                </td>
                                <td className="py-6 text-center pl-3 text-gray-600 ">
                                    Super Admin
                                </td>
                                <td className="py-6  pl-3 text-gray-600 flex gap-3 justify-center">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate("detail");
                                        }}
                                        className="py-[12px] px-[20px] bg-sky-standart items-center rounded-md text-white flex gap-2"
                                    >
                                        <EyeIcon />
                                        Detail
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate("edit-data");
                                        }}
                                        className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2"
                                    >
                                        <PenAltIcon />
                                        Edit
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShowHide(!showHide);
                                        }}
                                        className="py-[12px] px-[20px] bg-[#F04438] items-center rounded-md text-white flex gap-2"
                                    >
                                        <TrashIcon />
                                        Delete
                                    </button>
                                </td>
                            </tr>
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

export default Account;
