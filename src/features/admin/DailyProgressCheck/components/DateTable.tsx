import React from "react";
import { useDailyProgressCheckDetail } from "../daily-progress-check-detail/daily-progress-check-detail-model";
import ModalDelete from "@common/components/Modal/ModalDelete";
import moment from "moment";
import { PenAltIcon } from "@common/components/icons";

const HistoryFormView = ({ model = useDailyProgressCheckDetail() }) => {
  return (
    <div className="text-[#514E4E] font-open-sans mt-8">
      <div className="m-auto w-full border rounded-lg">
        <div className="w-full flex justify-between items-center px-6 py-6">
          <h1 className="font-[700] text-2xl">History Problem</h1>
        </div>
        <div>
          <div className=" w-full">
            <table className="w-full">
              <thead className=" border-y">
                <tr>
                  <th className="py-6 text-center bg-gray-50">Date</th>
                  <th className="py-6 text-center bg-gray-50">
                    Problem Details
                  </th>
                  <th className="py-6 text-center bg-gray-50">Char</th>
                  <th className="py-6 text-center bg-gray-50">Remark</th>
                  <th className="py-6 text-center bg-gray-50">Action</th>
                </tr>
              </thead>
              <tbody>
                {model.histories.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center border-b  py-6">
                      {moment(item.date).format("DD/MM/YYYY")}
                    </td>
                    <td className="text-center border-b  py-6">
                      {item.problemDetail}
                    </td>
                    <td className="text-center border-b  py-6">{item.char}</td>
                    <td className="text-center border-b  py-6">
                      {item.remark}
                    </td>
                    <td className="text-center border-b  py-6">
                      <div className="flex gap-4 items-center justify-center">
                        <button
                          className="py-[12px] px-[20px] bg-[#F79009]  text-white align-middle rounded-md flex items-center gap-3"
                          onClick={(e) => model.onEditHistory(e, item)}
                        >
                          <PenAltIcon />
                          <span>Edit</span>
                        </button>
                        <button
                          className="py-[12px] px-[20px] bg-[#F04438] text-white align-middle rounded-md flex gap-2 items-center"
                          onClick={(e) => model.onDeleteHistory(e, item)}
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ModalDelete
        showModal={model.confirmDeleteHistoryShow}
        setShowModal={model.setConfirmDeleteHistoryShow}
        onConfirm={model.onConfirmDeleteHistory}
      />
    </div>
  );
};

export default HistoryFormView;

