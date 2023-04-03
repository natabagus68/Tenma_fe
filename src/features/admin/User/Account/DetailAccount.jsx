import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../../common/components";
import { Td } from "../../../../common/components/table/Td";
import { Tr } from "../../../../common/components/table/Tr";

const DetailAccount = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <Breadcrumbs items={["Account", "Detail"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Details
                    </h1>
                    <div className="flex justify-end items-center gap-3">
                        <div className="flex gap-2">
                            <button
                                className="py-[12px] px-[20px] border border-gray-100 align-middle rounded-md flex gap-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("../");
                                }}
                            >
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
                                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                    />
                                </svg>
                                Back
                            </button>
                            <button
                                className="py-[12px] px-[20px] bg-[#F79009] text-white align-middle rounded-md flex"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/user/account/edit-data");
                                }}
                            >
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
                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t-2 border-gray-100 py-8 px-8 flex flex-col gap-8">
                    <div className="w-full justify-star px-8">
                        <h1 className="text-4xl text-start">
                            User Information
                        </h1>
                    </div>
                    {/* table 1 */}
                    <div className="w-1/2 flex justify-center">
                        <table className="border-none w-[90%]">
                            <tbody>
                                <Tr>
                                    <Td className="bg-gray-50 border-none">
                                        Name
                                    </Td>
                                    <Td className="bg-gray-50 border-none font-bold">
                                        Afif Chandra
                                        {/* {state?.cust_item_cd} */}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className=" border-none">Email</Td>
                                    <Td className="border-none font-bold">
                                        contoh@gmail.com
                                        {/* {state?.part_cd} */}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className="bg-gray-50 border-none">
                                        Role
                                    </Td>
                                    <Td className="bg-gray-50 border-none font-bold">
                                        Adjani
                                    </Td>
                                </Tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailAccount;
