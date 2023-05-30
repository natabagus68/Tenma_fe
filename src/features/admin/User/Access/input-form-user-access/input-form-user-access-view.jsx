import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../../../common/components";
import useInputFormAccess from "./input-form-user-access-view-modal";

const InputFormUserAccess = () => {
    const model = useInputFormAccess();
    return (
        <>
            <div>
                <Breadcrumbs items={[
                    "User", 
                    "Account", 
                    model.id ? "Edit Role" : "Add New Role"] } />
            </div>
            <div className="m-auto w-full border border-gray-100 rounded-lg pb-6 ">
                <div className="w-full py-7 px-8 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-open-sans">
                        { model.id ? "Edit Role" : "Add New Role"}
                    </h1>
                </div>
                <div className="w-full border-t border-gray-100 py-5 px-8 pb-80">
                    <form>
                        <div className="flex flex-col gap-3 ">
                            <label className="text-gray-600 font-open-sans">
                                Role Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={model.access.name}
                                onChange={(e) => model.onChangeInput(e)}
                                placeholder="Input new role"
                                className="w-[80%]  border border-gray-200 py-2 px-3 text-gray-800 rounded-md outline-none font-open-sans font-600"
                                autoComplete="off"
                            />
                        </div>
                        <div className="flex justify-start w-full gap-5 items-center mt-5">
                            <button
                                onClick={(e) => model.onSave(e)}
                                className="px-20 py-3 bg-sky-standart text-white text-center rounded-md"
                            >
                                Save
                            </button>
                            <button
                                onClick={model.onCancel}
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

export default InputFormUserAccess;
