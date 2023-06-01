import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import { useMachineForm } from "./machine-form-view-model";

const MachineFormView = () => {
  const machineForm = useMachineForm();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["Machine", machineForm.id ? "Edit Data" : "Add Data"]} />
      <div className="m-auto w-full border border-[#D0D3D9]">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl">{machineForm.id ? "Edit Data" : "Add Data"}</h1>
        </div>
        <div className="border-t border-[#D0D3D9] px-8 py-6">
          <form onSubmit={machineForm.onSave}>
            <div className="flex flex-col gap-3">
              <label className="mb-2 font-[400]">ID Machine</label>
              <input type="text" name="idMachine"
                value={machineForm.machine.idMachine}
                onChange={machineForm.onMachineChange}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input id machine"
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label className="font-[400]">No Machine</label>
              <input type="text" name="noMachine"
                value={machineForm.machine.noMachine}
                onChange={machineForm.onMachineChange}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input No. Machine"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button type="submit" className="w-[180px] h-[46px] border border-[#1BBDD4] bg-[#1BBDD4] rounded-[4px] text-white flex items-center justify-center"
              >Save</button>
              <button className="w-[180px] h-[46px] border-[#667085] text-[#667085] rounded-[4px] border flex items-center justify-center"
                onClick={machineForm.onCancel}
              >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MachineFormView;