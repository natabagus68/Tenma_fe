import React from "react";
import { PenAltIcon, TrashIcon } from "../../../../../common/components/icons";
import useCustomerModel from "./customer-model-view-model";
import ModalDelete from "@common/components/Modal/ModalDelete";
import Pagination from "@common/components/pagination/Pagination";
const CustomerModel = () => {
    const customerModel = useCustomerModel();
    return (
        <>
            <ModalDelete
                showModal={customerModel.showModal}
                setShowModal={customerModel.setShowModal}
                onConfirm={customerModel.onConfirmDelete}
            />
            <table className="w-full">
                <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                    <tr>
                        <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                            Customer Model Name
                        </th>

                        <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {customerModel.customerModel?.data?.map((item, ind) => (
                        <tr className="border-b-2 border-gray-100" key={ind}>
                            <td className="py-6 text-start pl-10 text-gray-600 ">
                                {item.name}
                            </td>

                            <td className="py-6  pl-10 text-gray-600 flex gap-3 justify-start">
                                <button
                                    onClick={() =>
                                        customerModel.toEdit(item.id)
                                    }
                                    className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2"
                                >
                                    <PenAltIcon />
                                    Edit
                                </button>
                                <button
                                    onClick={() =>
                                        customerModel.onDelete(item.id)
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
                <Pagination
                    row={customerModel.customerModel.totalRow}
                    limit={customerModel.customerModel.limit}
                    page={customerModel.customerModel.page}
                    onClick={customerModel.onPageChange}
                />
            </div>
        </>
    );
};

export default CustomerModel;
