import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import { PenAltIcon, TrashIcon } from "../../../../../common/components/icons";
import Pagination from "../../../../../common/components/pagination/Pagination";
import useTool from "./tool-view-model";
import ModalDelete from "@common/components/Modal/ModalDelete";

const ToolView = () => {
    const tool = useTool();
    return (
        <>
            <div>
                <Breadcrumbs items={["Tools"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 ">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Tools
                    </h1>
                    <button
                        className="py-[12px] px-[20px] bg-gray-600 text-white align-middle rounded-md"
                        onClick={() => tool.onAdd()}
                    >
                        + Add Data
                    </button>
                </div>
                <div>
                    <table className="w-full">
                        <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                            <tr>
                                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                    ID Tools
                                </th>
                                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                    Tool Code
                                </th>
                                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                    Name
                                </th>
                                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                    Address
                                </th>
                                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tool.tool.data.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-b-2 border-gray-100"
                                >
                                    <td className="py-6 text-start pl-10 text-gray-600 ">
                                        {item.idTool}
                                    </td>
                                    <td className="py-6 text-start pl-10 text-gray-600 ">
                                        {item.toolCode}
                                    </td>

                                    <td className="py-6 text-start pl-10 text-gray-600 ">
                                        {item.name}
                                    </td>
                                    <td className="py-6 text-start pl-10 text-gray-600 ">
                                        {item.address}
                                    </td>
                                    <td className="py-6  pl-10 text-gray-600 flex gap-3 justify-start">
                                        <button
                                            onClick={() => tool.onEdit(item.id)}
                                            className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2"
                                        >
                                            <PenAltIcon />
                                            Edit
                                        </button>
                                        <button
                                            onClick={() =>
                                                tool.onDelete(item.id)
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
                showModal={tool.deleteConfirmShow}
                setShowModal={tool.setDeleteConfirmShow}
                onConfirm={tool.onConfirmDelete}
            />
        </>
    );
};

export default ToolView;
