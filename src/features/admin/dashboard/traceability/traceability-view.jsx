import { Breadcrumbs } from "@common/components";
import moment from "moment";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
const Traceability = () => {
    return (
        <>
            <div className="mb-4 w-full flex justify-between items-center">
                <Breadcrumbs items={["Dashboard", "Traceability"]} />
                <h1 className="font-bold">
                    {moment().format("dddd")}, {moment().format("DD MMM YYYY")}
                </h1>
            </div>
            {/* form */}
            <div className="w-full">
                <form className="w-full flex gap-5">
                    <div className="flex gap-3 items-center">
                        <label className="text-gray-600 ">Part Code</label>
                        <input
                            type="text"
                            placeholder="Trace..."
                            className="border border-gray-100 outline-none py-2 px-2 placeholder:text-center text-gray-700 placeholder:text-100 rounded-md"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="text-gray-600 ">PIC</label>
                        <select className="border border-gray-100 outline-none py-2 px-4 text-gray-700 rounded-md bg-transparent ">
                            <option disabled selected>
                                Select manpower
                            </option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="text-gray-600 ">Shift</label>
                        <select className="border border-gray-300 outline-none py-2 px-4 text-gray-700 rounded-md bg-transparent ">
                            <option disabled selected>
                                Select shit
                            </option>
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="text-gray-600 ">Shift</label>

                        <Datepicker
                            inputClassName={
                                "outline-none border border-gray-100 rounded-md px-3 py-2 text-sm placeholder:px-1 w-60"
                            }
                            placeholder="April 4, 2023 - May 3, 2023"
                            showShortcuts={true}
                        />
                    </div>
                    <div className="relative items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 absolute text-white top-2.5 left-3"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>

                        <button
                            type="submit"
                            className="px-11 py-2 bg-[#1BBDD4] text-center text-white rounded-md"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-full py-6 border border-gray-100 rounded-md mt-5">
                <div className="px-4 pb-4 border-b border-gray-100 flex justify-between">
                    <h1 className="font-semibold text-2xl text-gray-700">
                        Traceability
                    </h1>
                    <div className="flex">
                        <div className="px-5 border-r border-gray-600 flex gap-2 items-center ">
                            <p className="text-gray-400 text-sm">Total Part</p>
                            <span className="font-bold text-sm">123</span>
                        </div>
                        <div className="px-5 border-r border-gray-600 flex gap-2 items-center ">
                            <p className="text-gray-400 text-sm">
                                Progress Check
                            </p>
                            <span className="font-bold text-sm">92</span>
                        </div>
                        <div className="px-5 border-r border-gray-600 flex gap-2 items-center ">
                            <p className="text-gray-400 text-sm">3D Check</p>
                            <span className="font-bold text-sm">40</span>
                        </div>
                        <div className="px-5 flex gap-2 items-center ">
                            <p className="text-gray-400 text-sm">2D Check</p>
                            <span className="font-bold text-sm">12</span>
                        </div>
                    </div>
                </div>
                <table className="w-full">
                    <thead>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            Update at
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            Date
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            Part Code
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            Model
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            Shift
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            3D
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            2D
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            PIC
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            Judgement
                        </th>
                    </thead>
                    <tbody>
                        <td className="border-b border-gray-400 text-left px-6 py-4 ">
                            10:12
                        </td>
                        <td className="border-b border-gray-400 text-left px-6 py-4 ">
                            18/09/2016
                        </td>
                        <td className="border-b border-gray-400 text-left px-6 py-4 ">
                            A0B1C044
                        </td>
                        <td className="border-b border-gray-400 text-left px-6 py-4 ">
                            Clooney
                        </td>
                        <td className="border-b border-gray-400 text-left px-6 py-4 ">
                            Shift 1kkkkkkkkkkk
                        </td>
                        <td className="border-b border-gray-400 text-left px-6 py-4 ">
                            3D
                        </td>
                        <td className="border-b border-gray-400 text-left px-6 py-4 ">
                            2D
                        </td>
                        <td className="border-b border-gray-400 text-left px-6 py-4 ">
                            PIC
                        </td>
                        <td className="border-b border-gray-400 text-left px-6 py-4 ">
                            Judgement
                        </td>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Traceability;
