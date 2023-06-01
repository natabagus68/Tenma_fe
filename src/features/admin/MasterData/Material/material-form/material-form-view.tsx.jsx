import { Breadcrumbs } from "@common/components";
import { useMaterialForm } from "./material-form-view-model";

const MaterialFormView = () => {
  const materialForm = useMaterialForm();
  return (
    <div className="font-open-sans text-[#514E4E]">
      <Breadcrumbs items={["Material", materialForm.id ? "Edit Data" : "Add Data"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md">
        <div className="w-full py-7 px-8 flex justify-between items-center">
          <h1 className="font-[700] text-2xl">{materialForm.id ? "Edit Data" : "Add Data"}</h1>
        </div>
        <form className="border-t border-[#D0D3D9] px-8 py-6">
          <div className="flex flex-col gap-2">
            <label className="text-[#514E4E] font-[400]">ID Material</label>
            <input type="text" name={"idMaterial"}
              value={materialForm.material.idMaterial}
              onChange={materialForm.onMaterialChange}
              className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 text-md text-sm font-400"
              placeholder={"Input id material"}
              />
          </div>
          <div className="flex border-[#D0D3D9]  flex-col gap-2 mt-4">
            <label className="text-[#514E4E] font-[400]">Material</label>
            <input type="text" name={"name"}
              value={materialForm.material.name}
              onChange={materialForm.onMaterialChange}
              className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 text-md text-sm font-400"
              placeholder={"Input material"}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-[#514E4E] font-[400]">Material Detail</label>
            <input type="text" name={"materialDetail"}
              value={materialForm.material.materialDetail}
              onChange={materialForm.onMaterialChange}
              className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 text-md text-sm font-400"
              placeholder={"Input material detail"}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-[#514E4E] font-[400]">Material Color</label>
            <select type="text" name={"colorId"}
              value={materialForm.material.colorId}
              onChange={materialForm.onMaterialChange}
              className="w-[80%] border border-[#D0D3D9] rounded-lg outline-none px-4 py-2 text-md text-sm font-400"
            >
              <option value="" disabled>
                <span className="bg-gray-100">Select material color</span>
              </option>
              {materialForm.colors.data.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.idColor} - {item.materialColor}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-4 mt-7">
            <button
              onClick={materialForm.onSave}
              className="w-[180px] h-[46px] rounded-[4px] bg-[#D0D3D9] text-[#B8B6B6] items-center flex justify-center font-[600] text-sm"
            >Save</button>
            <button
              className="w-[180px] h-[46px] rounded-[4px] border text-[#667085] items-center flex justify-center font-[600] text-sm"
              type="button"
              role="button"
              onClick={materialForm.onCancel}
            >Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MaterialFormView;