import { PenAltIcon, TrashIcon } from "@common/components/icons";
import Pagination from "@common/components/pagination/Pagination";
import ModalDelete from "@common/components/Modal/ModalDelete";
import useCustomer from "./customer-view-model";

const Customer = () => {
  const customer = useCustomer();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <ModalDelete
        showModal={customer.showModal}
        setShowModal={customer.setShowModal}
        onCancel={customer.cancelDelete}
        onConfirm={customer.onConfirm}
        id={customer.id}
      />
      <table className="w-full">
        <thead className="bg-[#FAFAFB] border-y border-[#D0D3D9]">
          <tr>
            <th className="py-4 text-start pl-10 font-[600] text-sm">
              Customer Name
            </th>
            <th className="py-4 text-start pl-10 font-[600] text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {customer.customer?.data?.map((item, ind) => (
            <tr className="border-b border-[#D0D3D9]" key={ind}>
              <td className="py-6 text-start pl-10 ">{item.name}</td>
              <td className="py-6  pl-10 flex gap-3 justify-start">
                <button
                  onClick={() => customer.onEdit(item.id)}
                  className="w-[100px] h-[46px] bg-[#F79009] rounded-[4px] text-white flex items-center justify-center gap-2"
                >
                  <PenAltIcon />
                  <span className="text-sm">Edit</span>
                </button>
                <button
                  onClick={() => customer.openModal(item.id)}
                  className="w-[100px] h-[46px] bg-[#F04438] rounded-[4px] text-white flex items-center justify-center gap-2"
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
        {customer.customer.totalRow && (
          <Pagination
            row={customer.customer.totalRow}
            limit={customer.params.limit}
            page={customer.params.page}
            onClick={customer.onPageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Customer;
