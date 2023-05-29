import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import useCustomerModelForm from "./customer-model-form-view-model";
const InputFormCustomerModel = () => {
  const customerModel = useCustomerModelForm();
  return (
    <div>
      <Breadcrumbs items={[ "Customer Model", customerModel.id ? "Edit Data" : "Add Data", ]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl text-[#514E4E]">{customerModel.id ? "Edit Data" : "Add Data"}</h1>
        </div>
        <div className="border-t border-[#D0D3D9] text-[#514E4E]">
          <form onSubmit={customerModel.onSave}>
            <div className="flex flex-col gap-3 px-8 py-6">
              <label className="mb-2 font-[600]">Customer Model Name</label>
              <input type="text" name="name"
                value={customerModel.customerModel.name}
                onChange={customerModel.onInputChange}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-5 py-2"
              />
            </div>
            <div className="flex gap-3 px-8 pb-6">
              <button type="submit"
                className="h-[46px] w-[180px] bg-[#1BBDD4] border-[#1BBDD4] rounded-[4px] text-white flex justify-center items-center font-[600]"
              >Save</button>
              <button className="h-[46px] w-[180px] border border-[#667085] rounded-[4px] flex justify-center items-center text-[#667085] font-[600]"
                onClick={customerModel.onCancel}
              >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputFormCustomerModel;
