import ModalDelete from "@common/components/Modal/ModalDelete";
import ModalNominal from "./ModalNominal";
import { useInputMeasurementStd } from "../../input-form-measurement-std/input-form-measurement-std-model";
import { AddIcon } from "@common/components/icons/AddIcon";

const SpecialAcept = ({ model = useInputMeasurementStd() }) => {
  return (
    <>
      <ModalNominal model={model} />
        <div className="m-auto w-full border border-[#D0D3D9] rounded-md mt-4">
          <div className="py-[18px] px-8 flex justify-between items-center border-b border-[#D0D3D9]">
            <h1 className="font-[700] text-2xl font-open-sans">Segment</h1>
          </div>
          <form>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-4 border-[#D0D3D9] border-b border-r" colSpan={4}>Standart</th>
                  <th className="py-4 border-[#D0D3D9] border-b border-r bg-[#FDDDB3]" colSpan={2}>Special Accept</th>
                  <th className="py-4 border-[#D0D3D9] border-b border-r bg-[#D0D3D9]" rowSpan={2}>Tools</th>
                </tr>
                <tr>
                  <th className="py-4 border-r border-[#F0F1F3] bg-[#D0D3D9]">Character</th>
                  <th className="py-4 px-8 border-b border-r border-[#F0F1F3] bg-[#D0D3D9]">Nominal</th>
                  <th className="py-4 border-b border-r border-[#F0F1F3] bg-[#D0D3D9]">Upper</th>
                  <th className="py-4 border-[#D0D3D9] border-b border-r bg-[#D0D3D9]">Lower</th>
                  <th className="py-4 border-[#D0D3D9] border-b border-r bg-gray-50">Upper</th>
                  <th className="py-4 border-[#D0D3D9] border-b border-r bg-gray-50">Lower</th>
                </tr>
              </thead>
              <tbody>
                {
                  model.measurementStd.segments.map((item, ind) => (
                    <tr>
                      <td className="py-4 border border-[#D0D3D9] text-center text-sm">
                        <input
                          type="text"
                          name="character"
                          value={item.character}
                          onChange={(e) => model.onSegmentChange(e, ind)}
                          className="px-2 py-2 m-0 border border-[#D0D3D9] rounded-md outline-none w-[50%]"
                        />
                      </td>
                      <td className="py-4 px-4 border border-[#D0D3D9] text-center text-sm">
                        <button
                          type="button"
                          role="button"
                          onClick={(e) => model.onShowNominalModal(e, item)}
                          className="bg-sky-standart text-center w-[200px] py-3 rounded-md text-[#FFFFFF] text-sm"
                        >
                          {item.nominal || <span className="block">Choose Nominal</span>}
                        </button>
                      </td>
                      <td className="py-4 border border-[#D0D3D9] text-center text-sm">
                        <input
                          type="number"
                          step="0.0001"
                          name="upper"
                          value={item.upper}
                          onChange={(e) => model.onSegmentChange(e, ind)}
                          className="px-2 py-2 m-0 border border-[#D0D3D9] rounded-md outline-none w-[50%]"
                        />
                      </td>
                      <td className="py-4 border border-[#D0D3D9] text-center text-sm">
                        <input
                          type="number"
                          step="0.0001"
                          name="lower"
                          value={item.lower}
                          onChange={(e) => model.onSegmentChange(e, ind)}
                          className="px-2 py-2 m-0 border border-[#D0D3D9] rounded-md outline-none w-[50%]"
                        />
                      </td>
                      <td className="py-4 border border-[#D0D3D9] text-center text-sm">
                        <input
                          type="number"
                          step="0.0001"
                          name="saUpper"
                          value={item.saUpper}
                          onChange={(e) => model.onSegmentChange(e, ind)}
                          className="px-2 py-2 m-0 border border-[#D0D39D] rounded-md outline-none w-[50%]"
                        />
                      </td>
                      <td className="py-4 border border-[#D0D3D9] text-center text-sm">
                        <input
                          type="number"
                          step="0.0001"
                          name="saLower"
                          value={item.saLower}
                          onChange={(e) => model.onSegmentChange(e, ind)}
                          className="px-2 py-2 m-0 border border-[#D0D3D9] rounded-md outline-none w-[50%]"
                        />
                      </td>
                      <td className="px-4 border-b border-[#D0D3D9] text-center text-sm">
                        <select
                          name="tool"
                          value={item.tool?.id}
                          onChange={(e) => model.onToolChange(e, ind)}
                          className="border-[#D0D3D9] rounded-md outline-none px-4 py-3"
                        >
                          <option value="">Choose Tools</option>
                          {
                            model.tools.map((item) => (
                              <option value={item.id} key={item.id}>
                                {item.name}
                              </option>
                            ))
                          }
                        </select>
                      </td>
                      <td className="py-4 border-t border-b border-[#D0D3D9] text-center px-4 text-sm">
                        <button onClick={(e) => model.onRemoveSegment(e, ind)}
                          className="w-6 h-6 border-2 border-red-500 text-red-500 rounded-full text-center hover:scale-90"
                          >-</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </form>
          {/* button plus for add new row */}
          <div onClick={model.onAddSegment} className="flex items-center justify-center gap-2 py-4">
            <AddIcon className="cursor-pointer hover:scale-95 duration-300 w-6 h-6 border-4 border-sky-standart text-sky-standart rounded-full" />
            <span className="block text-sm pb-1 cursor-pointer">Edit Data</span>
          </div>
        </div>
      <ModalDelete showModal={undefined} setShowModal={undefined} />
    </>
  );
};

export default SpecialAcept;
