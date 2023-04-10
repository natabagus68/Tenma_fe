import React, { useState } from "react";
import ModalDelete from "../../../../../../common/components/Modal/ModalDelete";
import ModalNominal from "./ModalNominal";
import { useInputMeasurementStd } from "../../input-form-measurement-std/input-form-measurement-std-model";
const SpecialAcept = ({ model = useInputMeasurementStd() }) => {
    return (
        <>
            <ModalNominal model={model} />
            <div>
                <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 mt-10">
                    <div className="w-full py-5 px-12 flex justify-between items-center">
                        <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                            Segment
                        </h1>
                    </div>

                    <form>
                        <table className="border w-full">
                            <thead>
                                <tr>
                                    <th className="border py-4" colSpan={4}>
                                        Standart
                                    </th>
                                    <th
                                        className="border py-4 bg-[#FDDDB3]"
                                        colSpan={2}
                                    >
                                        Special Accept
                                    </th>
                                    <th
                                        className="border py-4 bg-[#D0D3D9]"
                                        rowSpan={2}
                                    >
                                        Tools
                                    </th>
                                </tr>
                                <tr>
                                    <th className="py-4 border bg-[#D0D3D9]">
                                        Character
                                    </th>
                                    <th className="py-4 border bg-[#D0D3D9]">
                                        Nominal
                                    </th>
                                    <th className="py-4 border bg-[#D0D3D9]">
                                        Upper
                                    </th>
                                    <th className="py-4 border bg-[#D0D3D9]">
                                        Lower
                                    </th>
                                    <th className="py-4 border bg-gray-50">
                                        Upper
                                    </th>
                                    <th className="py-4 border bg-gray-50">
                                        Lower
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {model.measurementStd.segments.map(
                                    (item, ind) => (
                                        <tr>
                                            <td className="py-4 border text-center">
                                                <input
                                                    type="text"
                                                    name="character"
                                                    value={item.character}
                                                    onChange={(e) =>
                                                        model.onSegmentChange(
                                                            e,
                                                            ind
                                                        )
                                                    }
                                                    className="px-2 py-2 text-gray-600 m-0 border border-gray-100 rounded-md outline-none w-[50%]"
                                                />
                                            </td>
                                            <td className="py-4  px-4 border text-center">
                                                <button
                                                    type="button"
                                                    role="button"
                                                    onClick={(e) =>
                                                        model.onShowNominalModal(
                                                            e,
                                                            item
                                                        )
                                                    }
                                                    className="px-8 py-2 bg-sky-standart text-center rounded-md text-white     "
                                                >
                                                    {item.nominal ||
                                                        "Choose Nominal"}
                                                </button>
                                            </td>
                                            <td className="py-4 border text-center">
                                                <input
                                                    type="number"
                                                    step="0.0001"
                                                    name="upper"
                                                    value={item.upper}
                                                    onChange={(e) =>
                                                        model.onSegmentChange(
                                                            e,
                                                            ind
                                                        )
                                                    }
                                                    className="px-2 py-2 text-gray-600 m-0 border border-gray-100 rounded-md outline-none w-[50%]"
                                                />
                                            </td>
                                            <td className="py-4 border text-center">
                                                <input
                                                    type="number"
                                                    step="0.0001"
                                                    name="lower"
                                                    value={item.lower}
                                                    onChange={(e) =>
                                                        model.onSegmentChange(
                                                            e,
                                                            ind
                                                        )
                                                    }
                                                    className="px-2 py-2 text-gray-600 m-0 border border-gray-100 rounded-md outline-none w-[50%]"
                                                />
                                            </td>
                                            <td className="py-4 border text-center">
                                                <input
                                                    type="number"
                                                    step="0.0001"
                                                    name="saUpper"
                                                    value={item.saUpper}
                                                    onChange={(e) =>
                                                        model.onSegmentChange(
                                                            e,
                                                            ind
                                                        )
                                                    }
                                                    className="px-2 py-2 text-gray-600 m-0 border border-gray-100 rounded-md outline-none w-[50%]"
                                                />
                                            </td>
                                            <td className="py-4 border text-center">
                                                <input
                                                    type="number"
                                                    step="0.0001"
                                                    name="saLower"
                                                    value={item.saLower}
                                                    onChange={(e) =>
                                                        model.onSegmentChange(
                                                            e,
                                                            ind
                                                        )
                                                    }
                                                    className="px-2 py-2 text-gray-600 m-0 border border-gray-100 rounded-md outline-none w-[50%]"
                                                />
                                            </td>
                                            <td className="py-4 border text-center">
                                                <select
                                                    name="tool"
                                                    value={item.tool?.id}
                                                    onChange={(e) =>
                                                        model.onToolChange(
                                                            e,
                                                            ind
                                                        )
                                                    }
                                                    className="px-2 py-2 text-gray-600 m-0 border border-gray-100 rounded-md outline-none w-[50%]"
                                                >
                                                    <option value="">
                                                        Choose Tools
                                                    </option>
                                                    {model.tools.map((item) => (
                                                        <option
                                                            value={item.id}
                                                            key={item.id}
                                                        >
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="py-4 border text-center px-4">
                                                <button
                                                    onClick={(e) =>
                                                        model.onRemoveSegment(
                                                            e,
                                                            ind
                                                        )
                                                    }
                                                    className="w-6 h-6 border border-red-500 text-red-500 rounded-full text-center hover:scale-90"
                                                >
                                                    -
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </form>
                    {/* button plus for add new row */}
                    <div
                        onClick={model.onAddSegment}
                        className="flex justify-center items-center cursor-pointer hover:scale-95 duration-300 m-auto mt-5 w-11 h-11 border-4 border-sky-standart text-sky-standart rounded-full"
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
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <ModalDelete showModal={undefined} setShowModal={undefined} />
        </>
    );
};

export default SpecialAcept;
