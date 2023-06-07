import React from "react";
import { Segment } from "@domain/models/segment";
import { useDailyProgressCheckDetail } from "../daily-progress-check-detail/daily-progress-check-detail-model";
import { EditIcon } from "@common/components/icons/EditIcon";
import { PenAltIcon, PenIcon } from "@common/components/icons";
import { Comparisson } from "@domain/models/comparisson";
import ModalNominal from "./ModalNominal";
const SegmentTable = ({
  segment = Segment.create({
    id: "",
    name: "",
    type: "",
    pacSegments: [],
    comparisson: [],
    checked: false,
  }),
  key = null,
  index = null,
  ind = null,
  model = useDailyProgressCheckDetail(),
}) => {
  return (
    <>
      <ModalNominal model={model} />
      <div
        key={key}
        className="first-line:m-auto border-2 border-gray-100 rounded-lg pb-6 mt-10 
           overflow-x-scroll flex"
      >
        <div className="flex-1 ">
          <div className="w-full py-5 px-12 flex justify-between items-center">
            <h1 className="font-[700] text-2xl text-gray-700 font-sans">
              {segment.name}
            </h1>
            <div className="flex gap-4 max-w-1/2 items-center justify-end">
              {model.toogle === "2d" ? null : model.onEditSegment ? (
                <button
                  onClick={(e) =>
                    model.saveSegment(e, model.segments?.[Number(ind)].id)
                  }
                  className="py-[12px] px-[20px] bg-[#1BBDD4] text-white align-middle rounded-md flex gap-2 items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  Save Cavity
                </button>
              ) : (
                <div className="flex gap-5">
                  <div>
                    <label
                      htmlFor={`${segment.id}`}
                      className="py-[12px] px-[20px] bg-[#1BBDD4] text-white align-middle rounded-md flex gap-2 items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                      Upload Comparisson
                    </label>

                    <input
                      type="file"
                      id={`${segment.id}`}
                      onChange={(e) => model.uploadComparisson(e, segment.id)}
                      className="hidden"
                    />
                  </div>

                  <button
                    onClick={model.editSegment}
                    type="button"
                    role="button"
                    className="py-[12px] px-[20px] bg-[#F79009] text-white align-middle rounded-md flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    Edit Cavity
                  </button>
                  <button
                    onClick={(e) => model.deleteSegment(e, segment.id)}
                    type="button"
                    role="button"
                    className="py-[12px] px-[20px] bg-[#F04438] text-white align-middle rounded-md flex gap-2 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className={"w-[160vh]"}>
            <table className="w-full flex-1">
              <thead>
                <tr>
                  <th className="py-5 border bg-white text-center" colSpan={4}>
                    Standard
                  </th>
                  <th
                    className="py-5 border bg-[#FDDDB3] text-center"
                    colSpan={2}
                  >
                    Special Accept
                  </th>
                  <th
                    className="py-5 border bg-gray-100 text-center"
                    rowSpan={2}
                  >
                    Tool
                  </th>
                  <th
                    className="py-5 text-center border bg-[#B8EBF2] w-40"
                    rowSpan={2}
                    colSpan={2}
                  >
                    Actual Result
                  </th>
                  <th
                    className="py-5 text-center border bg-[#FEF4E6] w-40"
                    colSpan={2}
                    rowSpan={2}
                  >
                    SA Result
                  </th>
                </tr>
                <tr>
                  <th className="py-5 text-center border bg-gray-100">
                    Character
                  </th>
                  <th className="py-5 text-center border bg-gray-100">
                    Nominal
                  </th>
                  <th className="py-5 text-center border bg-gray-100">Upper</th>
                  <th className="py-5 text-center border bg-gray-100">Lower</th>
                  <th className="py-5 text-center border bg-gray-50">Upper</th>
                  <th className="py-5 text-center border bg-gray-50">Lower</th>
                </tr>
              </thead>
              <tbody>
                {segment?.pacSegments?.map((segment, i) => (
                  <tr key={segment.id}>
                    <td className="border bg-white text-center py-5">
                      {model.onEditSegment ? (
                        <input
                          type="text"
                          name="character"
                          value={model.segments[ind].pacSegments[i].character}
                          onChange={(e) => model.handleEditSegment(e, ind, i)}
                          className="border border-gray-300 rounded-lg outline-none w-12 text-sm py-3 px-1.5"
                        />
                      ) : (
                        segment.character
                      )}
                    </td>
                    <td className="border bg-white text-center py-5">
                      {model.onEditSegment ? (
                        <button
                          onClick={() => model.openModalNominal(ind, i)}
                          className="w-1/2 px-3 py-2 text-white bg-cyan-400 rounded-md text-sm "
                        >
                          {" "}
                          {!isNaN(parseInt(segment.nominalValue))
                            ? `${segment.nominal} (${segment.nominalValue})`
                            : segment.nominal}
                        </button>
                      ) : !isNaN(parseInt(segment.nominalValue)) ? (
                        `${segment.nominal} (${segment.nominalValue})`
                      ) : (
                        segment.nominal
                      )}
                    </td>
                    <td className="border bg-white text-center py-5">
                      {model.onEditSegment ? (
                        <input
                          type="text"
                          name="upper"
                          value={model.segments[ind].pacSegments[i].upper}
                          onChange={(e) => model.handleEditSegment(e, ind, i)}
                          className="border border-gray-300 rounded-lg outline-none w-12 text-sm py-3 px-1.5"
                        />
                      ) : (
                        segment.upper
                      )}
                    </td>
                    <td className="border bg-white text-center py-5">
                      {model.onEditSegment ? (
                        <input
                          type="text"
                          name="lower"
                          value={model.segments[ind].pacSegments[i].lower}
                          onChange={(e) => model.handleEditSegment(e, ind, i)}
                          className="border border-gray-300 rounded-lg outline-none w-12 text-sm py-3 px-1.5"
                        />
                      ) : (
                        segment.lower
                      )}
                    </td>
                    <td className="border bg-white text-center py-5">
                      {model.onEditSegment ? (
                        <input
                          type="text"
                          name="saUpper"
                          value={model.segments[ind].pacSegments[i].saUpper}
                          onChange={(e) => model.handleEditSegment(e, ind, i)}
                          className="border border-gray-300 rounded-lg outline-none w-12 text-sm py-3 px-1.5"
                        />
                      ) : (
                        segment.saUpper
                      )}
                    </td>
                    <td className="border bg-white text-center py-5">
                      {model.onEditSegment ? (
                        <input
                          type="text"
                          name="saLower"
                          value={model.segments[ind].pacSegments[i].saLower}
                          onChange={(e) => model.handleEditSegment(e, ind, i)}
                          className="border border-gray-300 rounded-lg outline-none w-12 text-sm py-3 px-1.5"
                        />
                      ) : (
                        segment.saLower
                      )}
                    </td>
                    <td className="border bg-white text-center py-5">
                      {model?.onEditSegment ? (
                        <select
                          name="tool"
                          value={model?.segments[ind]?.pacSegments[i]?.tool?.id}
                          onChange={(e) => model.handleEditSegment(e, ind, i)}
                          className="py-2 px-3 w-1/2 rounded-md outline-none bg-neutral-200 text-center"
                        >
                          {model.tool.map((item) => {
                            return (
                              <option value={item?.id}>{item?.name}</option>
                            );
                          })}
                        </select>
                      ) : (
                        segment.tool?.name
                      )}
                    </td>
                    <td className="border bg-white text-center py-5">
                      {model.onEditSegment ? (
                        <input
                          type="text"
                          name="result"
                          value={model.segments[ind].pacSegments[i].result}
                          onChange={(e) => model.handleEditSegment(e, ind, i)}
                          className="border border-gray-300 rounded-lg outline-none w-12 text-sm py-3 px-1.5"
                        />
                      ) : (
                        segment.result
                      )}
                    </td>
                    <td className="border bg-white text-center py-5">
                      {segment.judgement}
                    </td>
                    <td className="border bg-white text-center py-5">
                      {model.onEditSegment ? (
                        <input
                          type="text"
                          name="saResult"
                          value={model.segments[ind].pacSegments[i].saResult}
                          onChange={(e) => model.handleEditSegment(e, ind, i)}
                          className="border border-gray-300 rounded-lg outline-none w-12 text-sm py-3 px-1.5"
                        />
                      ) : (
                        segment.saResult
                      )}
                    </td>
                    <td className="border bg-white text-center py-5">
                      {segment.saJudgement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {model.onEditSegment && (
              <div className="mt-4 flex justify-center">
                <button
                  onClick={(e) => model.addColumn(e, model.segments[ind].id)}
                  className="py-2 px-4 border-2 border-blue-400 rounded-full text-2xl text-blue-400 hover:scale-75 duration-700"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="h-full flex">
          {segment?.comparisson?.map((el, i) => {
            return (
              <>
                <div>
                  <div className="px-3 items-center border-x border-gray-100 py-5 flex justify-between">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                      Sample: {i + 1}
                    </h1>
                    <button
                      onClick={(e) =>
                        model.deleteComparisson(e, segment.id, el.id)
                      }
                      className="py-[12px] px-[20px] bg-[#F04438] text-white align-middle rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                  <table className="w-[500px]">
                    <thead>
                      <tr>
                        <th
                          className="py-[52px] text-center border bg-[#B8EBF2] w-40 h-full"
                          rowSpan={2}
                          colSpan={2}
                        >
                          Result
                        </th>
                        <th
                          className="py-[52px] text-center border bg-[#FEF4E6] w-40 h-full"
                          colSpan={2}
                          rowSpan={2}
                        >
                          SA Result
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {el?.map((x) => {
                        return (
                          <tr>
                            <td className="border bg-white text-center py-5 px-3">
                              {x.result}
                            </td>
                            <td className="border bg-white text-center py-5 px-3">
                              {x.resultJudgment}
                            </td>
                            <td className="border bg-white text-center py-5 px-3">
                              {x.saResult}
                            </td>
                            <td className="border bg-white text-center py-5 px-3">
                              {x.saResultJudgment}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SegmentTable;

