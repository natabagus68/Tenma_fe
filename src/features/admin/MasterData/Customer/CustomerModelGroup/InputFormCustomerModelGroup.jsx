import { Breadcrumbs } from "@common/components";
import useFormCustomerModelGroup from "./customer-model-group-form-view-model";

const InputFormCustomerModelGroup = () => {
  const cmgForm = useFormCustomerModelGroup();
  return (
    <div>
      <Breadcrumbs items={[ "Customer Model Group", cmgForm.id ? "Edit Data" : "Add Data", ]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-lg text-[#514E4E]">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl font-sans">{cmgForm.id ? "Edit Data" : "Add Data"}</h1>
        </div>
        <div className="border-t border-[#D0D3D9] text-[#514E4E] px-8 py-6">
          <form onSubmit={cmgForm.onSave}>
            <div className="flex flex-col gap-3">
              <label className="mb-2 font-[600]">Customer Name</label>
              <input
                type="text"
                name="name"
                value={cmgForm.customerModelGroup.name}
                onChange={cmgForm.inputOnChange}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-5 py-2 text-md"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button className="w-[180px] h-[46px] bg-[#1BBDD4] border-[#1BBDD4] rounded-[4px] text-white flex items-center justify-center font-[600]"
              >Save</button>
              <button
                type="submit"
                className="w-[180px] h-[46px] rounded-[4px] border text-[#513E4E] flex items-center justify-center font-[600]"
                onClick={cmgForm.onCancel}
              >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputFormCustomerModelGroup;
