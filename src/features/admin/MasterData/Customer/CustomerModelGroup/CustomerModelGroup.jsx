import ModalDelete from "@common/components/Modal/ModalDelete";
import Pagination from "@common/components/pagination/Pagination";
import { PenAltIcon, TrashIcon } from "@common/components/icons";
import useCustomerMOdelGroup from "./customer-model-group-view-model";

const CustomerModelGroup = () => {
  const cmg = useCustomerMOdelGroup();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <ModalDelete
        showModal={cmg.showModal}
        setShowModal={cmg.setShowModal}
        onConfirm={cmg.onConfirm}
        onCancel={cmg.cancelDelete}
      />
      <table className="w-full">
        <thead className="bg-[#FAFAFB] border-t border-b border-[#D0D3D9]">
          <tr className="text-[#514E4E]">
            <th className="py-6 text-start pl-10 font-[600]">
              Customer Model Group Name
            </th>
            <th className="py-6 text-start pl-10 font-[600]">Action</th>
          </tr>
        </thead>
        <tbody>
          {cmg.customerModelGroup.data.map((item, ind) => (
            <tr className="border-b border-[#D0D3D9]" key={ind}>
              <td className="py-6 text-start pl-10">{item.name}</td>
              <td className="py-6  pl-10 flex gap-3 justify-start">
                <button
                  onClick={() => cmg.toEdit(item.id)}
                  className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-[4px] text-white flex gap-2"
                >
                  <PenAltIcon />
                  <span className="text-sm">Edit</span>
                </button>
                <button
                  onClick={() => cmg.openModal(item.id)}
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
      <div className="flex items-center justify-end mt-4 px-5">
        {cmg.customerModelGroup.totalRow && (
          <Pagination
            row={cmg.customerModelGroup.totalRow}
            limit={cmg.customerModelGroup.limit}
            page={cmg.customerModelGroup.page}
            onClick={cmg.onPageChange}
          />
        )}
      </div>
    </div>
  );
};

export default CustomerModelGroup;

