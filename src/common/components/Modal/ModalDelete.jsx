import React from "react";
import DeleteImage from "../../../assets/delete.png";

export default function ModalDelete({
  showModal,
  setShowModal,
  onCancel = null,
  onConfirm = null,
  id = null,
}) {
  return (
    <div className="text-[#514343] font-open-sans">
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-20 pt-12">
                {/*header*/}
                <div className="flex items-center flex-col justify-center rounded-t">
                  <div className="w-32 h-32 relative rounded-full bg-red-500 text-center items-center">
                    <img src={DeleteImage} alt="delete-image" className="scale-150" />
                  </div>
                  <div className="mt-10 text-center">
                    <h1 className="font-[600] mb-2 text-2xl">Delete</h1>
                    <p className="">Are you sure you want to delete this file?</p>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 rounded-b gap-3">
                  <button
                    className="bg-red-500 text-white active:bg-red-600  uppercase text-sm px-12 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => onConfirm(e, id)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-gray-600 background-transparent  uppercase px-12 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-gray-100 rounded-md"
                    type="button"
                    onClick={onCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
