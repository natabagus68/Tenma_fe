import React from "react";
import { useInputMeasurementStd } from "../../input-form-measurement-std/input-form-measurement-std-model";

const ModalNominal = ({ model = useInputMeasurementStd() }) => {
    if (model.nominalModalShow) {
        return (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-20 pt-1">
                            {/*header*/}
                            <div className="flex items-center flex-col  justify-center p-5 rounded-t ">
                                <div className="w-full text-center">
                                    <h1 className="text-4xl">Add Nominal</h1>
                                    <div className="w-[80%] text-center m-auto mt-3">
                                        <p className="text-xl text-gray-500">
                                            Add Nominal Parameter and input
                                            value except: Absolute (Good)
                                        </p>
                                    </div>
                                    <div className="w-[90%] m-end">
                                        <form className="flex flex-col gap-3 mt-5">
                                            <div className="flex gap-5 ">
                                                <label className="text-md ">
                                                    Nominal type
                                                </label>
                                                <select
                                                    name="nominal"
                                                    value={
                                                        model.tempSegment
                                                            .nominal
                                                    }
                                                    onChange={
                                                        model.onNominalChange
                                                    }
                                                    className="w-full py-1 px-6 border border-gray-100 outline-none rounded-md"
                                                >
                                                    <option value={""} disabled>
                                                        Choose Nominal Type
                                                    </option>
                                                    {[
                                                        "Absolute (Good)",
                                                        "ORR LESS",
                                                        "ORR OVER",
                                                        "Decimal",
                                                        "Decimal with limit",
                                                        "Free text",
                                                        "Free tex with limit",
                                                        "Free text with ORR LESS",
                                                        "Free text with ORR OVER",
                                                    ].map((item, i) => {
                                                        return (
                                                            <option
                                                                value={item}
                                                                key={i}
                                                            >
                                                                {item}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                            <div className="flex gap-5 justify-end">
                                                <label className="text-md">
                                                    Nominal value
                                                </label>
                                                <input
                                                    type="text"
                                                    name="nominalValue"
                                                    value={
                                                        model.tempSegment
                                                            .nominalValue
                                                    }
                                                    onChange={
                                                        model.onNominalChange
                                                    }
                                                    className="w-full text-gray-600 py-1 px-6 border border-gray-100 outline-none rounded-md"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-center p-6 rounded-b gap-3">
                                <button
                                    className="bg-sky-standart w-full text-white active:bg-red-600  uppercase text-sm px-12 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={model.onSaveNominalChange}
                                >
                                    Save Data
                                </button>
                                <button
                                    className="text-gray-600 w-full  background-transparent  uppercase px-12 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-gray-100 rounded-md"
                                    type="button"
                                    onClick={model.onCancelNominalChange}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>7
            </>
        );
    } else return null;
};

export default ModalNominal;
