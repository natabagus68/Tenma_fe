import { Breadcrumbs } from "@common/components";
import JudgemnetIcon from "@common/components/JudgemnetIcon";
import Pagination from "@common/components/pagination/Pagination";
import DimantionIcon from "@features/admin/DailyProgressCheck/icon/DimantionIcon";
import moment from "moment";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useTraceability } from "./traceabilty-view-model";
const Traceability = () => {
    const model = useTraceability();
    console.log(model.shift, "model");

    return (
        <>
            <div className="mb-4 w-full flex justify-between items-center">
                <Breadcrumbs items={["Dashboard", "Traceability"]} />
                <h1 className="font-bold">
                    {moment().format("dddd")}, {moment().format("DD MMM YYYY")}
                </h1>
            </div>
            {/* form */}
            <div className="w-full">
                <form className="w-full flex gap-5">
                    <div className="flex gap-3 items-center">
                        <label className="text-gray-600 ">Part Code</label>
                        <input
                            type="text"
                            placeholder="Trace..."
                            name="partCode"
                            value={model.params.partCode}
                            onChange={model.handleParams}
                            className="border border-gray-100 outline-none py-2 px-2 placeholder:text-center text-gray-700 placeholder:text-100 rounded-md"
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="text-gray-600 ">PIC</label>
                        <select
                            name="pic"
                            value={model.params.pic}
                            onChange={model.handleParams}
                            className="border border-gray-100 outline-none py-2 px-4 text-gray-700 rounded-md bg-transparent "
                        >
                            <option disabled selected>
                                Select manpower
                            </option>
                            {model.pic.map((item, i) => {
                                return (
                                    <option key={i} value={item.pic}>
                                        {item.pic}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="text-gray-600 ">Shift</label>
                        <select
                            name="shift"
                            value={model.params.shift}
                            onChange={model.handleParams}
                            className="border border-gray-300 outline-none py-2 px-4 text-gray-700 rounded-md bg-transparent "
                        >
                            <option disabled selected>
                                Select shift
                            </option>
                            {model.shift.map((item, i) => {
                                return (
                                    <option key={i} value={item.shift}>
                                        {item.shift}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <label className="text-gray-600 ">Shift</label>

                        <Datepicker
                            inputClassName={
                                "outline-none border border-gray-100 rounded-md px-3 py-2 text-sm placeholder:px-1 w-60"
                            }
                            placeholder="April 4, 2023 - May 3, 2023"
                            // showShortcuts={true}
                            value={model.value}
                            onChange={model.handleValueChange}
                        />
                    </div>
                    <div className="relative items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 absolute text-white top-2.5 left-3"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>

                        <button
                            type="submit"
                            onClick={model.onSubmitSearch}
                            className="px-11 py-2 bg-[#1BBDD4] text-center text-white rounded-md"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-full py-6 border border-gray-100 rounded-md mt-5">
                <div className="px-4 pb-4 border-b border-gray-100 flex justify-between">
                    <h1 className="font-semibold text-2xl text-gray-700">
                        Traceability
                    </h1>
                    <div className="flex">
                        <div className="px-5 border-r border-gray-600 flex gap-2 items-center ">
                            <p className="text-gray-400 text-sm">Total Part</p>
                            <span className="font-bold text-sm">
                                {model.traceability?.totalPart || ""}
                            </span>
                        </div>
                        <div className="px-5 border-r border-gray-600 flex gap-2 items-center ">
                            <p className="text-gray-400 text-sm">
                                Progress Check
                            </p>
                            <span className="font-bold text-sm">
                                {model.traceability?.progressCheck || ""}
                            </span>
                        </div>
                        <div className="px-5 border-r border-gray-600 flex gap-2 items-center ">
                            <p className="text-gray-400 text-sm">3D Check</p>
                            <span className="font-bold text-sm">
                                {model.traceability?.check3d || ""}
                            </span>
                        </div>
                        <div className="px-5 flex gap-2 items-center ">
                            <p className="text-gray-400 text-sm">2D Check</p>
                            <span className="font-bold text-sm">
                                {model.traceability?.check2d || ""}
                            </span>
                        </div>
                    </div>
                </div>
                <table className="w-full">
                    <thead>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            Update at
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            Date
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            Part Code
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            Model
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            Shift
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            3D
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            2D
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            PIC
                        </th>
                        <th className="border-b border-gray-400 text-left px-6 py-4 bg-gray-50">
                            Judgement
                        </th>
                    </thead>
                    <tbody>
                        {model.traceability
                            ? model.traceability?.data.map((item, index) => {
                                  return (
                                      <tr key={index}>
                                          <td className="border-b border-gray-400 text-left px-6 py-4 ">
                                              {moment(item.updatedAt).format(
                                                  "LT"
                                              )}
                                          </td>
                                          <td className="border-b border-gray-400 text-left px-6 py-4 ">
                                              {moment(item.updatedAt).format(
                                                  "L"
                                              )}
                                          </td>
                                          <td className="border-b border-gray-400 text-left px-6 py-4 ">
                                              {item.partCode}
                                          </td>
                                          <td className="border-b border-gray-400 text-left px-6 py-4 ">
                                              {item.model}
                                          </td>
                                          <td className="border-b border-gray-400 text-left px-6 py-4 ">
                                              {item.shift}
                                          </td>
                                          <td className="border-b border-gray-400 text-left px-6 py-4 ">
                                              <DimantionIcon
                                                  value={item.judgement3d}
                                              />
                                          </td>
                                          <td className="border-b border-gray-400 text-left px-6 py-4 ">
                                              <DimantionIcon
                                                  value={item.judgement2d}
                                              />
                                          </td>
                                          <td className="border-b border-gray-400 text-left px-6 py-4 ">
                                              {item.pic.name}
                                          </td>
                                          <td className="border-b border-gray-400 text-left px-6 py-4 ">
                                              <JudgemnetIcon
                                                  value={item.judgement}
                                              />
                                          </td>
                                      </tr>
                                  );
                              })
                            : ""}
                    </tbody>
                </table>
                <div className="w-full flex justify-end mt-5 pr-8">
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
        </>
    );
};

export default Traceability;
