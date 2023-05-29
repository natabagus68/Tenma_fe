import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import { useColorForm } from "./color-form-view-model";

const ColorFormView = () => {
    const colorForm = useColorForm();
    return (
        <>
            <div>
                <Breadcrumbs
                    items={["Color", colorForm.id ? "Edit Data" : "Add Data"]}
                />
            </div>
            <div className="m-auto w-full border border-gray-100  rounded-lg pb-6">
                <div className="w-full py-7 px-8 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-open-sans">
                        { colorForm.id? "Edit Data" : "Add Data"}
                    </h1>
                </div>
                <div className="border-t border-gray-100 pt-5 px-8 pb-80">
                    <form onSubmit={colorForm.onSave}>
                        <div className="flex flex-col gap-2">
                            <label className="text-[#514E4E] font-open-sans">ID Color</label>
                            <input
                                type="text"
                                name="idColor"
                                value={colorForm.color.idColor}
                                onChange={colorForm.onColorChange}
                                placeholder={'Input id color'}
                                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-800 font-open-sans font-600"
                            />
                        </div>
                        <div className="flex flex-col gap-3 mt-3">
                            <label className="text-[#514E4E] font-open-sans">
                                Material Color
                            </label>
                            <input
                                type="text"
                                name="materialColor"
                                value={colorForm.color.materialColor}
                                onChange={colorForm.onColorChange}
                                placeholder={'Input material color'}
                                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-800 font-open-sans font-600"
                            />
                        </div>
                        <div className="flex gap-4 mt-6">
                            <button
                                type="submit"
                                className="px-12 py-3 rounded-lg bg-[#1BBDD4] text-white items-center flex justify-center"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                role="button"
                                className="px-12 py-3 rounded-lg border  text-[#667085] items-center flex justify-center "
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
