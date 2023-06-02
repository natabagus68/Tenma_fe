import React from "react";
import { Breadcrumbs } from "../../../../common/components";
import { useDailyProgressCheckCreate } from "./daily-progress-check-create-view-model";
import ModalConfirm from "@common/components/Modal/ModalConfirm";

const DailyProgressCheckCreateView = () => {
  const dailyProgressCheckCreate = useDailyProgressCheckCreate();
  return (
    <>
      <div>
        <Breadcrumbs items={["Daily Process Check", "Add Data"]} />
      </div>
      <div className="m-auto w-full border-2 border-[#D0D3D9]  rounded-lg pb-6">
        <div className="w-full py-5 px-12 flex justify-between items-center">
          <h1 className="font-[700] text-2xl text-[#9A9898] font-sans">
            Add Data
          </h1>
        </div>
        <div className="border-t-2 border-[#D0D3D9] pt-10 px-5 pb-80">
          <form onSubmit={dailyProgressCheckCreate.onSave}>
            <div className="flex flex-col gap-3">
              <label className="text-gray-600">Prt Name - Part Code</label>
              <select
                name="partId"
                value={dailyProgressCheckCreate.dailyProgressCheck.partId}
                onChange={dailyProgressCheckCreate.onDailyProgressCheckChange}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-md text-[#9A9898] font-mono bg-white"
                required
              >
                <option value="" disabled>
                  Choose Part
                </option>
                {dailyProgressCheckCreate.parts.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.partName} - {item.partCode}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label className="text-gray-600">Model</label>
              <input
                type="text"
                className="w-[80%] bg-[#D0D3D9] border border-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-md text-[#9A9898] font-mono"
                value={dailyProgressCheckCreate.model}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label className="text-gray-600">ID Machine - No Machine</label>
              <select
                name="machineId"
                value={dailyProgressCheckCreate.dailyProgressCheck.machineId}
                onChange={dailyProgressCheckCreate.onDailyProgressCheckChange}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-md text-[#9A9898] font-mono bg-white"
                required
              >
                <option value="" disabled>
                  Choose Machine
                </option>
                {dailyProgressCheckCreate.machines.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.idMachine} - {item.noMachine}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label className="text-gray-600">Shift</label>
              <input
                name="shift"
                value={dailyProgressCheckCreate.dailyProgressCheck.shift}
                onChange={dailyProgressCheckCreate.onDailyProgressCheckChange}
                type="text"
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-md text-[#9A9898] font-mono"
                required
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
                onClick={dailyProgressCheckCreate.onCancel}
                className="px-12 py-3 rounded-lg border  text-black items-center flex justify-center hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <ModalConfirm
        showModal={dailyProgressCheckCreate.saveConfirmShow}
        setShowModal={dailyProgressCheckCreate.setSaveConfirmShow}
        onConfirm={dailyProgressCheckCreate.onConfirmSave}
      />
    </>
  );
  const dailyProgressCheckCreate = useDailyProgressCheckCreate();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["Daily Process Check", "Add Data"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl">Add Data</h1>
        </div>
        <div className="border-t border-[#D0D3D9] px-8 py-6">
          <form onSubmit={dailyProgressCheckCreate.onSave}>
            <div className="flex flex-col gap-3">
              <label className="">Part Code - Part Name</label>
              <select
                name="partId"
                value={dailyProgressCheckCreate.dailyProgressCheck.partId}
                onChange={dailyProgressCheckCreate.onDailyProgressCheckChange}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-[#9A9898] bg-white text-sm"
                required
              >
                <option value="" disabled>
                  Select Part
                </option>
                {dailyProgressCheckCreate.parts.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.partName} - {item.partCode}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label className="text-gray-600">Model</label>
              <input
                type="text"
                className="w-[80%] bg-[#D0D3D9] border border-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-[#9A9898]"
                value={dailyProgressCheckCreate.model}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label className="text-gray-600">ID Machine - No Machine</label>
              <select
                name="machineId"
                value={dailyProgressCheckCreate.dailyProgressCheck.machineId}
                onChange={dailyProgressCheckCreate.onDailyProgressCheckChange}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-[#9A9898] bg-white text-sm"
                required
              >
                <option value="" disabled>
                  Select Machine
                </option>
                {dailyProgressCheckCreate.machines.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.idMachine} - {item.noMachine}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label>Shift</label>
              <input
                name="shift"
                type="text"
                value={dailyProgressCheckCreate.dailyProgressCheck.shift}
                onChange={dailyProgressCheckCreate.onDailyProgressCheckChange}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-sm placeholder:text-[#9A9898]"
                placeholder="Input Shift"
                required
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button
                type="submit"
                className="rounded-[4px] bg-[#D0D3D9] text-[#B8B6B6] w-[180px] h-[46px] text-sm font-[600] "
              >
                Save
              </button>
              <button
                type="button"
                role="button"
                onClick={dailyProgressCheckCreate.onCancel}
                className="rounded-[4px] border border-[#667085] bg-[#FFFFFF] text-[#667085] w-[180px] h-[46px] text-sm font-[600]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <ModalConfirm
        showModal={dailyProgressCheckCreate.saveConfirmShow}
        setShowModal={dailyProgressCheckCreate.setSaveConfirmShow}
        onConfirm={dailyProgressCheckCreate.onConfirmSave}
      />
    </div>
  );
};

export default DailyProgressCheckCreateView;

