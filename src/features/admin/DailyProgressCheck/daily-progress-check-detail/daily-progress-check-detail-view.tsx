import React from "react";
import { Breadcrumbs } from "../../../../common/components";
import { Td } from "../../../../common/components/table/Td";
import { Tr } from "../../../../common/components/table/Tr";
import SegmentTable from "../components/segment-table";
import JudgementIcon from "../icon/JudgemnetIcon";
import { useDailyProgressCheckDetail } from "./daily-progress-check-detail-model";
import moment from "moment";
import HistoryFormView from "../components/DateTable";
import ModalDelete from "@common/components/Modal/ModalDelete";
import { JudgemnetIcon2 as JDG2 } from "@common/components/JudgemnetIcon";
const DailyProgressCheckDetailView = () => {
  const dailyProgressCheckDetail = useDailyProgressCheckDetail();

  return (
    <>
      <div>
        <Breadcrumbs
          items={[
            `${
              dailyProgressCheckDetail.state ? "Report" : "Daily Progress Check"
            }`,
            `Detail ${dailyProgressCheckDetail.toogle == "2d" ? "2D" : "3D"}`,
          ]}
        />
      </div>
      <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6">
        <div className="w-full py-5 px-12 flex justify-between items-center">
          <h1 className="font-[700] text-2xl text-gray-700 font-sans">
            Details
          </h1>
          <div className="flex justify-end items-center gap-3">
            <div className="flex gap-2">
              2D
              <div
                className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-[#667085] rounded-full py-1 cursor-pointer"
                onClick={dailyProgressCheckDetail.onToogle}
              >
                <div
                  className={`bg-white md:w-6 md:h-6 h-5 w-5 ml-[2px] rounded-full shadow-md transform duration-300 ease-in-out ${
                    dailyProgressCheckDetail.toogle == "3d" &&
                    `transform translate-x-[27px]`
                  }`}
                ></div>
              </div>
              3D
            </div>

            <div className="flex gap-4">
              {dailyProgressCheckDetail.segments.length > 0 &&
              dailyProgressCheckDetail.toogle === "2d" &&
              !dailyProgressCheckDetail.location ? (
                <button
                  className="py-[12px] px-[20px] bg-[#F79009] text-white align-middle rounded-md"
                  onClick={dailyProgressCheckDetail.toEditSegment2d}
                >
                  + Edit Segment Data
                </button>
              ) : !dailyProgressCheckDetail.location ? (
                <button
                  className="py-[12px] px-[20px] bg-[#1BBDD4] text-white align-middle rounded-md"
                  onClick={dailyProgressCheckDetail.onAddSegment}
                >
                  + Add Segment Data
                </button>
              ) : null}

              {!dailyProgressCheckDetail.location ? (
                <button
                  className="py-[12px] px-[20px] bg-[#1BBDD4] text-white align-middle rounded-md"
                  onClick={dailyProgressCheckDetail.onAddHistory}
                >
                  + Add History Data
                </button>
              ) : null}

              {/* <button
                className="py-[12px] px-[20px] bg-[#1BBDD4] text-white align-middle rounded-md flex"
                onClick={dailyProgressCheckDetail.onDownloadReport}
              >
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
                Download Report
              </button> */}
              <button
                className="py-[12px] px-[20px] border border-gray-100 align-middle rounded-md flex gap-2"
                onClick={dailyProgressCheckDetail.onBack}
              >
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
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                Back
              </button>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-100 py-8 px-8 flex ">
          <div className="w-1/2 flex justify-center">
            <table className="border-none w-[90%]">
              <tbody>
                <Tr>
                  <Td className="bg-gray-50 border-none">Part Name</Td>
                  <Td className="bg-gray-50 border-none font-bold">
                    {dailyProgressCheckDetail.dailyProgressCheck.part?.partName}
                  </Td>
                </Tr>
                <Tr>
                  <Td className=" border-none">Part Code (Item CD) </Td>
                  <Td className="border-none font-bold">
                    {dailyProgressCheckDetail.dailyProgressCheck.part?.partCode}
                  </Td>
                </Tr>
                <Tr>
                  <Td className="bg-gray-50 border-none">Model</Td>
                  <Td className="bg-gray-50 border-none font-bold">
                    {
                      dailyProgressCheckDetail.dailyProgressCheck.part
                        ?.customerModel
                    }
                  </Td>
                </Tr>
                <Tr>
                  <Td className=" border-none">Machine No.</Td>
                  <Td className="border-none font-bold">
                    {
                      dailyProgressCheckDetail.dailyProgressCheck.machine
                        ?.noMachine
                    }
                  </Td>
                </Tr>
                <Tr>
                  <Td className="bg-gray-50 border-none">Inspection Date</Td>
                  <Td className="bg-gray-50 border-none font-bold">
                    {dailyProgressCheckDetail.dailyProgressCheck
                      .inspectionDate &&
                      moment(
                        dailyProgressCheckDetail.dailyProgressCheck
                          .inspectionDate
                      ).format("DD/MM/YYYY")}
                  </Td>
                </Tr>
                <Tr>
                  <Td className=" border-none">Part Weight QIS</Td>
                  <Td className="border-none font-bold">
                    {dailyProgressCheckDetail.dailyProgressCheck.weightPart}{" "}
                    gram
                  </Td>
                </Tr>
                <Tr>
                  <Td className="bg-gray-50 border-none">Lot Production</Td>
                  <Td className="bg-gray-50 border-none font-bold">
                    {dailyProgressCheckDetail.dailyProgressCheck.lotProduction}
                  </Td>
                </Tr>
                <Tr>
                  <Td className="border-none">Checked By</Td>
                  <Td className=" border-none font-bold">
                    {dailyProgressCheckDetail.dailyProgressCheck.checkedBy}
                  </Td>
                </Tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/2 flex justify-center">
            <table className="border-none w-[90%]">
              <tbody>
                <Tr>
                  <Td className="bg-gray-50 border-none">Shift</Td>
                  <Td className="bg-gray-50 border-none font-bold">
                    {dailyProgressCheckDetail.dailyProgressCheck.shift}
                  </Td>
                </Tr>
                <Tr>
                  <Td className=" border-none">PIC</Td>
                  <Td className="border-none font-bold">
                    {dailyProgressCheckDetail.dailyProgressCheck.pic?.name}
                  </Td>
                </Tr>
                <Tr>
                  <Td className="bg-gray-50 border-none">Label No.</Td>
                  <Td className="bg-gray-50 border-none font-bold">
                    {dailyProgressCheckDetail.dailyProgressCheck.labelNo}
                  </Td>
                </Tr>
                <Tr>
                  <Td className=" border-none">Accept sample (time)</Td>
                  <Td className="border-none font-bold">
                    {
                      dailyProgressCheckDetail.dailyProgressCheck
                        .acceptSampleTime
                    }
                  </Td>
                </Tr>
                <Tr>
                  <Td className="bg-gray-50 border-none">
                    Measure sample (time)
                  </Td>
                  <Td className="bg-gray-50 border-none font-bold">
                    {
                      dailyProgressCheckDetail.dailyProgressCheck
                        .measureSampleTime
                    }
                  </Td>
                </Tr>
                <Tr>
                  <Td className=" border-none">Weight Part</Td>
                  <Td className="border-none font-bold">
                    {dailyProgressCheckDetail.dailyProgressCheck.actWeightPart}
                    &nbsp;gram
                  </Td>
                </Tr>
                <Tr>
                  <Td className="bg-gray-50 border-none">Judgement</Td>
                  <Td className="bg-gray-50 border-none font-bold">
                    {dailyProgressCheckDetail.state ? (
                      <JDG2
                        value={
                          dailyProgressCheckDetail.toogle == "2d"
                            ? dailyProgressCheckDetail.dailyProgressCheck
                                .judgement2d
                            : dailyProgressCheckDetail.dailyProgressCheck
                                .judgement3d
                        }
                      />
                    ) : (
                      <JudgementIcon
                        value={
                          dailyProgressCheckDetail.toogle == "2d"
                            ? dailyProgressCheckDetail.dailyProgressCheck
                                .judgement2d
                            : dailyProgressCheckDetail.dailyProgressCheck
                                .judgement3d
                        }
                        changer={dailyProgressCheckDetail.handelChangeJudgment}
                      />
                    )}
                  </Td>
                </Tr>
                <Tr>
                  <Td className=" border-none">Update at</Td>
                  <Td className="border-none font-bold">
                    {dailyProgressCheckDetail.dailyProgressCheck.updatedAt &&
                      dailyProgressCheckDetail.dailyProgressCheck.updatedAt
                        ?.toString()
                        .toLowerCase() !== "invalid date" &&
                      moment(
                        dailyProgressCheckDetail.dailyProgressCheck.updatedAt
                      ).format("HH:mm")}
                  </Td>
                </Tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {dailyProgressCheckDetail.toogle === "3d" && (
        <>
          {dailyProgressCheckDetail.segments.map((item, i) => (
            <SegmentTable
              key={item.id}
              segment={item}
              model={dailyProgressCheckDetail}
              index={item.id}
              ind={i}
            />
          ))}
        </>
      )}
      {dailyProgressCheckDetail.toogle === "2d" && (
        <>
          {dailyProgressCheckDetail?.segments?.map((item, i) => (
            <SegmentTable
              key={item.id}
              segment={item}
              model={dailyProgressCheckDetail}
              index={item.id}
            />
          ))}
        </>
      )}
      <HistoryFormView model={dailyProgressCheckDetail} />
      <ModalDelete
        showModal={dailyProgressCheckDetail.deleteSegmentConfirmShow}
        setShowModal={dailyProgressCheckDetail.setDeleteSegmentConfirmShow}
        onConfirm={dailyProgressCheckDetail.confirmDeleteSegment}
        onCancel={dailyProgressCheckDetail.cancelModelDelete}
      />
    </>
  );
};

export default DailyProgressCheckDetailView;

