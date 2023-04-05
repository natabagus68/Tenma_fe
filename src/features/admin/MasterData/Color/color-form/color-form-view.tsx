import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import { useColorForm } from "./color-form-view-model";

const ColorFormView = () => {
    const colorForm = useColorForm();
    return (
        <>
            <div>
                <Breadcrumbs
                    items={["Color", colorForm.id ? "Edit" : "Add Data"]}
                />
            </div>
            <div className="m-auto w-full border-2 border-gray-100  rounded-lg pb-6">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Add Data
                    </h1>
                </div>
                <div className="border-t-2 border-gray-100 pt-10 px-5 pb-80">
                    <form onSubmit={colorForm.onSave}>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-600">ID Color</label>
                            <input
                                type="text"
                                name="idColor"
                                value={colorForm.color.idColor}
                                onChange={colorForm.onColorChange}
                                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        <div className="flex flex-col gap-3 mt-3">
                            <label className="text-gray-600">
                                Material Color
                            </label>
                            <input
                                type="text"
                                name="materialColor"
                                value={colorForm.color.materialColor}
                                onChange={colorForm.onColorChange}
                                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            />
                        </div>
                        <div className="flex gap-4 mt-6">
                            <button
                                type="submit"
                                className="px-12 py-3 rounded-lg bg-gray-600 text-white items-center flex justify-center hover:bg-gray-800"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                role="button"
                                className="px-12 py-3 rounded-lg border  text-black items-center flex justify-center hover:bg-gray-300"
                                onClick={(e) => colorForm.onCancel()}
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

export default ColorFormView;
