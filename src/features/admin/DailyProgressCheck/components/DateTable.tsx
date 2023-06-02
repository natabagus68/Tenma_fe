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
                          className="py-[12px] px-[20px] bg-[#F04438] text-white align-middle rounded-md"
                          onClick={(e) => model.onDeleteHistory(e, item)}
                        >
                          + Delete
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

