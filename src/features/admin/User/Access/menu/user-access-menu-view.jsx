import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../../../../../common/components";
import { PenAltIcon } from "../../../../../common/components/icons";
import Pagination from "../../../../../common/components/pagination/Pagination";
import Modal from "../Modal/Modal";
import { useAccessMenu } from "./user-access-menu-view-model";

const Menu = () => {
    const model = useAccessMenu();
    return (
        <>
            {model.permisions && (
                <Modal
                    showHide={model.showModal}
                    setShowHide={model.setShowModal}
                    data={model.permisions}
                    onChange={model.handleChangeCheckedPermission}
                    onCancel={model.onCancelModalPermission}
                    onSave={model.savePermissions}
                />
            )}

            <div>
                <Breadcrumbs items={["User", "Account"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 ">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Account.
                    </h1>
                    <div className="flex justify-end gap-4">
                        <button
                            className="py-[12px] px-[20px] border border-gray-100 text-gray-500 align-middle rounded-md flex justify-center itemn-center gap-2"
                            onClick={model.onBack}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 m-auto"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                            Back
                        </button>
                    </div>
                </div>
                <div>
                    <table className="w-full">
                        <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                            <tr>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    <input
                                        type="checkbox"
                                        disabled
                                        checked
                                        className="w-8 h-8 accent-gray-700  "
                                    />
                                </th>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Menu Name
                                </th>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Permissions
                                </th>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {model.menu.data.map((item, i) => {
                                return (
                                    <tr
                                        key={item.id}
                                        className="border-b-2 border-gray-100"
                                    >
                                        <td className="py-6 text-center pl-3 text-gray-600 ">
                                            <input
                                                type="checkbox"
                                                checked={item.active}
                                                value={item.active}
                                                onChange={(e) =>
                                                    model.changeActiveMEnu(
                                                        e,
                                                        i,
                                                        item.moduleId
                                                    )
                                                }
                                                className="w-8 h-8 accent-gray-700  "
                                            />
                                        </td>
                                        <td className="py-6 text-center pl-3 text-gray-600 ">
                                            {item.name}
                                        </td>
                                        <td className="py-6 text-center pl-3 text-gray-600 ">
                                            {item.permission.map((e, i) => {
                                                if (e.active) {
                                                    return (
                                                        <p>
                                                            {e.name}{" "}
                                                            {i !== e.length
                                                                ? " "
                                                                : " | "}
                                                        </p>
                                                    );
                                                }
                                            })}
                                        </td>
                                        <td className="py-6  pl-3 text-gray-600 flex gap-3 justify-center">
                                            <button
                                                onClick={() =>
                                                    model.buttonModal(item.id)
                                                }
                                                className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2"
                                            >
                                                <PenAltIcon />
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="flex items-center justify-end mt-4 px-5">
                        <Pagination
                            row={model.menu.totalRow}
                            limit={model.menu.limit}
                            page={model.menu.page}
                            onClick={model.onPageChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
