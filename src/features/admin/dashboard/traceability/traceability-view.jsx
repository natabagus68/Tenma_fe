import moment from "moment";
import Datepicker from "react-tailwindcss-datepicker";
import DimantionIcon from "@features/admin/DailyProgressCheck/icon/DimantionIcon";
import JudgemnetIcon from "@common/components/JudgemnetIcon";
import Pagination from "@common/components/pagination/Pagination";
import { Breadcrumbs } from "@common/components";
import { SearchIcon } from "@common/components/icons";
import { useTraceability } from "./traceabilty-view-model";

export default function Traceability () {
  const model = useTraceability();
  return (
    <div className="w-full overflow-hidden font-open-sans text-[#514E4E]">
      <div className="flex justify-between">
        <Breadcrumbs items={["Dashboard", "Traceability"]} />
        <div className="font-[600] flex gap-1 text-sm">
          <span>{moment().format("dddd")}</span>
          <span>{moment().format("DD MMM YYYY")}</span>
        </div>
      </div>
      <div className="flex flex-1 py-4 gap-3">
        <div className="flex flex-[1.5] items-center text-[#514E4E] gap-2">
          <label className="text-sm relative w-[30%] text-[#667085] font-[600]">Part Code</label>
          <input
            type="text"
            placeholder="Trace..."
            name="partCode"
            value={model.params.partCode}
            onChange={model.handleParams}
            className="w-10/12 border border-[#667085] px-4 py-3 outline-none rounded-md text-sm"
          />
        </div>
        <div className="flex flex-1 items-center gap-2 text-[#514E4E]">
          <label className="text-sm text-[#667085] font-[600]">PIC</label>
          <select
            name="pic"
            value={model.params.pic}
            onChange={model.handleParams}
            className="w-[100%] border border-[#667085] px-4 py-3 outline-none bg-[#FFFFFF] rounded-md text-sm"
          >
            {
              model.pic.map((item, i) => (
                <option key={i} value={item.pic}>
                  {item.pic}
                </option>
              ))
            }
          </select>
        </div>
        <div className="flex flex-1 items-center gap-2 text-[#514E4E]">
          <label className="text-sm text-[#667085] font-[600]">Shift</label>
          <select
            name="shift"
            value={model.params.shift}
            onChange={model.handleParams}
            className="w-[100%] border border-[#667085] px-4 py-3 outline-none bg-[#FFFFFF] rounded-md text-sm"
          >
            {
              model.shift.map((item, i) => (
                <option key={i} value={item.shift}>
                  {item.shift}
                </option>
              ))
            }
          </select>
        </div>
        <div className="flex flex-[1.5] items-center gap-2 text-[#514E4E]">
          <label className="text-sm text-[#667085] font-[600]">Date</label>
          <Datepicker
            inputClassName={"border border-[#667085] px-4 py-3 outline-none rounded-md w-[100%] text-sm"}
            placeholder="April 4, 2023 - May 3, 2023"
            value={model.value}
            onChange={model.handleValueChange}
          />
        </div>
        <button
          type="submit"
          onClick={model.onSubmitSearch}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1BBDD4] text-[#FFFFFF] rounded-md w-[10%]"
        >
          <SearchIcon />
          <span>Search</span>
        </button>
      </div>
      <div className="bg-[#FFFFFF] border border-[#D0D3D9] rounded-md">
        <div className="border-b border-[#D0D3D9] flex justify-between px-8 py-6">
          <h1 className="text-2xl font-[700]">Traceability</h1>
          <div className="flex">
            <div className="px-5 border-r border-[#D0D3D9] flex gap-2 items-center ">
              <p className="text-[#6F6C6C] text-sm">Total Part</p>
              <span className="text-sm font-[600]">{model.traceability?.totalPart || ""}</span>
            </div>
            <div className="px-5 border-r border-[#D0D3D9] flex gap-2 items-center ">
              <p className="text-[#6F6C6C] text-sm">Progress Check</p>
              <span className="text-sm font-[600]">{model.traceability?.progressCheck || ""}</span>
            </div>
            <div className="px-5 border-r border-[#D0D3D9] flex gap-2 items-center ">
              <p className="text-[#6F6C6C] text-sm">3D Check</p>
              <span className="text-sm font-[600]">{model.traceability?.check3d || ""}</span>
            </div>
            <div className="px-5 flex gap-2 items-center ">
              <p className="text-[#6F6C6C] text-sm">2D Check</p>
              <span className="text-sm font-[600]">{model.traceability?.check2d || ""}</span>
            </div>
          </div>
        </div>
        <table className="w-full text-sm font-[600]">
          <thead className="bg-[#FAFAFB]">
            <th className="border-b border-[#D0D3D9] text-left px-8 py-4 text-sm">Update at</th>
            <th className="border-b border-[#D0D3D9] text-left px-6 py-4 text-sm">Date</th>
            <th className="border-b border-[#D0D3D9] text-left px-6 py-4 text-sm">Part Code</th>
            <th className="border-b border-[#D0D3D9] text-left px-6 py-4 text-sm">Model</th>
            <th className="border-b border-[#D0D3D9] text-left px-6 py-4 text-sm">Shift</th>
            <th className="border-b border-[#D0D3D9] text-left px-6 py-4 text-sm">3D</th>
            <th className="border-b border-[#D0D3D9] text-left px-6 py-4 text-sm">2D</th>
            <th className="border-b border-[#D0D3D9] text-left px-6 py-4 text-sm">PIC</th>
            <th className="border-b border-[#D0D3D9] text-left px-6 py-4 text-sm">Judgement </th>
          </thead>
          <tbody>
            {model.traceability
              ? model.traceability?.data.map((item, index) => {
                  return (
                    <tr key={index} className="text-[#514E4E]">
                      <td className="border-b border-[#D0D3D9] text-left px-8 py-4 font-[300]">{moment(item.updatedAt).format("LT")}</td>
                      <td className="border-b border-[#D0D3D9] text-left px-6 py-4 font-[300]">{moment(item.updatedAt).format("L")}</td>
                      <td className="border-b border-[#D0D3D9] text-left px-6 py-4 font-[300]">{item.partCode}</td>
                      <td className="border-b border-[#D0D3D9] text-left px-6 py-4 font-[300]">{item.model}</td>
                      <td className="border-b border-[#D0D3D9] text-left px-6 py-4 font-[300]">{item.shift}</td>
                      <td className="border-b border-[#D0D3D9] text-left px-6 py-4 font-[300]"><DimantionIcon value={item.judgement3d} /> </td>
                      <td className="border-b border-[#D0D3D9] text-left px-6 py-4"><DimantionIcon value={item.judgement2d} /></td>
                      <td className="border-b border-[#D0D3D9] text-left px-6 py-4">{item.pic.name}</td>
                      <td className="border-b border-[#D0D3D9] text-left px-6 py-4"><JudgemnetIcon value={item.judgement} /></td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
        <div className="w-full flex justify-end px-8 py-4">
          {model.traceability ? (
            <Pagination
              row={model.traceability?.totalRow || 0}
              limit={model.traceability?.limit || 0}
              page={model.traceability?.page || 0}
              onClick={model.onHandlePAgination}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}