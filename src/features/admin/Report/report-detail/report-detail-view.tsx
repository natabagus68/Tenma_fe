import moment from "moment";
import { Breadcrumbs } from "@common/components";
import { EyeIcon, ArrowIcon, DownloadIcon, SearchIcon } from "@common/components/icons";
import Pagination from "@common/components/pagination/Pagination";
import { DownloadModal } from "../partials/download-modal";
import JudgemnetIcon2 from "@common/components/JudgemnetIcon";
import useReportDetail from "./report-detail-model";

const ReportDetailView = () => {
  const model = useReportDetail();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <DownloadModal model={model} />
      <Breadcrumbs items={["Report", "Part Details"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl text-gray-700">Part Check Report - A0B1C044</h1>
          <div className="w-1/2 flex justify-end gap-3">
            <button
              onClick={model.toBack}
              className="py-[12px] px-[20px] border borrder-[#D0D3D9] items-center rounded-[4px] flex gap-3"
            >
              <div className="flex items-center justify-center border-[#667085] gap-3">
                <ArrowIcon color={"#667085"} className="-rotate-90" />
                <span className="text-sm text-[#667085]">Back</span>
              </div>
            </button>

            <button onClick={model.openModalDownload}
              className="py-[12px] px-[20px] border border-[#D0D3D9] items-center rounded-[4px] text-white flex gap-2 bg-gray-600"
            >
              <div className="flex justify-center items-center gap-3 text-sm">
                <DownloadIcon />
                <span>Download Report</span>
              </div>
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center border-t border-[#D0D3D9] px-8 py-6">
          <div className="flex gap-5">
            <div className="flex gap-3 items-center">
              <label>PIC</label>
              <select
                name="pic"
                value={model.reportParam.pic}
                onChange={model.handleParams}
                className="w-[150px] py-2 px-3 bg-white outline-none border border-[#D0D3D9] rounded-md text-sm"
              >
                <option value={""}>semua</option>
                {model.pic?.map((e) => {
                  return <option value={e.id}>{e.name}</option>;
                })}
              </select>
            </div>
            <div className="flex gap-3 items-center">
              <label>Judgement</label>
              <select
                name="judgement"
                value={model.reportParam.judgement}
                onChange={model.handleParams}
                className="w-[100px] py-2 px-3 bg-white outline-none border border-[#D0D3D9] rounded-md text-sm"
              >
                <option value="Waiting">Waiting</option>
                <option value="OK">OK</option>
                <option value="NG">NG</option>
              </select>
            </div>
          </div>
          <div className="relative">
            <SearchIcon color={"#D0D3D9"} className="absolute top-[35%] left-[5%]" />
            <input
              type="text"
              name="search"
              value={model.reportParam.search}
              onChange={model.handleParams}
              placeholder="Search Part Code"
              className="outline-none pl-9 py-4 border border-[#D0D3D9] rounded-[4px] w-[280px] text-sm placeholder:text-gray-100 text-gray-600"
            />
          </div>
        </div>
        <div>
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-y border-[#D0D3D9]">
              <tr className="text-sm">
                <th className="px-8 py-[22px] text-left font-[600]">ID Report</th>
                <th className="px-8 py-[22px] text-left font-[600]">Date</th>
                <th className="px-8 py-[22px] text-left font-[600]">No. Machine</th>
                <th className="px-8 py-[22px] text-left font-[600]">PIC</th>
                <th className="px-8 py-[22px] text-left font-[600]">Judgement</th>
                <th className="px-8 py-[22px] text-left font-[600]">Action</th>
              </tr>
            </thead>
            <tbody>
              {model.reportDetail.data.map((item, index) => (
                <tr className="border-b border-[#D0D3D9]">
                  <td className="px-8 py-[22px] items-center">{item.idCode}</td>
                  <td className="px-8 py-[22px] items-center">{moment(item.lastReport).format("l")}</td>
                  <td className="px-8 py-[22px] items-center">{item.machine?.noMachine || ""}</td>
                  <td className="px-8 py-[22px] items-center">{item.pic}</td>
                  <td className="px-8 py-[22px] items-center"> <JudgemnetIcon2 value={item.judgement} /> </td>
                  <td className="px-8 py-[22px] flex justify-center items-center">
                    <button
                      onClick={() => model.toDetailPart(item.id)}
                      className="bg-[#1BBDD4] items-center rounded-[4px] text-white flex px-5 py-3"
                    >
                      <EyeIcon />
                      <span className="text-sm">Detail</span>
                    </button>
                    {/* download button */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-end px-8 py-6">
            <Pagination row={1} limit={10} page={undefined} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetailView;