import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../../../common/components";
import useInputFormAccess from "./input-form-user-access-view-modal";

const InputFormUserAccess = () => {
  const model = useInputFormAccess();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["User", "Account", model.id ? "Edit Role" : "Add New Role"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-lg">
        <div className="w-full py-7 px-8 flex justify-between items-center">
          <h1 className="font-[700] text-2xl">{model.id ? "Edit Role" : "Add New Role"}</h1>
        </div>
        <div className="w-full border-t border-[#D0D3D9] py-5 px-8 pb-80">
          <form>
            <div className="flex flex-col gap-3 ">
              <label className="">Role Name</label>
              <input
                type="text"
                name="name"
                value={model.access.name}
                onChange={(e) => model.onChangeInput(e)}
                placeholder="Input new role"
                className="w-[80%]  border border-gray-200 py-2 px-3 text-[#B8B6B6] rounded-md outline-none font-400"
                autoComplete="off"
              />
            </div>
            <div className="flex justify-start w-full gap-5 items-center mt-5">
              <button onClick={(e) => model.onSave(e)}
                className="border-sky-standart bg-sky-standart text-white text-center rounded-[4px] w-[180px] h-[46px] text-sm font-[600]"
              >Save</button>
              <button onClick={model.onCancel}
                className="border text-center rounded-[4px] w-[180px] h-[46px] text-sm font-[600]"
              >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputFormUserAccess;