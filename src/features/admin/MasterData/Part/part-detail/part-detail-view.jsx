import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import { PenAltIcon } from "../../../../../common/components/icons";
import { Td } from "../../../../../common/components/table/Td";
import { Tr } from "../../../../../common/components/table/Tr";
import { usePartDetail } from "./part-detail-view-model";
import { PartApiRepository } from "@data/api/part-api-repository";
const PartDetail = () => {
    const partDetail = usePartDetail(new PartApiRepository());
    return (
        <>
            <div>
                <Breadcrumbs items={["Part", "Detail"]} />
            </div>
            <div>
                <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-52 ">
                    <div className="w-full py-5 px-12 flex justify-between items-center">
                        <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                            Details
                        </h1>
                        <div className="flex items-center gap-3">
                            <button
                                className="py-[12px] px-[20px] border text-gray-600 text-center items-center rounded-md flex gap-2"
                                onClick={(e) => partDetail.onBack()}
                            >
                                <div className="rotate-180">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </div>
                                Back
                            </button>
                            <button
                                onClick={(e) => partDetail.onEdit()}
                                className="py-[12px] px-[20px] bg-[#F79009] text-white text-center items-center rounded-md flex gap-2 "
                            >
                                <PenAltIcon />
                                Edit
                            </button>
                        </div>
                    </div>

                    <div className="border-t-2 border-gray-100 py-8 px-8 flex ">
                        {/* table 1 */}
                        <div className="w-1/2 flex justify-center">
                            <table className="border-none w-[90%]">
                                <tbody>
                                    <Tr>
                                        <Td className="bg-gray-50 border-none">
                                            Cust, Item CD
                                        </Td>
                                        <Td className="bg-gray-50 border-none font-bold">
                                            {partDetail.part.customer},{" "}
                                            {partDetail.part.custItemId}
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td className=" border-none">
                                            Part Code
                                        </Td>
                                        <Td className="border-none font-bold">
                                            {partDetail.part.partCode}
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td className="bg-gray-50 border-none">
                                            Part Name
                                        </Td>
                                        <Td className="bg-gray-50 border-none font-bold">
                                            {partDetail.part.partName}
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td className=" border-none">
                                            Item Group CD
                                        </Td>
                                        <Td className="border-none font-bold">
                                            {partDetail.part.itemGroupCode}
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td className="bg-gray-50 border-none">
                                            Item Group Name
                                        </Td>
                                        <Td className="bg-gray-50 border-none font-bold">
                                            {partDetail.part.itemGroupName}
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td className=" border-none">
                                            Old Part Number
                                        </Td>
                                        <Td className="border-none font-bold">
                                            {partDetail.part.oldPartNumber}
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td className="bg-gray-50 border-none">
                                            Customer Model
                                        </Td>
                                        <Td className="bg-gray-50 border-none font-bold">
                                            {partDetail.part.customerModel}
                                        </Td>
                                    </Tr>
                                </tbody>
                                {/* {[state?].map((state?) => {
                                    return (
                                       
                                    );
                                })} */}
                            </table>
                        </div>

                        {/* table 2 */}
                        <div className="w-1/2 flex justify-center">
                            <table className="border-none w-[90%]">
                                <tbody>
                                    <Tr>
                                        <Td className="bg-gray-50 border-none">
                                            Customer
                                        </Td>
                                        <Td className="bg-gray-50 border-none font-bold">
                                            {partDetail.part.customer}
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td className=" border-none">
                                            Material
                                        </Td>
                                        <Td className="border-none font-bold">
                                            {partDetail.part.material}
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td className="bg-gray-50 border-none">
                                            Material Color
                                        </Td>
                                        <Td className="bg-gray-50 border-none font-bold">
                                            {partDetail.part.materialColor}
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td className=" border-none">
                                            Customer Model Group
                                        </Td>
                                        <Td className="border-none font-bold">
                                            {partDetail.part.customerModelGroup}
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td className="bg-gray-50 border-none">
                                            Unit CD
                                        </Td>
                                        <Td className="bg-gray-50 border-none font-bold">
                                            {partDetail.part.unitCd}
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td className=" border-none">
                                            Material Details
                                        </Td>
                                        <Td className="border-none font-bold">
                                            {partDetail.part.materialDetails}
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td className="bg-gray-50 border-none">
                                            Product Weight
                                        </Td>
                                        <Td className="bg-gray-50 border-none font-bold">
                                            {partDetail.part.productWeight} gram
                                        </Td>
                                    </Tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartDetail;
