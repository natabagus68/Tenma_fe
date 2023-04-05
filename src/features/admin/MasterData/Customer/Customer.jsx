import React from "react";
import { Breadcrumbs } from "../../../../common/components";
import {
    EyeIcon,
    PenAltIcon,
    TrashIcon,
} from "../../../../common/components/icons";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../../../../common/components/pagination/Pagination";
import useCustomer from "./customer-view-model";
import ModalDelete from "@common/components/Modal/ModalDelete";
const Customer = () => {
    const customer = useCustomer();
    if (customer.customer) {
        console.log(customer.customer);
    }
    return (
        <>
            <ModalDelete
                showModal={customer.showModal}
                setShowModal={customer.setShowModal}
                onConfirm={customer.onConfirm}
            />
            <table className="w-full">
                <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                    <tr>
                        <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                            Customer Name
                        </th>

                        <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {customer.customer?.data?.map((item, ind) => (
                        <tr className="border-b-2 border-gray-100" key={ind}>
                            <td className="py-6 text-center pl-3 text-gray-600 ">
                                {item.name}
                            </td>

                            <td className="py-6  pl-3 text-gray-600 flex gap-3 justify-center">
                                <button
                                    onClick={() => customer.onEdit(item.id)}
                                    className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2"
                                >
                                    <PenAltIcon />
                                    Edit
                                </button>
                                <button
                                    onClick={() => customer.openModal(item.id)}
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
                <Pagination row={1} limit={10} />
            </div>
        </>
    );
};

export default Customer;
