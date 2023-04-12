import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import {
    EyeIcon,
    PenAltIcon,
    TrashIcon,
} from "../../../../../common/components/icons";
import Pagination from "../../../../../common/components/pagination/Pagination";
import ModalDelete from "../../../../../common/components/Modal/ModalDelete";
import { usePart } from "../part-view-model";
import { PartApiRepository } from "@data/api/part-api-repository";

const Part = () => {
    const part = usePart(new PartApiRepository());
    return (
        <>
            <>
                <ModalDelete
                    showModal={part.deleteConfirmShow}
                    setShowModal={part.setDeleteConfirmShow}
                    onConfirm={part.onConfirmDelete}
                />
                <div>
                    <Breadcrumbs items={["Part"]} />
                </div>
                <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 ">
                    <div className="w-full py-5 px-12 flex justify-between items-center">
                        <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                            Part
                        </h1>
                        <button
                            className="py-[12px] px-[20px] bg-gray-600 text-white align-middle rounded-md"
                            type="button"
                            role="button"
                            onClick={(e) => part.onAddData()}
                        >
                            + Add Data
                        </button>
                    </div>
                    <div>
                        <table className="w-full">
                            <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                                <tr>
                                    <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                        Cust. Item CD
                                    </th>
                                    <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                        Part Code
                                    </th>
                                    <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                        Part Name
                                    </th>
                                    <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                        OLD Part Number
                                    </th>
                                    <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {part.part.data.map((item, i) => {
                                    return (
                                        <tr
                                            className="border-b-2 border-gray-100"
                                            key={i}
                                        >
                                            <td className="py-6 text-start pl-10 text-gray-600 ">
                                                {item.custItemId}
                                            </td>
                                            <td className="py-6 text-start pl-10 text-gray-600 ">
                                                {item.partCode}
                                            </td>
                                            <td className="py-6 text-start pl-10 text-gray-600 ">
                                                {item.partName}
                                            </td>
                                            <td className="py-6 text-start pl-10 text-gray-600 ">
                                                {item.oldPartNumber}
                                            </td>
                                            <td className="py-6  pl-10 text-gray-600 flex gap-3 justify-start">
                                                <button
                                                    className="py-[12px] px-[20px] bg-[#1BBDD4] items-center rounded-md text-white flex gap-2"
                                                    onClick={(e) =>
                                                        part.onDetail(item)
                                                    }
                                                >
                                                    <EyeIcon />
                                                    Detail
                                                </button>
                                                <button
                                                    onClick={(e) =>
                                                        part.onEdit(item)
                                                    }
                                                    className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2"
                                                >
                                                    <PenAltIcon />
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={(e) =>
                                                        part.onDelete(item)
                                                    }
                                                    className="py-[12px] px-[20px] bg-[#F04438] items-center rounded-md text-white flex gap-2"
                                                >
                                                    <TrashIcon />
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <div className="flex items-center justify-end mt-4 px-5">
                            {part.part.data.length > 0 ? (
                                <Pagination
                                    row={part.part.lastPage * part.part.limit}
                                    limit={part.part.limit}
                                    page={part.part.page}
                                    onClick={(page = 1) =>
                                        part.onPageChange(page)
                                    }
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};

export default Part;
