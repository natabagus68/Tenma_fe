import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../../common/components";
import { useDailyProgressCheckEdit } from "./daily-progress-check-edit-model";
import moment from "moment";
import ModalConfirm from "@common/components/Modal/ModalConfirm";

const DailyProgressCheckEditView = () => {
    const model = useDailyProgressCheckEdit();
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
                    <form
                        onSubmit={model.onSave}
                        className="flex flex-col gap-3"
                    >
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">
                                Part Name - Part Code
                            </label>
                            <select
                                name="partId"
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none text-gray-700"
                                value={model.dailyProgressCheck.partId || ""}
                                onChange={model.onPartChange}
                            >
                                <option value="" disabled>
                                    Choose Part
                                </option>
                                {model.parts.map((item) => (
                                    <option value={item.id}>
                                        {item.partName} - {item.partCode}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">Model</label>
                            <input
                                readOnly
                                value={
                                    model.dailyProgressCheck.part?.customerModel
                                }
                                className="px-3 py-2 w-full bg-gray-50 border border-gray-100 rounded-md outline-none text-gray-700"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">
                                ID Machine - No Machine
                            </label>
                            <select
                                value={model.dailyProgressCheck.machineId || ""}
                                onChange={model.onMachineChange}
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none text-gray-700"
                            >
                                {model.machines.map((item) => (
                                    <option value={item.id} key={item.id}>
                                        {item.idMachine} - {item.noMachine}
                                    </option>
                                ))}
                                <option value="" disabled>
                                    Choose Machine
                                </option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">
                                Inspection Date
                            </label>
                            <input
                                type="date"
                                name={`inspectionDate`}
                                value={moment(
                                    model.dailyProgressCheck.inspectionDate
                                ).format("YYYY-MM-DD")}
                                onChange={model.onDailyProgressCheckChange}
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">
                                Part Weight QIS
                            </label>
                            <input
                                name={`weightPart`}
                                value={model.dailyProgressCheck.weightPart}
                                onChange={model.onDailyProgressCheckChange}
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">
                                Lot Production
                            </label>
                            <input
                                type="text"
                                name={`lotProduction`}
                                value={model.dailyProgressCheck.lotProduction}
                                onChange={model.onDailyProgressCheckChange}
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">Shift</label>
                            <input
                                type="text"
                                name={`shift`}
                                value={model.dailyProgressCheck.shift}
                                onChange={model.onDailyProgressCheckChange}
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">PIC</label>
                            <input
                                type="text"
                                value={model.dailyProgressCheck.pic?.name}
                                onChange={model.onPicChange}
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">Label No.</label>
                            <input
                                type="number"
                                name="labelNo"
                                value={model.dailyProgressCheck.labelNo}
                                onChange={model.onDailyProgressCheckChange}
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">
                                Accept Sample (Time)
                            </label>
                            <input
                                type="time"
                                name="acceptSampleTime"
                                value={
                                    model.dailyProgressCheck.acceptSampleTime?.toString() ||
                                    ""
                                }
                                onChange={model.onDailyProgressCheckChange}
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">
                                Measure Sample (Time)
                            </label>
                            <input
                                type="time"
                                name="measureSampleTime"
                                value={
                                    model.dailyProgressCheck.measureSampleTime?.toString() ||
                                    ""
                                }
                                onChange={model.onDailyProgressCheckChange}
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="text-gray-700">Weight Part</label>
                            <input
                                type="number"
                                step="0.0001"
                                name="actWeightPart"
                                value={model.dailyProgressCheck.actWeightPart}
                                onChange={model.onDailyProgressCheckChange}
                                className="px-3 py-2 w-full border border-gray-100 rounded-md outline-none"
                            />
                        </div>
                        <div className="flex gap-5 justify-start">
                            <button
                                type="submit"
                                className="py-2 px-14 bg-gray-600 rounded-md text-white"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                role="button"
                                onClick={model.onCancel}
                                className="py-2 px-14 rounded-md text-gray-700 border border-gray-100"
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

export default DailyProgressCheckEditView;
