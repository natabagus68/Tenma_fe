import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../../../common/components";
import { Td } from "../../../../../common/components/table/Td";
import { Tr } from "../../../../../common/components/table/Tr";
import Cavasity2Measurement from "../components/Cavasity2Measurement";
import CavasitySMeasurent from "../components/CavasitySMeasurent";
import useMeasurementDetail from "./measurement-detail-view-model";

const MeasurementDetail = () => {
    const model = useMeasurementDetail();
    return (
        <>
            <div>
                <Breadcrumbs items={["Measurement Std", "Detail"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Details
                    </h1>
                    <div className="flex gap-3 justify-end pr-5">
                        <button
                            onClick={model.back}
                            className="py-[12px] px-[20px] bg-white border border-gray-500 text-gray-100 align-middle rounded-md flex gap-2 items-center"
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
                            onClick={(e) => model.toEdit()}
                            className="py-[12px] px-[20px] bg-[#F79009] text-white align-middle rounded-md flex gap-3 items-center"
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
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                            </svg>
                            Edit
                        </button>
                    </div>
                </div>
                <div className="border-t-2 border-gray-100 py-14 px-8">
                    <table className="border-none">
                        <tbody>
                            <Tr>
                                <Td className="py-4 text-center bg-gray-300 border-none">
                                    Part Name
                                </Td>
                                <Td className="py-4 text-center font-bold bg-gray-300 border-none">
                                    {model.measurement.part.partName}
                                </Td>
                            </Tr>
                            <Tr>
                                <Td className="py-4 text-center border-none">
                                    Part Code (Item CD)
                                </Td>
                                <Td className="py-4 text-center font-bold border-none">
                                    {model.measurement.part.partCode}
                                </Td>
                            </Tr>
                            <Tr>
                                <Td className="py-4 text-center bg-gray-300 border-none">
                                    Model
                                </Td>
                                <Td className="py-4 text-center font-bold bg-gray-300 border-none">
                                    {model.measurement.part.customerModel}
                                </Td>
                            </Tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <CavasitySMeasurent model={model.measurement} />
            {/* <Cavasity2Measurement /> */}
        </>
    );
};

export default MeasurementDetail;
