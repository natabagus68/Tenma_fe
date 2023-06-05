import React from "react";
import { Breadcrumbs } from "../../../../common/components";
import { useDailyProgressCheckCreate } from "./daily-progress-check-create-view-model";
import ModalConfirm from "@common/components/Modal/ModalConfirm";

const DailyProgressCheckCreateView = () => {
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
                className="rounded-[4px] bg-[#1BBDD4] text-white w-[180px] h-[46px] text-sm font-[600] "
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

