import React from "react";
import { Segment } from "@domain/models/segment";
import { useDailyProgressCheckDetail } from "../daily-progress-check-detail/daily-progress-check-detail-model";
import { EditIcon } from "@common/components/icons/EditIcon";
import { PenAltIcon, PenIcon } from "@common/components/icons";
import { Comparisson } from "@domain/models/comparisson";
const SegmentTable = ({
    segment = Segment.create({
        id: "",
        name: "",
        type: "",
        pacSegments: [],
        comparisson: [],
        checked: false,
    }),
    key = null,
    index = null,
    model = useDailyProgressCheckDetail(),
}) => {
    return (
        <>
            <div
                key={key}
                className="m-auto border-2 border-gray-100 rounded-lg pb-6 mt-10  overflow-x-scroll flex"
            >
                <div>
                    <div className="w-full py-5 px-12 flex justify-between items-center">
                        <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                            {segment.name}
                        </h1>
                        <div className="flex gap-4 max-w-1/2 items-center justify-end">
                            {model.toogle ===
                            "2d" ? null : model.onEditSegment ? (
                                <button
                                    onClick={(e) =>
                                        model.saveSegment(
                                            e,
                                            model.segments?.[Number(index)].id
                                        )
                                    }
                                    className="py-[12px] px-[20px] bg-[#1BBDD4] text-white align-middle rounded-md flex gap-2 items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                        />
                                    </svg>
                                    Save Cavity
                                </button>
                            ) : (
                                <div className="flex gap-5">
                                    <div>
                                        <label
                                            htmlFor={`${segment.id}`}
                                            className="py-[12px] px-[20px] bg-[#1BBDD4] text-white align-middle rounded-md flex gap-2 items-center"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                                />
                                            </svg>
                                            Upload Comparisson
                                        </label>

                                        <input
                                            type="file"
                                            id={`${segment.id}`}
                                            onChange={(e) =>
                                                model.uploadComparisson(
                                                    e,
                                                    segment.id
                                                )
                                            }
                                            className="hidden"
                                        />
                                    </div>

                                    <button
                                        onClick={model.editSegment}
                                        type="button"
                                        role="button"
                                        className="py-[12px] px-[20px] bg-[#F79009] text-white align-middle rounded-md flex items-center gap-2"
                                    >
                                        <PenIcon />
                                        Edit Cavity
                                    </button>
                                    <button
                                        onClick={(e) =>
                                            model.deleteSegment(e, segment.id)
                                        }
                                        type="button"
                                        role="button"
                                        className="py-[12px] px-[20px] bg-[#F04438] text-white align-middle rounded-md"
                                    >
                                        + Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-[160vh]">
                        <table className="w-full flex-1">
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
                                {segment?.pacSegments?.map((segment, i) => (
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
                                            {model.onEditSegment ? (
                                                <input
                                                    type="text"
                                                    name="result"
                                                    value={
                                                        model.segments[index]
                                                            .pacSegments[i]
                                                            .result
                                                    }
                                                    onChange={(e) =>
                                                        model.handleEditSegment(
                                                            e,
                                                            index,
                                                            i
                                                        )
                                                    }
                                                    className="border border-gray-300 rounded-lg outline-none w-12 text-sm py-3 px-1.5"
                                                />
                                            ) : (
                                                segment.result
                                            )}
                                        </td>
                                        <td className="border bg-white text-center py-5">
                                            {segment.judgement}
                                        </td>
                                        <td className="border bg-white text-center py-5">
                                            {model.onEditSegment ? (
                                                <input
                                                    type="text"
                                                    name="saResult"
                                                    value={
                                                        model.segments[index]
                                                            .pacSegments[i]
                                                            .saResult
                                                    }
                                                    onChange={(e) =>
                                                        model.handleEditSegment(
                                                            e,
                                                            index,
                                                            i
                                                        )
                                                    }
                                                    className="border border-gray-300 rounded-lg outline-none w-12 text-sm py-3 px-1.5"
                                                />
                                            ) : (
                                                segment.saResult
                                            )}
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

                <div className="h-full flex">
                    {segment?.comparisson?.map((el, i) => {
                        return (
                            <>
                                <div>
                                    <div className="px-3 items-center border-x border-gray-100 py-5 flex justify-between">
                                        <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                                            Sample: {i + 1}
                                        </h1>
                                        <button
                                            onClick={(e) =>
                                                model.deleteComparisson(
                                                    e,
                                                    segment.id,
                                                    el.id
                                                )
                                            }
                                            className="py-[12px] px-[20px] bg-[#F04438] text-white align-middle rounded-md"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    <table className="w-[500px]">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="py-[52px] text-center border bg-[#B8EBF2] w-40 h-full"
                                                    rowSpan={2}
                                                    colSpan={2}
                                                >
                                                    Result
                                                </th>
                                                <th
                                                    className="py-[52px] text-center border bg-[#FEF4E6] w-40 h-full"
                                                    colSpan={2}
                                                    rowSpan={2}
                                                >
                                                    SA Result
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {el?.map((x) => {
                                                return (
                                                    <tr>
                                                        <td className="border bg-white text-center py-5 px-3">
                                                            {x.result}
                                                        </td>
                                                        <td className="border bg-white text-center py-5 px-3">
                                                            {x.resultJudgment}
                                                        </td>
                                                        <td className="border bg-white text-center py-5 px-3">
                                                            {x.saResult}
                                                        </td>
                                                        <td className="border bg-white text-center py-5 px-3">
                                                            {x.saResultJudgment}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default SegmentTable;
