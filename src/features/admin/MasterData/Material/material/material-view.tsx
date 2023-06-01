import { Breadcrumbs } from "@common/components";
import { PenAltIcon, TrashIcon } from "@common/components/icons";
import Pagination from "@common/components/pagination/Pagination";
import useMaterial from "./material-view-model";
import ModalDelete from "@common/components/Modal/ModalDelete";

const MaterialView = () => {
  const material = useMaterial();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["Material"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl">Material</h1>
          <button
            className="py-[12px] px-[20px] bg-[#667085] text-white align-middle rounded-[4px] text-sm"
            onClick={(e) => material.onAdd()}
          >
            + Add Data
          </button>
        </div>
        <div>
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-y border-[#D0D3D9]">
              <tr className="text-[#514E4E] text-sm">
                <th className="py-[18px] px-8 text-left">ID Material</th>
                <th className="py-[18px] px-6 text-left">Material</th>
                <th className="py-[18px] px-6 text-left">Material Details</th>
                <th className="py-[18px] px-2 text-left">Material Color</th>
                <th className="py-[18px] text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {material.material.data.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#D0D3D9] text-[#514E4E]"
                >
                  <td className="py-[18px] px-8 text-left">
                    {item.idMaterial}
                  </td>
                  <td className="py-[18px] px-6 text-left">{item.name}</td>
                  <td className="py-[18px] px-6 text-left">
                    {item.materialDetail}
                  </td>
                  <td className="py-[18px] px-6 text-left">
                    {item.color?.materialColor}
                  </td>
                  <td className="flex gap-3 justify-start items-center py-2">
                    <button
                      onClick={(e) => material.onEdit(item.id)}
                      className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-[4px] text-white flex gap-2"
                    >
                      <PenAltIcon />
                      <span className="text-sm">Edit</span>
                    </button>
                    <button
                      onClick={(e) => material.onDelete(item.id)}
                      className="py-[12px] px-[20px] bg-[#F04438] items-center rounded-[4px] text-white flex gap-2"
                    >
                      <TrashIcon />
                      <span className="text-sm">Delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-end px-8 py-6">
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
        onCancel={material.onConfirmCancel}
      />
    </div>
  );
};

export default MaterialView;
