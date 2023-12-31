import { Breadcrumbs } from "@common/components";
import SpecialAcept from "../components/addCavasity/SpecialAcept";
import { useInputMeasurementStd } from "./input-form-measurement-std-model";

const InputFormMeasurementView = () => {
  const model = useInputMeasurementStd();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs
        items={["Measurement Std.", model.id ? "Edit Data" : "Add Data"]}
      />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md">
        <div className="w-full py-[18px] px-8 flex justify-between items-center">
          <h1 className="font-[700] text-2xl">
            {model.id ? "Edit" : "Add"} Data
          </h1>
        </div>
        <div className="border-t border-[#D0D3D9] px-8 py-4">
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 text-start">
              <label className="font-[400]">Part Code - Part Name</label>
              <select
                name="id"
                value={model.measurementStd.part?.id || ""}
                onChange={model.onPartChange}
                className="w-full outline-none border border-[#D0D3D9] rounded-md text-gray-600 px-4 py-2 text-sm"
              >
                <option value={""} disabled>
                  Select part
                </option>
                {model.parts.map((item) => (
                  <option
                    value={`${item.id}`}
                    key={item.id}
                  >{`${item.partName} - ${item.partCode}`}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-3 text-start">
              <label className="font-[400]">Model</label>
              <input
                value={model.measurementStd.part?.customerModel}
                className="w-full outline-none bg-gray-50 border-[#D0D3D9] rounded-md text-gray-400 px-4 py-2 text-sm"
                readOnly
              />
            </div>
          </form>
        </div>
      </div>

      {/* tabel */}
      <SpecialAcept model={model} />

      <div className="w-full py-5 px-5 flex gap-3 border border-[#D0D3D9] rounded-md mt-4">
        <button
          type="button"
          // disabled={model.measurementStd.part? false : true}
          onClick={(e) => model.onSave(e)}
          className="text-sm rounded-md text-center border h-[] w-[180px] font-[600] text-[#FFFFFF] bg-[#1BBDD4] border-[#1BBDD4]"
        >
          Save
        </button>
        <button
          onClick={model.onCancel}
          className="text-sm rounded-md text-center border h-[40px] w-[180px] font-[600] bg-[#FFFFFF] text-[#667085] border-[#667085]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default InputFormMeasurementView;
