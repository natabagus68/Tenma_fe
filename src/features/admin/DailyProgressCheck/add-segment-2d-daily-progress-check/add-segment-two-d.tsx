import { Breadcrumbs } from "@common/components";
import React from "react";
import { useAddSegment2dModel } from "./add-segment-2d-model";

const AddSegmentTwoD = () => {
    const model = useAddSegment2dModel();
    return (
        <>
            <div>
                <Breadcrumbs
                    items={["Daily Progress Check", "Details 3D", "Add Data"]}
                />
            </div>
            {model.segments.map((item, index) => (
                <>
                    <div
                        key={item.id}
                        className="m-auto w-full border-t-2 border-x-2 rounded-t-lg border-gray-100   mt-4"
                    >
                        <div className="w-full py-5 px-12 flex gap-5 items-center">
                            <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                                Input Segment
                            </h1>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Input name"
                                    value={model.segments[index].name}
                                    name="name"
                                    onChange={(e) =>
                                        model.onInputNameChange(e, index)
                                    }
                                    className="py-3 w-52 px-5 text-md text-gray-600 font-rubik border border-gray-200 rounded-md outline-none placeholder:text-center"
                                />
                            </div>
                            <div className="relative left-[800px]">
                                <button
                                    onClick={(e) =>
                                        model.deleteTableUpdate(e, index)
                                    }
                                    className="px-14 py-3 bg-red-500 text-white rounded-md shadow-md hover:scale-95 hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <table className="w-full border border-gray-100 rounded-b-lg">
                            <thead>
                                <tr>
                                    <th
                                        className="py-5 border  bg-white text-center"
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
                                    >
                                        Actual Result
                                    </th>
                                    <th
                                        className="py-5 text-center border bg-[#FEF4E6] w-40"
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
                                {item.measurements.map(
                                    (measurement, index2) => (
                                        <tr key={item.id}>
                                            <td className="border bg-white text-center py-5">
                                                {measurement.character}
                                            </td>
                                            <td className="border bg-white text-center py-5">
                                                {measurement.nominal}
                                            </td>
                                            <td className="border bg-white text-center py-5">
                                                {measurement.upper}
                                            </td>
                                            <td className="border bg-white text-center py-5">
                                                {measurement.lower}
                                            </td>
                                            <td className="border bg-white text-center py-5">
                                                {measurement.saUpper}
                                            </td>
                                            <td className="border bg-white text-center py-5">
                                                {measurement.saLower}
                                            </td>
                                            <td className="border bg-white text-center py-5">
                                                {measurement.tool?.name}
                                            </td>
                                            <td className="border bg-white ">
                                                <div className="w-full flex justify-between">
                                                    <div className="py-5 pr-3 h-full text-start w-[50%] border-r border-gray-100 pl-2">
                                                        {model.segments[
                                                            index
                                                        ].measurements[
                                                            index2
                                                        ].nominal.toLowerCase() !==
                                                        "decimal" ? (
                                                            <input
                                                                type="text"
                                                                value={
                                                                    model
                                                                        .segments[
                                                                        index
                                                                    ]
                                                                        .measurements[
                                                                        index2
                                                                    ].result
                                                                }
                                                                name="result"
                                                                onChange={(e) =>
                                                                    model.onChangeInput(
                                                                        e,
                                                                        index,
                                                                        index2
                                                                    )
                                                                }
                                                                className="w-16 h-8 text-center border rounded-md outline-none"
                                                            />
                                                        ) : (
                                                            <input
                                                                step="0.001"
                                                                type="number"
                                                                min={0}
                                                                value={
                                                                    model
                                                                        .segments[
                                                                        index
                                                                    ]
                                                                        .measurements[
                                                                        index2
                                                                    ].result
                                                                }
                                                                name="result"
                                                                onChange={(e) =>
                                                                    model.onChangeInput(
                                                                        e,
                                                                        index,
                                                                        index2
                                                                    )
                                                                }
                                                                className="w-16 h-8 text-center border rounded-md outline-none"
                                                            />
                                                        )}
                                                    </div>
                                                    <div className=" w-full text-center items-center flex justify-center">
                                                        <p className="m-auto">
                                                            {
                                                                model.segments[
                                                                    index
                                                                ].measurements[
                                                                    index2
                                                                ].judgement
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border bg-white flex justify-between">
                                                <div className="py-5 pr-4 h-full text-start w-[50%] border-r border-gray-100 pl-2">
                                                    {model.segments[
                                                        index
                                                    ].measurements[
                                                        index2
                                                    ].nominal.toLowerCase() ==
                                                    "decimal" ? (
                                                        <input
                                                            step="0.00001"
                                                            type="  "
                                                            value={
                                                                model.segments[
                                                                    index
                                                                ].measurements[
                                                                    index2
                                                                ].saResult
                                                            }
                                                            name="saResult"
                                                            onChange={(e) =>
                                                                model.onChangeInput(
                                                                    e,
                                                                    index,
                                                                    index2
                                                                )
                                                            }
                                                            className="w-16 h-8 text-center border rounded-md outline-none"
                                                        />
                                                    ) : (
                                                        <input
                                                            value={
                                                                model.segments[
                                                                    index
                                                                ].measurements[
                                                                    index2
                                                                ].saResult
                                                            }
                                                            name="saResult"
                                                            onChange={(e) =>
                                                                model.onChangeInput(
                                                                    e,
                                                                    index,
                                                                    index2
                                                                )
                                                            }
                                                            type="text"
                                                            className="w-16 h-8 text-center border rounded-md outline-none"
                                                        />
                                                    )}
                                                </div>
                                                <div className=" w-full text-center items-center flex justify-center">
                                                    <p className="m-auto">
                                                        {
                                                            model.segments[
                                                                index
                                                            ].measurements[
                                                                index2
                                                            ].saJudgement
                                                        }
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </>
            ))}

            <div className="w-full text-center mt-5">
                <button
                    onClick={model.onAddSegment}
                    className="m-auto px-14 py-3 text-white rounded-md bg-gray-700 hover:scale-90 duration-300"
                >
                    + Add Segments
                </button>
            </div>

            <div className="w-full py-5 px-4 border border-gray-100 rounded-md flex items-center justify-start gap-3 mt-14">
                <button
                    onClick={(e) => model.onSave(e)}
                    className="px-14 text-center bg-sky-standart py-3 text-white rounded-md mx-4"
                >
                    Save
                </button>
                <button
                    onClick={model.onCancel}
                    className="px-14 text-center bg-transparent border border-gray-100 py-3 rounded-md "
                >
                    Cancel
                </button>
            </div>
        </>
    );
};

export default AddSegmentTwoD;
