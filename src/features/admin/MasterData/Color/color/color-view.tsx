import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import { PenAltIcon, TrashIcon } from "../../../../../common/components/icons";
import Pagination from "../../../../../common/components/pagination/Pagination";
import ModalDelete from "@common/components/Modal/ModalDelete";
import useColor from "./color-view-model";

const Color = () => {
    const color = useColor();
    return (
        <>
            <div>
                <Breadcrumbs items={["Color"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 ">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Tools.
                    </h1>
                    <button
                        className="py-[12px] px-[20px] bg-gray-600 text-white align-middle rounded-md"
                        onClick={(e) => color.onAdd()}
                    >
                        + Add Data
                    </button>
                </div>
                <div>
                    <table className="w-full">
                        <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                            <tr>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    ID Color
                                </th>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Material Color
                                </th>

                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {color.color.data.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-b-2 border-gray-100"
                                >
                                    <td className="py-6 text-center pl-3 text-gray-600 ">
                                        {item.idColor}
                                    </td>
                                    <td className="py-6 text-center pl-3 text-gray-600 ">
                                        {item.materialColor}
                                    </td>

                                    <td className="py-6  pl-3 text-gray-600 flex gap-3 justify-center">
                                        <button
                                            onClick={() =>
                                                color.onEdit(item.id)
                                            }
                                            className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2"
                                        >
                                            <PenAltIcon />
                                            Edit
                                        </button>
                                        <button
                                            onClick={() =>
                                                color.onDelete(item.id)
                                            }
                                            className="py-[12px] px-[20px] bg-[#F04438] items-center rounded-md text-white flex gap-2"
                                        >
                                            <TrashIcon />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex items-center justify-end mt-4 px-5">
                        <Pagination row={1} limit={10} page={undefined} />
                    </div>
                </div>
            </div>
            <ModalDelete
                showModal={color.deleteConfirmShow}
                setShowModal={color.setDeleteConfirmShow}
                onConfirm={color.onConfirmDelete}
            />
        </>
    );
};

export default Color;
