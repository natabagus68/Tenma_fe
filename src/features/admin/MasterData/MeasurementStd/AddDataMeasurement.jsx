import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../../common/components";
import ModalNominal from "./components/addCavasity/ModalNominal";
import SpecialAcept from "./components/addCavasity/SpecialAcept";

const AddDataMeasurement = () => {
    const navigate = useNavigate();
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

            {/* tabel */}
            <SpecialAcept />

            <div className="w-full py-5 px-5 flex gap-3 border-2 boder-gray-50 rounded-xl mt-11">
                <button className="py-2 px-20 text-xl rounded-md  text-center text-white bg-sky-standart ">
                    Save
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("../");
                    }}
                    className="py-2 px-20 text-xl rounded-md  text-center text-gray-400 bg-white border-2 border-gray-100 "
                >
                    Cancel
                </button>
            </div>
        </>
    );
};

export default AddDataMeasurement;
