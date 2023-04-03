import React from "react";

const ModalConfirm = ({ showModal, setShowModal }) => {
    if (showModal) {
        return (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-20 pt-12">
                            {/*header*/}
                            <div className="flex items-center flex-col  justify-center p-5 rounded-t ">
                                <div className="w-32 h-32 relative rounded-full bg-yellow-500 text-center items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-44 h-44 absolute top-[-20px] right-[-22px] text-white "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                                        />
                                    </svg>
                                </div>

                                <div className="pt-16 text-center">
                                    <h1 className="font-[400] text-xl ">
                                        Confirm the Action
                                    </h1>
                                    <p className="text-gray-600">
                                        Is the data you entered correct?
                                    </p>
                                </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-center p-6 rounded-b gap-3">
                                <button
                                    className="text-[#1BBDD4] background-transparent  uppercase px-12 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-gray-100 rounded-md"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Yes, Confirm
                                </button>
                                <button
                                    className="text-gray-100 border border-gray-100 uppercase text-sm px-12 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
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
    } else return null;
};

export default ModalConfirm;
