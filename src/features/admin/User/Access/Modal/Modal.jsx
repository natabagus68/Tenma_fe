import React from "react";

const Modal = ({
    showHide,
    setShowHide,
    data = [],
    onChange = null,
    onCancel = null,
    onSave = null,
}) => {
    console.log(data);
    if (showHide) {
        return (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-[30%] my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-8 pt-12">
                            {/*header*/}
                            <div className="flex items-center flex-col  justify-center p-5 rounded-t ">
                                <h1 className="text-3xl text-gray-700 text-center">
                                    Dashboard
                                </h1>
                                <p className="text-gray-400 font-rubik text-center text-xl">
                                    Check to grant access{" "}
                                </p>

                                <div className="w-full">
                                    <div className="w-full flex flex-col gap-3 ">
                                        {data.map((item, i) => {
                                            return (
                                                <div className="flex gap-3 items-center ">
                                                    <input
                                                        type="checkbox"
                                                        value={data[i].active}
                                                        onChange={onChange}
                                                        className="w-8 h-8 accent-gray-700  "
                                                    />
                                                    <label className="text-gray-400 text-xl">
                                                        {item.name}
                                                    </label>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-center p-6 rounded-b gap-3">
                                <button
                                    className="text-white bg-sky-standart  uppercase px-12 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-gray-100 rounded-md"
                                    type="button"
                                    onClick={(e) => onSave(e)}
                                >
                                    Save Permissions
                                </button>
                                <button
                                    className="text-gray-100 border border-gray-100 uppercase text-sm px-12 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
        );
    } else null;
};

export default Modal;
