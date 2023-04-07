import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../../common/components";
import { Td } from "../../../../common/components/table/Td";
import { Tr } from "../../../../common/components/table/Tr";
import CavasityTable from "../components/CavasityTable";
import DateTable from "../components/DateTable";
import JudgementIcon from "../icon/JudgemnetIcon";
import { useDailyProgressCheckDetail } from "./daily-progress-check-detail-model";
import moment from "moment";
const DailyProgressCheckDetailView = () => {
    // const [cavasity, setCavasity] = useState(true);
    // const [toggle, setToggle] = useState(true);
    // const toggleClass = " ";
    // const navigate = useNavigate();
    const dailyProgressCheckDetail = useDailyProgressCheckDetail();
    return (
        <>
            <div>
                <Breadcrumbs items={["Daily Progress Check", "Detail 3D"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Details
                    </h1>
                    <div className="flex justify-end items-center gap-3">
                        <div className="flex gap-2">
                            {dailyProgressCheckDetail.toogle == "2d"
                                ? "2D"
                                : "3D"}
                            <div
                                className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
                                onClick={dailyProgressCheckDetail.onToogle}
                            >
                                {/* Switch */}
                                <div
                                    className={`bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out ${
                                        dailyProgressCheckDetail.toogle ==
                                            "2d" && `transform translate-x-5`
                                    }`}
                                    // className={`bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out`}
                                ></div>
                            </div>
                            {dailyProgressCheckDetail.toogle == '3d' ? '3D' : '2D'}
                        </div>

                        <div className="flex gap-4">
                            <button
                                className="py-[12px] px-[20px] bg-[#1BBDD4] text-white align-middle rounded-md"
                                onClick={dailyProgressCheckDetail.onAddSegment}
                            >
                                + Add Segment Data
                            </button>
                            <button
                                className="py-[12px] px-[20px] bg-[#1BBDD4] text-white align-middle rounded-md"
                                onClick={dailyProgressCheckDetail.onAddHistory}
                            >
                                + Add History Data
                            </button>

                            <button
                                className="py-[12px] px-[20px] bg-[#1BBDD4] text-white align-middle rounded-md flex"
                                onClick={dailyProgressCheckDetail.onDownloadReport}
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
                                Download Report
                            </button>
                            <button
                                className="py-[12px] px-[20px] border border-gray-100 align-middle rounded-md flex gap-2"
                                onClick={dailyProgressCheckDetail.onBack}
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
                        </div>
                    </div>
                </div>

                <div className="border-t-2 border-gray-100 py-8 px-8 flex ">
                    {/* table 1 */}
                    <div className="w-1/2 flex justify-center">
                        <table className="border-none w-[90%]">
                            <tbody>
                                <Tr>
                                    <Td className="bg-gray-50 border-none">
                                        Part Name
                                    </Td>
                                    <Td className="bg-gray-50 border-none font-bold">
                                        {/* {dailyProgressCheckDetail.dailyProgressCheck.part/} */}
                                        {dailyProgressCheckDetail.dailyProgressCheck.part?.partName}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className=" border-none">
                                        Part Code (Item CD){" "}
                                    </Td>
                                    <Td className="border-none font-bold">
                                        {/* 1101000001 */}
                                        {/* {state?.part_cd} */}
                                        {dailyProgressCheckDetail.dailyProgressCheck.part?.partCode}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className="bg-gray-50 border-none">
                                        Model
                                    </Td>
                                    <Td className="bg-gray-50 border-none font-bold">
                                        {/* Adjani */}
                                        {/* {state?.part_name} */}
                                        {dailyProgressCheckDetail.dailyProgressCheck.part?.customerModel}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className=" border-none">
                                        Machine No.
                                    </Td>
                                    <Td className="border-none font-bold">
                                        {/* E1-F3-C6-9E-E3-AE */}
                                        {/* {state?.item_group_cd} */}
                                        {dailyProgressCheckDetail.dailyProgressCheck.machine?.noMachine}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className="bg-gray-50 border-none">
                                        Inspection Date
                                    </Td>
                                    <Td className="bg-gray-50 border-none font-bold">
                                        {/* 07/02/2023 */}
                                        {/* {state?.item_group_name} */}
                                        {moment(dailyProgressCheckDetail.dailyProgressCheck.inspectionDate).format('DD/MM/YYYY')}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className=" border-none">
                                        Part Weight QIS
                                    </Td>
                                    <Td className="border-none font-bold">
                                        {/* Part Weight QIS */}
                                        {/* {state?.old_part_number} */}
                                        {dailyProgressCheckDetail.dailyProgressCheck.weightPart}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className="bg-gray-50 border-none">
                                        Lot Production
                                    </Td>
                                    <Td className="bg-gray-50 border-none font-bold">
                                        {/* 23207A */}
                                        {/* {state?.customer_model?.name} */}
                                        {dailyProgressCheckDetail.dailyProgressCheck.lotProduction}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className="bg-gray-50 border-none">
                                        Checked By
                                    </Td>
                                    <Td className="bg-gray-50 border-none font-bold">
                                        Dwiky Aprinald
                                        {/* {dailyProgressCheckDetail.dailyProgressCheck.che} */}
                                        {/* {state?.customer_model?.name} */}
                                    </Td>
                                </Tr>
                            </tbody>
                        </table>
                    </div>

                    {/* table 2 */}
                    <div className="w-1/2 flex justify-center">
                        <table className="border-none w-[90%]">
                            <tbody>
                                <Tr>
                                    <Td className="bg-gray-50 border-none">
                                        Shift
                                    </Td>
                                    <Td className="bg-gray-50 border-none font-bold">
                                        {/* Shift 2{state?.customer?.name} */}
                                        {dailyProgressCheckDetail.dailyProgressCheck.shift}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className=" border-none">PIC</Td>
                                    <Td className="border-none font-bold">
                                        {/* Bramantra */}
                                        {dailyProgressCheckDetail.dailyProgressCheck.pic?.name}
                                        {/* {state?.material?.id_material} */}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className="bg-gray-50 border-none">
                                        Label No.
                                    </Td>
                                    <Td className="bg-gray-50 border-none font-bold">
                                        {/* 01 */}
                                        {dailyProgressCheckDetail.dailyProgressCheck.labelNo}
                                        {/* {state?.material?.color?.name} */}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className=" border-none">
                                        Accept sample (time)
                                    </Td>
                                    <Td className="border-none font-bold">
                                        {/* 14:00 */}
                                        {dailyProgressCheckDetail.dailyProgressCheck.acceptSampleTime}
                                        {/* {state?.customer_model_group.name} */}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className="bg-gray-50 border-none">
                                        Measure sample (time)
                                    </Td>
                                    <Td className="bg-gray-50 border-none font-bold">
                                        {/* 18:10 */}
                                        {dailyProgressCheckDetail.dailyProgressCheck.measureSampleTime}
                                        {/* {state?.unit_cd} */}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className=" border-none">
                                        Weight Part
                                    </Td>
                                    <Td className="border-none font-bold">
                                        {/* 299.8 gram */}
                                        {dailyProgressCheckDetail.dailyProgressCheck.weightPart || `~`} gram
                                        {/* {state?.material?.detail} */}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className="bg-gray-50 border-none">
                                        Judgement
                                    </Td>
                                    <Td className="bg-gray-50 border-none font-bold">
                                        <JudgementIcon value={dailyProgressCheckDetail.toogle == '2d' ? dailyProgressCheckDetail.dailyProgressCheck.judgement2d : dailyProgressCheckDetail.dailyProgressCheck.judgement3d} />
                                        {/* {state?.product_weight} gram */}
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td className=" border-none">Update at</Td>
                                    <Td className="border-none font-bold">
                                        {/* 17:48 */}
                                        {moment(dailyProgressCheckDetail.dailyProgressCheck.updatedAt).format('HH:mm')}
                                        {/* {state?.material?.detail} */}
                                    </Td>
                                </Tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* {cavasity ? (
                <> */}
            <CavasityTable data={[]} />
            <DateTable data={[]} />
            {/* </>
            ) : null} */}
        </>
    );
};

export default DailyProgressCheckDetailView;
