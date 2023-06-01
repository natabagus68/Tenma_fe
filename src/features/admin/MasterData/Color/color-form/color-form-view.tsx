import { Breadcrumbs } from "@common/components";
import { useColorForm } from "./color-form-view-model";

const ColorFormView = () => {
  const colorForm = useColorForm();
  return (
    <div className="font-open-sans text-[#514E4E]">
      <Breadcrumbs items={["Color", colorForm.id ? "Edit Data" : "Add Data"]} />
      <div className="m-auto w-full border border-gray-100 rounded-lg">
        <div className="w-full py-7 px-8 flex justify-between items-center">
          <h1 className="font-[700] text-2xl">{colorForm.id ? "Edit Data" : "Add Data"}</h1>
        </div>
        <div className="border-t border-gray-100 pt-5 px-8 pb-80">
          <form onSubmit={colorForm.onSave}>
            <div className="flex flex-col gap-2">
              <label className="font-[400]">ID Color</label>
              <input type="text" name="idColor"
                value={colorForm.color.idColor}
                onChange={colorForm.onColorChange}
                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 font-open-sans font-[400]"
                placeholder={"Input id color"}
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label className="font-[400]">Material Color</label>
              <input type="text" name="materialColor"
                value={colorForm.color.materialColor}
                onChange={colorForm.onColorChange}
                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 font-open-sans font-[400]"
                placeholder={"Input material color"}
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button
                type="submit"
                className="w-[180px] h-[46px] rounded-[4px] bg-[#D0D3D9] text-[#B8B6B6] items-center flex justify-center font-[600]"
              >Save</button>
              <button
                type="button"
                role="button"
                className="w-[180px] h-[46px] rounded-[4px] border text-[#667085] items-center flex justify-center font-[600]"
                onClick={(e) => colorForm.onCancel()}
              >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ColorFormView;