import { Breadcrumbs } from "@common/components";
import { PenAltIcon, TrashIcon } from "@common/components/icons";
import Pagination from "@common/components/pagination/Pagination";
import ModalDelete from "@common/components/Modal/ModalDelete";
import useColor from "./color-view-model";

const Color = () => {
  const color = useColor();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["Color"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md pb-6 ">
        <div className="w-full py-5 px-9 flex justify-between items-center">
          <h1 className="font-[700] text-2xl">
            Color
          </h1>
          <button
            className="py-[12px] px-[20px] text-[#FFFFFF] bg-[#667085] align-middle rounded-[4px] text-sm"
            onClick={(e) => color.onAdd()}
          >
            + Add Data
          </button>
        </div>
        <div>
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-y border-gray-100">
              <tr>
                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                  ID Color
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
              {color.color.data.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="py-2 text-start pl-10 text-gray-600 ">
                    {item.idColor}
                  </td>
                  <td className="py-2 text-start pl-10 text-gray-600 ">
                    {item.materialColor}
                  </td>

                  <td className="py-2 pl-10 text-gray-600 flex gap-3 justify-start">
                    <button
                      onClick={() => color.onEdit(item.id)}
                      className="px-[20px] bg-[#F79009] items-center rounded-[4px] text-white flex gap-2"
                    >
                      <PenAltIcon />
                      <span className="text-sm">Edit</span>
                    </button>
                    <button
                      onClick={() => color.onDelete(item.id)}
                      className="py-3 px-[20px] bg-[#F04438] items-center rounded-[4px] text-white flex gap-2"
                    >
                      <TrashIcon />
                      <span className="text-sm">Delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-end mt-4 px-5">
            <Pagination
              row={color.color.totalRow}
              limit={color.color.limit}
              page={color.color.page}
              onClick={color.onPageChange}
            />
          </div>
        </div>
      </div>
      <ModalDelete
        showModal={color.deleteConfirmShow}
        setShowModal={color.setDeleteConfirmShow}
        onConfirm={color.onConfirmDelete}
        onCancel={color.cancelDelete}
      />
    </div>
  );
};

export default Color;
