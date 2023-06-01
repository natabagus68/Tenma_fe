import moment from "moment";
import { Breadcrumbs } from "@common/components";
import Pagination from "@common/components/pagination/Pagination";
import { SearchIcon, EyeIcon, DownloadIcon } from "@common/components/icons";
import { ExportModal } from "../partials/export-modal";
import TableExcel from "../tabel-export/tabel-excel-view";
import { useReport } from "./report-model";

const ReportView = () => {
  const model = useReport();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["Report"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md pb-6 ">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl font-sans">Report</h1>
        </div>
        <div className="w-full flex justify-between items-center border-t border-[#D0D3D9] px-8 py-6">
          <div className="flex gap-5">
            <div className="flex gap-3 items-center">
              <label>PIC</label>
              <select
                name="pic"
                value={model.reportParam.pic}
                onChange={model.onReportParamChange}
                className="w-[100px] py-2 px-3 bg-white outline-none border border-[#D0D3D9] rounded-md text-sm"
              >
                <option value="">Semua</option>
                {model.pic.map((item) => (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-3 items-center">
              <label>Judgement</label>
              <select
                name="judgement"
                value={model.reportParam.judgement}
                onChange={model.onReportParamChange}
                className="w-[150px] py-2 px-3 bg-white outline-none border border-[#D0D3D9] rounded-md text-sm"
              >
                <option value="">Semua</option>
                <option value="OK">OK</option>
                <option value="NG">NG</option>
                <option value="Waiting">Waiting</option>
              </select>
            </div>
          </div>
          <div className="relative">
            <SearchIcon color={"#D0D3D9"} className="absolute top-[32.5%] left-[5%]" />
            <input
              type="text"
              name="q"
              value={model.reportParam.q}
              onChange={model.onReportParamChange}
              placeholder="Search Part Code"
              className="outline-none text-sm border border-[#D0D3D9] w-[215px] h-[46px] pl-8 rounded-md"
            />
          </div>
        </div>
        <div>
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-y border-[#D0D3D9]">
              <tr>
                <th className="py-[22px] text-start pl-10 font-[600] text-sm">ID CD</th>
                <th className="py-[22px] text-start pl-10 font-[600] text-sm">Part Name</th>
                <th className="py-[22px] text-start pl-10 font-[600] text-sm">Last Report</th>
                <th className="py-[22px] text-start pl-10 font-[600] text-sm">PIC</th>
                <th className="py-[22px] text-start pl-10 font-[600] text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {model.report.data.map((item) => (
                <tr key={item.id} className="border-b border-[#D0D3D9]">
                  <td className="py-[22px] text-start pl-10 items-center">{item.idCode}</td>
                  <td className="py-[22px] text-start pl-10 items-center">{item.partName}</td>
                  <td className="py-[22px] text-start pl-10 items-center">
                    {moment(item.lastReport).format("DD/MM/YYYY")}
                  </td>
                  <td className="py-[22px] text-start pl-10 items-center ">{item.pic}</td>
                  <td className="py-2 pl-10 items-center flex gap-8 justify-start">
                    <button onClick={(e) => model.onDetail(e, item.part.id)}
                      className="py-[12px] px-[20px] bg-[#1BBDD4] items-center rounded-[4px] text-white flex gap-2"
                    >
                      <EyeIcon />
                      <span className="text-sm">Detail</span>
                    </button>

                    {/* download button */}
                    <button onClick={(e) => model.onDownload(e, item.part.id)}>
                      <DownloadIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-end mt-4 px-5">
            <Pagination
              row={model.report.totalRow}
              limit={model.report.limit}
              page={model.report.page}
              onClick={model.handlePagination}
            />
          </div>
        </div>
      </div>
      <ExportModal model={model} />
      <div className="hidden">
        {model.pdfData.length !== 0
          ? model.pdfData.map((item, i) => {
              return item.daily_progress.map((e, x) => {
                return (
                  <div ref={model.tableRef} className={`table-export`}>
                    <TableExcel datas={e} />;
                  </div>
                );
              });
            })
          : null}
      </div>
    </div>
  );
};

export default ReportView;
