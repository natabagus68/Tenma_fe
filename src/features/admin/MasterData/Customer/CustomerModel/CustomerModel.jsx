import { PenAltIcon, TrashIcon } from "@common/components/icons";
import ModalDelete from "@common/components/Modal/ModalDelete";
import Pagination from "@common/components/pagination/Pagination";
import useCustomerModel from "./customer-model-view-model";

const CustomerModel = () => {
  const customerModel = useCustomerModel();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <ModalDelete
        showModal={customerModel.showModal}
        setShowModal={customerModel.setShowModal}
        onConfirm={customerModel.onConfirmDelete}
      />
      <table className="w-full">
        <thead className="bg-[#FAFAFB] border-y border-[#D0D3D9]">
          <tr>
            <th className="py-4 text-start pl-10 font-[600] text-sm">Customer Model Name</th>
            <th className="py-4 text-start pl-10 font-[600] text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {customerModel.customerModel?.data?.map((item, ind) => (
            <tr className="border-b border-[#D0D3D9]" key={ind}>
              <td className="py-2 text-start pl-10 font-[400]">{item.name}</td>
              <td className="py-2 pl-10 flex gap-3 justify-start">
                <button onClick={() => customerModel.toEdit(item.id)}
                  className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-[4px] text-white flex gap-2"
                >
                  <PenAltIcon />
                  <span className="text-sm">Edit</span>
                </button>
                <button onClick={() => customerModel.onDelete(item.id)}
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
        <Pagination
          row={customerModel.customerModel.totalRow}
          limit={customerModel.customerModel.limit}
          page={customerModel.customerModel.page}
          onClick={customerModel.onPageChange}
        />
      </div>
    </div>
  );
};

export default CustomerModel;