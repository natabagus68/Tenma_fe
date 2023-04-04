import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../../common/components";

const EditRole = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <Breadcrumbs items={["User", "Account", "Edit New Role"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 ">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Edit New Role.
                    </h1>
                </div>
                <div className="w-full border-t-2 border-gray-100 py-14 px-9">
                    <form>
                        <div className="flex flex-col gap-3 ">
                            <label className="text-gray-600 font-sans">
                                Role Name
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-200 py-2 px-3 text-gray-600 rounded-md outline-none"
                                autoComplete="off"
                            />
                        </div>
                        <div className="flex justify-start w-full gap-5 items-center mt-5">
                            <button className="px-20 py-3 bg-sky-standart text-white text-center rounded-md">
                                Save
                            </button>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("../");
                                }}
                                className="px-20 py-3 border border-gray-200 text-gray-500 text-center rounded-md"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditRole;
