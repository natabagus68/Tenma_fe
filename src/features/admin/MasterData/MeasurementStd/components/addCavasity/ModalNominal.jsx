import { useInputMeasurementStd } from "../../input-form-measurement-std/input-form-measurement-std-model";

const ModalNominal = ({ model = useInputMeasurementStd() }) => {
  console.log(model.tempSegment.nominal);
  if (model.nominalModalShow) {
    return (
      <>
        <div className="w-[40%] h-[50%] mx-auto flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#FFFFFF] top-[32.5%] p-6 rounded-xl">
          <div className="flex flex-col items-center justify-center mt-2">
            <h1 className="text-2xl mb-1 font-[600] text-[#313030]">
              Add Nominal
            </h1>
            <p className="w-2/3 text-center mb-8 text-[#514E4E]">
              Add Nominal Parameter and input value except: Absolute (Good)
            </p>
          </div>
          <form className="w-full mb-8 ml-8">
            <div className="flex items-center mb-4">
              <label className="w-[25%] font-[600] text-[#514E4E]">
                Nominal type
              </label>
              <select
                name="nominal"
                value={model.tempSegment.nominal}
                onChange={model.onNominalChange}
                className="w-[50%] py-3 px-5 border outline-none rounded-md bg-[#667085] border-[#667085] text-[#FFFFFF] font-[400]"
              >
                <option value={""} disabled>
                  Select nominal type
                </option>
                {[
                  "Absolute (Good)",
                  "OR LESS",
                  "OR OVER",
                  "Decimal",
                  "Decimal with limit",
                  "Free text",
                  "Free text with limit",
                  "Free text with OR LESS",
                  "Free text with OR OVER",
                ].map((item, i) => {
                  return (
                    <option value={item} key={i}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex items-center">
              <label className="w-[25%] font-[600] text-[#514E4E]">
                Nominal value
              </label>
              <input
                type="text"
                name="nominalValue"
                value={model.tempSegment.nominalValue}
                onChange={model.onNominalChange}
                placeholder={"Input nominal value"}
                className="w-[50%] py-3 px-5 border border-gray-100 outline-none rounded-md font-[400] placeholder:text-[#B8B6B6]"
              />
            </div>
          </form>
          <div className="flex mx-8 gap-3">
            <button
              className="bg-sky-standart border border-sky-standart w-full text-white active:bg-red-600 text-sm px-12 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={model.onSaveNominalChange}
            >
              Save Data
            </button>
            <button
              className="w-full background-transparent text-[#514E4E] border border-[#B8B6B6] px-12 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-md"
              type="button"
              onClick={model.onCancelNominalChange}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  } else return null;
};

export default ModalNominal;

