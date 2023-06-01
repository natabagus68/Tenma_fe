import React from "react";
import { Breadcrumbs } from "../../../../common/components";
import { EyeIcon } from "../../../../common/components/icons";
import Pagination from "../../../../common/components/pagination/Pagination";
import { useReport } from "./report-model";
import moment from "moment";
import { ExportModal } from "../partials/export-modal";
import TableExcel from "../tabel-export/tabel-excel-view";

const ReportView = () => {
  const model = useReport();
  return (
    <>
      <div>
        <Breadcrumbs items={["Report"]} />
      </div>
      <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 ">
        <div className="w-full py-5 px-12 flex justify-between items-center">
          <h1 className="font-[700] text-2xl text-gray-700 font-sans">
            Report
          </h1>
        </div>
        <div className="w-full py-5 px-12 flex justify-between items-center border-t-2 boder-gray-100">
          <div className="flex gap-5">
            <div className="flex gap-3 items-center">
              <label className="text-gray-600">PIC</label>
              <select
                name="pic"
                value={model.reportParam.pic}
                onChange={model.onReportParamChange}
                className="w-[100px] py-2 px-3 bg-white outline-none border border-gray-100 rounded-md"
              >
                <option value="">Semua</option>
                {model.pic.map((item) => (
                  <>
                    {item.name !== "" ? (
                      <option value={item.name} key={item.id}>
                        {item.name}
                      </option>
                    ) : null}
                  </>
                ))}
              </select>
            </div>
            <div className="flex gap-3 items-center">
              <label className="text-gray-600">Judgement</label>
              <select
                name="judgement"
                value={model.reportParam.judgement}
                onChange={model.onReportParamChange}
                className="w-[150px] py-2 px-3 bg-white outline-none border border-gray-100 rounded-md"
              >
                <option value="">Semua</option>
                <option value="OK">OK</option>
                <option value="NG">NG</option>
                <option value="Waiting">Waiting</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-3 left-2 text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="text"
              name="q"
              value={model.reportParam.q}
              onChange={model.onReportParamChange}
              placeholder="Search Part Code"
              className="outline-none pl-9 py-4  border border-gray-100 rounded-xl w-[280px]  text-sm placeholder:text-gray-100 text-gray-600"
            />
          </div>
        </div>
        <div>
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
              <tr>
                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                  ID CD
                </th>
                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                  Part Name
                </th>
                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                  Last Report
                </th>

                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                  PIC
                </th>
                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {model.report.data.map((item) => (
                <tr key={item.id} className="border-b-2 border-gray-100">
                  <td className="py-6 text-start pl-10 text-gray-600 items-center">
                    {item.idCode}
                  </td>
                  <td className="py-6 text-start pl-10 text-gray-600  items-center ">
                    {item.partName}
                  </td>

                  <td className="py-6 text-start pl-10 text-gray-600  items-center ">
                    {moment(item.lastReport).format("DD/MM/YYYY")}
                  </td>
                  <td className="py-6 text-start pl-10 text-gray-600  items-center ">
                    {item.pic}
                  </td>

                  <td className="py-6  pl-10 text-gray-600   items-center flex gap-8 justify-start">
                    <button
                      onClick={(e) => model.onDetail(e, item.part.id)}
                      className="py-[12px] px-[20px] bg-[#1BBDD4] items-center rounded-md text-white flex gap-2"
                    >
                      <EyeIcon />
                      Detail
                    </button>

                    {/* download button */}
                    <button onClick={(e) => model.onDownload(e, item.part.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
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
    </>
  );
};

export default ReportView;

