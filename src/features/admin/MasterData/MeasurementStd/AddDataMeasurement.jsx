import React, { useState } from "react";
import { Breadcrumbs } from "../../../../common/components";

const AddDataMeasurement = () => {
    const [drop, setDrop] = useState(false);
    return (
        <>
            <div>
                <Breadcrumbs items={["Measurement Std", "Add Data"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Measurement Std.
                    </h1>
                </div>
                <div className="border-t-2 border-gray-100 py-14 px-8">
                    <form className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3 text-start">
                            <label>Part Name - Part Code</label>
                            <input
                                type="text"
                                className="w-full outline-none border border-gray-100 rounded-md text-gray-600 font-rubik px-4 py-2"
                                autoComplete="off"
                            />
                        </div>
                        <div className="flex flex-col gap-3 text-start">
                            <label>Part Name - Part Code</label>
                            <select className="w-full outline-none border-gray-100 rounded-md text-gray-400 font-rubik px-4 py-2">
                                <option value="1">1</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>

            <div className="relative  mt-5 w-[14%] m-auto">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setDrop(!drop);
                    }}
                    className="flex gap-2 w-full text-center item-center justify-center text-white bg-gray-700 py-3 px-8 rounded-md m-auto "
                >
                    + &nbsp; Add Segment
                    {drop ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 m-auto"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 m-auto"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    )}
                </button>
                {drop ? (
                    <div className="w-full rounded-md  border-gray-100 shadow-xl mt-3 animation duration-500">
                        <ul className="px-3">
                            <li className="py-3 border-b border-gray-50">
                                Special Accept
                            </li>
                            <li className="py-3">PAC</li>
                        </ul>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default AddDataMeasurement;
