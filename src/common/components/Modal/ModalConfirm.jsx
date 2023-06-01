import React from "react";
import WarningIcon from "../../../assets/warning.png";

const ModalConfirm = ({ showModal, setShowModal, onConfirm }) => {
  if (showModal) {
    return (
      <div className="text-[#514E4E]">
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-20 pt-12">
              {/*header*/}
              <div className="flex items-center flex-col  justify-center p-5 rounded-t">
                <div className="w-32 h-32 relative rounded-full bg-yellow-500 text-center items-center">
                  <img src={WarningIcon} alt="warning" className="scale-150" />
                </div>

                <div className="mt-10 text-center">
                  <h1 className="font-[600] mb-2 text-2xl">Confirm the Action</h1>
                  <p>Is the data you entered correct?</p>
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-center rounded-b pb-6 gap-3">
                <button
                  className="w-[180px] h-[46px] border bg-[#1BBDD4] border-[#1BBDD4] text-[#FFFFFF] font-[600] text-sm rounded-[4px]"
                  type="button"
                  onClick={(e) => {
                    setShowModal(false);
                    onConfirm(e);
                  }}
                >Yes, Confirm</button>
                <button
                  className="w-[180px] h-[46px] border bg-[#FFFFFF] border-[#D0D3D9] text-[#514343] font-[600] text-sm rounded-[4px]"
                  type="button"
                  onClick={() => setShowModal(false)}
                >Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    );
  } else return null;
};

export default ModalConfirm;