import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../common/components";

const EditDataDailyProcessCheck = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <Breadcrumbs items={["Daily Progress Check", "Edit Data"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Edit Data
                    </h1>
                </div>

                <div className="border-t-2 border-gray-100 pr-52 pl-4 pt-8">
                    <form className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">
                                Part Name - Part Code
                            </label>
                            <select className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none text-gray-700">
                                <option value="" selected>
                                    Housing Upper SC ENN8.5 - A0B1C044
                                </option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">Model</label>
                            <select className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none text-gray-700">
                                <option value="" selected>
                                    Ajdni
                                </option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">
                                ID Machine - No Machine
                            </label>
                            <select className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none text-gray-700">
                                <option value="" selected>
                                    H0B1C044
                                </option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">
                                Part Weight QIS
                            </label>
                            <input
                                type="date"
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">
                                Lot Production
                            </label>
                            <input
                                type="text"
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">Shift</label>
                            <input
                                type="text"
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">PIC</label>
                            <input
                                type="text"
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">Label No.</label>
                            <input
                                type="text"
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">
                                Accept Sample (Time)
                            </label>
                            <input
                                type="time"
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">
                                Measure Sample (Time)
                            </label>
                            <input
                                type="time"
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">
                                Weight Part{" "}
                            </label>
                            <input
                                type="text"
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex gap-5 justify-start">
                            <button className="py-2 px-14 bg-gray-600 rounded-md text-white">
                                Save
                            </button>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate(-1);
                                }}
                                className="py-2 px-14 rounded-md text-gray-700 border border-gray-100"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditDataDailyProcessCheck;
