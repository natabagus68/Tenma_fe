import React from "react";

const ModelSuccess = ({ showModal, setShowModal }) => {
    if (showModal) {
        return (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-20 pt-12">
                            {/*header*/}
                            <div className="flex items-center flex-col  justify-center p-5 rounded-t ">
                                <div className="w-32 h-32 relative rounded-full bg-green-500 text-center items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-62 h-12 absolute top-10 left-10 text-white "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>
                                </div>

                                <div className="pt-16 text-center">
                                    <h1 className="font-[400] text-xl ">
                                        Success
                                    </h1>
                                    <p className="text-gray-600">
                                        your data has been successfully saved.
                                    </p>
                                </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-center p-6 rounded-b gap-3">
                                <button
                                    className="text-gray-600 w-full background-transparent  uppercase px-12 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-gray-100 rounded-md"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
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

export default ModelSuccess;
