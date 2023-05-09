import ModalDelete from "@common/components/Modal/ModalDelete";
import Pagination from "@common/components/pagination/Pagination";
import React from "react";
import { PenAltIcon, TrashIcon } from "../../../../../common/components/icons";
import useCustomerMOdelGroup from "./customer-model-group-view-model";
const CustomerModelGroup = () => {
    const cmg = useCustomerMOdelGroup();
    return (
        <>
            <ModalDelete
                showModal={cmg.showModal}
                setShowModal={cmg.setShowModal}
                onConfirm={cmg.onConfirm}
            />
            <table className="w-full">
                <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                    <tr>
                        <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                            Customer Model Group Name
                        </th>

                        <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cmg.customerModelGroup.data.map((item, ind) => (
                        <tr className="border-b-2 border-gray-100" key={ind}>
                            <td className="py-6 text-start pl-10 text-gray-600 ">
                                {item.name}
                            </td>

                            <td className="py-6  pl-10 text-gray-600 flex gap-3 justify-start">
                                <button
                                    onClick={() => cmg.toEdit(item.id)}
                                    className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2"
                                >
                                    <PenAltIcon />
                                    Edit
                                </button>
                                <button
                                    onClick={() => cmg.openModal(item.id)}
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
                <Pagination
                    row={cmg.customerModelGroup.totalRow}
                    limit={cmg.customerModelGroup.limi}
                    page={cmg.customerModelGroup.page}
                    onClick={cmg.onPageChange}
                />
            </div>
        </>
    );
};

export default CustomerModelGroup;
