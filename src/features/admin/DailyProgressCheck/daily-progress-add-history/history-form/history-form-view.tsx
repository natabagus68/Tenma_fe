import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import { useHistoryForm } from "./history-form-model";
import moment from "moment";
import ModalConfirm from "@common/components/Modal/ModalConfirm";

const HistoryFormView = () => {
  const createHistory = useHistoryForm();
  return (
    <>
      <div>
        <Breadcrumbs
          items={[
            "Daily Process Check",
            createHistory.historyId ? "Edit Data" : "Add Data",
          ]}
        />
      </div>
      <div className="m-auto w-full border-2 border-gray-100  rounded-lg pb-6">
        <div className="w-full py-5 px-12 flex justify-between items-center">
          <h1 className="font-[700] text-2xl text-gray-700 font-sans">
            {createHistory.historyId ? "Edit History Data" : "Add History Data"}
          </h1>
        </div>
        <div className="border-t-2 border-gray-100 pt-10 px-5 pb-80">
          <form onSubmit={createHistory.onSave}>
            <div className="flex flex-col gap-3">
              <label className="text-gray-600">Date</label>
              <input
                type="date"
                name="date"
                value={moment(createHistory.history.date).format("YYYY-MM-DD")}
                onChange={createHistory.onHistoryChange}
                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
              />
            </div>

            <div className="flex flex-col gap-3 mt-3">
              <label className="text-gray-600">History Problem</label>
              <input
                type="text"
                name="problemDetail"
                value={createHistory.history.problemDetail}
                onChange={createHistory.onHistoryChange}
                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label className="text-gray-600">Char</label>
              <input
                type="text"
                name="char"
                value={createHistory.history.char}
                onChange={createHistory.onHistoryChange}
                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
              />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <label className="text-gray-600">Remark</label>
              <input
                type="text"
                name="remark"
                value={createHistory.history.remark}
                onChange={createHistory.onHistoryChange}
                className="w-[80%] border border-gray-100 rounded-lg outline-none px-5 py-2 text-md text-gray-700 font-mono"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button
                type="submit"
                className="px-14 py-3 rounded-lg bg-[#1BBDD4] text-white items-center flex justify-center hover:bg-gray-800"
              >
                Save
              </button>
              <button
                onClick={createHistory.onCancel}
                type="button"
                role="button"
                className="px-12 py-3 rounded-lg border  text-black items-center flex justify-center hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <ModalConfirm
        showModal={createHistory.saveConfirmShow}
        setShowModal={createHistory.setSaveConfirmShow}
        onConfirm={createHistory.onSaveConfirm}
      />
    </>
  );
};

export default HistoryFormView;
