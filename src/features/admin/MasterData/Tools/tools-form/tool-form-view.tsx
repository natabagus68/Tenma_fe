import { Breadcrumbs } from "@common/components";
import { useToolForm } from "./tool-form-view-model";

const ToolFormView = () => {
  const toolForm = useToolForm();
  return (
    <div className="font-open-sans text-[#514E4E]">
      <Breadcrumbs items={["Tools", toolForm.id ? "Edit Data" : "Add Data"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl">{toolForm.id ? "Edit Data" : "Add Data"}</h1>
        </div>
        <div className="border-t border-[#D0D3D9] text-[#514E4E] px-8 py-6">
          <form onSubmit={toolForm.onSave}>
            <div className="flex flex-col gap-3 mb-2">
              <label className="font-[400]">ID Tool</label>
              <input type="text" name="idTool"
                value={toolForm.tool.idTool}
                onChange={toolForm.onToolChange}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 font-[400] text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input id tools"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-[400]">Tools Code</label>
              <input type="text" name="toolCode"
                value={toolForm.tool.toolCode}
                onChange={toolForm.onToolChange}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 font-[400] text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input tools code"
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label className="font-[400]">Name</label>
              <input type="text" name="name"
                value={toolForm.tool.name}
                onChange={toolForm.onToolChange}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 font-[400] text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input name"
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label className="font-[400]">Address</label>
              <input type="text" name="address"
                value={toolForm.tool.address}
                onChange={toolForm.onToolChange}
                className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 font-[400] text-sm placeholder:text-[#B8B6B6]"
                placeholder="Input address"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button type="submit"
                className="w-[180px] h-[46px] rounded-[4px] border border-[#1BBDD4] bg-[#1BBDD4] font-[600] text-white flex items-center justify-center"
              >Save</button>
              <button type="button" role="button"
                className="w-[180px] h-[46px] rounded-[4px] border border-[#667085] text-[#667085] font-[600] flex items-center justify-center"
                onClick={() => toolForm.onCancel()}
              >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToolFormView;