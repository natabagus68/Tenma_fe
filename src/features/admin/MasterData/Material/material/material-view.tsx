import { Breadcrumbs } from "@common/components";
import { PenAltIcon, TrashIcon } from "@common/components/icons";
import Pagination from "@common/components/pagination/Pagination";
import useMaterial from "./material-view-model";
import ModalDelete from "@common/components/Modal/ModalDelete";

const MaterialView = () => {
    const material = useMaterial();
    return (
        <>
            <div>
                <Breadcrumbs items={["Material"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 ">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Material
                    </h1>
                    <button
                        className="py-[12px] px-[20px] bg-gray-600 text-white align-middle rounded-md"
                        onClick={(e) => material.onAdd()}
                    >
                        + Add Data
                    </button>
                </div>
                <div>
                    <table className="w-full">
                        <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                            <tr>
                                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                    ID Material
                                </th>
                                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                    Material
                                </th>
                                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                    Material Details
                                </th>
                                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                    Material Color
                                </th>
                                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {material.material.data.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-b-2 border-gray-100"
                                >
                                    <td className="py-6 text-start pl-10 text-gray-600 ">
                                        {item.idMaterial}
                                    </td>
                                    <td className="py-6 text-start pl-10 text-gray-600 ">
                                        {item.name}
                                    </td>
                                    <td className="py-6 text-start pl-10 text-gray-600 ">
                                        {item.materialDetail}
                                    </td>
                                    <td className="py-6 text-start pl-10 text-gray-600 ">
                                        {item.color?.materialColor}
                                    </td>
                                    <td className="py-6  pl-10 text-gray-600 flex gap-3 justify-start">
                                        <button
                                            onClick={(e) =>
                                                material.onEdit(item.id)
                                            }
                                            className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2"
                                        >
                                            <PenAltIcon />
                                            Edit
                                        </button>
                                        <button
                                            onClick={(e) =>
                                                material.onDelete(item.id)
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
                            row={material.material.totalRow}
                            limit={material.material.limit}
                            page={material.material.page}
                            onClick={material.onPageChange}
                        />
                    </div>
                </div>
            </div>
            <ModalDelete
                showModal={material.deleteConfirmShow}
                setShowModal={material.setDeleteConfirmShow}
                onConfirm={material.onConfirmDelete}
            />
        </>
    );
};

export default MaterialView;
