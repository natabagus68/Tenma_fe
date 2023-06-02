import { Breadcrumbs } from "@common/components";
import { EyeIcon, PenAltIcon, TrashIcon } from "@common/components/icons";
import Pagination from "@common/components/pagination/Pagination";
import ModalDelete from "@common/components/Modal/ModalDelete";
import { usePart } from "../part-view-model";
import { PartApiRepository } from "@data/api/part-api-repository";

const Part = () => {
  const part = usePart(new PartApiRepository());
  return (
    <>
      <ModalDelete
        showModal={part.deleteConfirmShow}
        setShowModal={part.setDeleteConfirmShow}
        onConfirm={part.onConfirmDelete}
        onCancel={part.cancelDelete}
      />
      <Breadcrumbs items={["Part"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md pb-6">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl text-[#514E4E] font-sans">Part</h1>
          <button
            type="button"
            role="button"
            className="py-[12px] px-[20px] text-white align-middle rounded-md bg-[#667085]"
            onClick={(e) => part.onAddData()}
          >
            + Add Data
          </button>
        </div>
        <div>
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-y border-[#D0D3D9]">
              <tr className="text-[#514E4E] font-[600] text-left">
                <th className="py-[22px] pl-8">Cust. Item CD</th>
                <th className="py-[22px] px-4">Part Code</th>
                <th className="py-[22px] px-4">Part Name</th>
                <th className="py-[22px] px-4 w-[20%]">OLD Part Number</th>
                <th className="py-[22px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {part.part.data.map((item, i) => {
                return (
                  <tr
                    className="border-b border-[#D0D3D9] text-left text-[#514E4E]"
                    key={i}
                  >
                    <td className="py-[12px] pl-8">{item.custItemId}</td>
                    <td className="py-[12px] px-4">{item.partCode}</td>
                    <td className="py-[12px] px-4">{item.partName}</td>
                    <td className="py-[12px] px-4">{item.oldPartNumber}</td>
                    <td className="py-[12px] pr-8 flex gap-3 items-center text-[#514E4E]">
                      <button
                        className="h-[46px] px-4 bg-[#1BBDD4] items-center rounded-md text-white flex gap-2"
                        onClick={(e) => part.onDetail(item)}
                      >
                        <EyeIcon />
                        <span>Detail</span>
                      </button>
                      <button
                        onClick={(e) => part.onEdit(item)}
                        className="h-[46px] px-4 bg-[#F79009] items-center rounded-md text-white flex gap-2"
                      >
                        <PenAltIcon />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={(e) => part.onDelete(item)}
                        className="h-[46px] px-4 bg-[#F04438] items-center rounded-md text-white flex gap-2"
                      >
                        <TrashIcon />
                        <span>Delete</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex items-center justify-end mt-6 px-8">
            {part.part.data.length > 0 ? (
              <Pagination
                row={part.part.lastPage * part.part.limit}
                limit={part.part.limit}
                page={part.part.page}
                onClick={(page = 1) => part.onPageChange(page)}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Part;

