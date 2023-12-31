import { Breadcrumbs } from "@common/components";
import { EyeIcon, PenAltIcon, TrashIcon } from "@common/components/icons";
import Pagination from "@common/components/pagination/Pagination";
import ModalDelete from "@common/components/Modal/ModalDelete";
import { usePart } from "../part-view-model";
import { PartApiRepository } from "@data/api/part-api-repository";

const Part = () => {
  const part = usePart(new PartApiRepository());
  // console.log(part.partRef.current.totalRow);
  return (
    <div className="text-[#514E43] font-open-sans">
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
          <div className="flex gap-3 items-center">
            <button
              type="button"
              role="button"
              className="py-[12px] px-[20px] text-white align-middle rounded-md bg-[#667085] text-sm"
              onClick={(e) => part.onAddData()}
            >
              + Add Data
            </button>
            {/* <input
              type="text"
              value={part.params.q}
              onChange={part.handelSearch}
              placeholder="Search"
              className="border border-gray-300 rounded-md py-2 px-3 outline-none text-gray-700"
            /> */}
          </div>
        </div>
        <div>
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-y border-[#D0D3D9]">
              <tr className="text-left font-[600] text-sm">
                <th className="py-[22px] pl-8">Customer Model</th>
                <th className="py-[22px] px-4">Part Code</th>
                <th className="py-[22px] px-4">Part Name</th>
                <th className="py-[22px] px-4 w-[20%]">Color</th>
                <th className="py-[22px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {part.part.data.map((item, i) => {
                return (
                  <tr
                    className="border-b border-[#D0D3D9] text-left font-[400]"
                    key={i}
                  >
                    <td className="py-[12px] pl-8">{item.customerModel}</td>
                    <td className="py-[12px] px-4">{item.partCode}</td>
                    <td className="py-[12px] px-4">{item.partName}</td>
                    <td className="py-[12px] px-4">{item.materialColor}</td>
                    <td className="py-[12px] pr-8 flex gap-3 items-center">
                      <button
                        className="h-[46px] px-4 bg-[#1BBDD4] items-center rounded-[4px] text-white flex gap-2 text-sm"
                        onClick={(e) => part.onDetail(item)}
                      >
                        <EyeIcon />
                        <span className="text-sm">Detail</span>
                      </button>
                      <button
                        onClick={(e) => part.onEdit(item)}
                        className="h-[46px] px-4 bg-[#F79009] items-center rounded-[4px] text-white flex gap-2 text-sm"
                      >
                        <PenAltIcon />
                        <span className="text-sm">Edit</span>
                      </button>
                      <button
                        onClick={(e) => part.toDuplicate(item)}
                        className="h-[46px] px-4 bg-[#F79009] items-center rounded-[4px] text-white flex gap-2 text-sm"
                      >
                        <PenAltIcon />
                        <span className="text-sm">Duplicate</span>
                      </button>
                      <button
                        onClick={(e) => part.onDelete(item)}
                        className="h-[46px] px-4 bg-[#F04438] items-center rounded-[4px] text-white flex gap-2 text-sm"
                      >
                        <TrashIcon />
                        <span className="text-sm">Delete</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex items-center justify-end mt-6 px-8">
            {part.pageinationShow && (
              <Pagination
                row={part.countRow}
                limit={part.params.limit}
                page={part.params.page}
                onClick={part.onPageChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part;
