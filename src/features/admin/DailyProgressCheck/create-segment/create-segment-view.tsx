import React from "react";
import { Breadcrumbs } from "../../../../common/components";
import { useCreateSegment } from "./create-segment-model";
import ModalConfirm from "@common/components/Modal/ModalConfirm";

const CreateSegmentView = () => {
    const model = useCreateSegment();
    return (
        <>
            <div>
                <Breadcrumbs
                    items={["Daily Progress Check", "Details 3D", "Add Data"]}
                />
            </div>
            <div className="m-auto w-full border-2 border-gray-100  rounded-lg pb-6">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Add Segment Data
                    </h1>
                </div>
                <div className="border-t-2 border-gray-100 pt-10 px-5 pb-80">
                    <form onSubmit={model.onSave}>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-600">Tools Code</label>
                            <select
                                value={model.segment.tool?.id || ""}
                                onChange={model.onToolChange}
                                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
                            >
                                <option value="">Choose Tool</option>
                                {model.tools.map((item) => (
                                    <option value={item.id} key={item.id}>
                                        {item.toolCode}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {model.segment.segments.map((item, i) => (
                            <div key={i} className="flex flex-col mt-5 gap-3">
                                <label className="text-gray-600">Segment</label>
                                <div className="inline-flex bg-gray-100 rounded-md border border-gray-200  w-[80%] ">
                                    <label
                                        htmlFor={`file${i}`}
                                        className="inline bg-gray-200 py-2 px-4 text-gray-600 select-none"
                                    >
                                        {item?.name ? "Update" : "Browser"}
                                    </label>
                                    <input
                                        type="file"
                                        id={`file${i}`}
                                        className="hidden"
                                        onChange={(e) =>
                                            model.onUpdateSegment(e, i)
                                        }
                                    />
                                    <div className=" border-transparent bg-white rounded-r-md w-full py-1 text-gray-600 px-4 focus:outline-none">
                                        {item?.name || "no file choosen"}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="mt-5">
                            <button
                                type="button"
                                role="button"
                                className="px-4 py-3 rounded-md bg-[#1BBDD4] text-center text-white"
                                onClick={model.onAddSegment}
                            >
                                + Add Segment
                            </button>
                        </div>

                        <div className="flex gap-4 mt-6">
                            <button
                                type="submit"
                                className="px-12 py-3 rounded-lg bg-gray-600 text-white items-center flex justify-center hover:bg-gray-800"
                            >
                                Save
                            </button>
                            <button
                                className="px-12 py-3 rounded-lg border  text-black items-center flex justify-center hover:bg-gray-300"
                                type="button"
                                role="button"
                                onClick={model.onCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ModalConfirm
                showModal={model.saveConfirmShow}
                setShowModal={model.setSaveConfirmShow}
                onConfirm={model.onConfirmSave}
            />
        </>
    );
};

export default CreateSegmentView;
