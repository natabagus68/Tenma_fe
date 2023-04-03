import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Breadcrumbs, Loader } from "../../../../common/components";
import {
    EyeIcon,
    PenAltIcon,
    TrashIcon,
} from "../../../../common/components/icons";
import Pagination from "../../../../common/components/pagination/Pagination";
import { useGetPartQuery } from "../../../../app/services/partService";
import ModalDelete from "../../../../common/components/Modal/ModalDelete";

const Part = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [getPartParam, setGetPartParam] = useState({
        page: searchParams.get('page') || 1
    });
    const { data: parts, isLoading } = useGetPartQuery(getPartParam);
    useEffect(() => {
        setSearchParams(getPartParam);
    }, [getPartParam]);
    return (
        <>
            <>
                <ModalDelete
                    showModal={ showModal }
                    setShowModal={ setShowModal }
                />
                <div>
                    <Breadcrumbs items={ ["Part"] } />
                </div>
                <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 ">
                    <div className="w-full py-5 px-12 flex justify-between items-center">
                        <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                            Part.
                        </h1>
                        <button
                            className="py-[12px] px-[20px] bg-gray-600 text-white align-middle rounded-md"
                            onClick={ (e) => {
                                e.preventDefault();
                                navigate("add-data");
                            } }
                        >
                            + Add Data
                        </button>
                    </div>
                    <div>
                        <table className="w-full">
                            <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                                <tr>
                                    <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                        Cust. Item CD
                                    </th>
                                    <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                        Part Code
                                    </th>
                                    <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                        Part Name
                                    </th>
                                    <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                        OLD Part Number
                                    </th>
                                    <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                { parts?.data?.map((item, i) => {
                                    return (
                                        <tr
                                            className="border-b-2 border-gray-100"
                                            key={ i }
                                        >
                                            <td className="py-6 text-center pl-3 text-gray-600 ">
                                                { item.cust_item_cd }
                                            </td>
                                            <td className="py-6 text-center pl-3 text-gray-600 ">
                                                { item.part_cd }
                                            </td>
                                            <td className="py-6 text-center pl-3 text-gray-600 ">
                                                { item.part_name }
                                            </td>
                                            <td className="py-6 text-center pl-3 text-gray-600 ">
                                                { item.old_part_number }
                                            </td>
                                            <td className="py-6  pl-3 text-gray-600 flex gap-3 justify-center">
                                                <button
                                                    className="py-[12px] px-[20px] bg-[#1BBDD4] items-center rounded-md text-white flex gap-2"
                                                    onClick={ (e) => {
                                                        e.preventDefault();
                                                        navigate("detail", {
                                                            state: item,
                                                        });
                                                    } }
                                                >
                                                    <EyeIcon />
                                                    Detail
                                                </button>
                                                <button className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2">
                                                    <PenAltIcon />
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={ (e) => {
                                                        e.preventDefault();
                                                        setShowModal(
                                                            !showModal
                                                        );
                                                    } }
                                                    className="py-[12px] px-[20px] bg-[#F04438] items-center rounded-md text-white flex gap-2"
                                                >
                                                    <TrashIcon />
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                }) }
                            </tbody>
                        </table>
                        <div className="flex items-center justify-end mt-4 px-5">
                            { parts ? (
                                <Pagination
                                    row={ parts?.totalRows }
                                    limit={ parts?.limit }
                                    page={ getPartParam.page }
                                    onClick={ (page = 1) => setSearchParams(prevState => ({ ...prevState, page })) }
                                />
                            ) : (
                                ""
                            ) }
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};

export default Part;
