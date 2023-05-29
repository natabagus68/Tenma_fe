import { Breadcrumbs } from "@common/components";
import { PenAltIcon, TrashIcon } from "@common/components/icons";
import Pagination from "@common/components/pagination/Pagination";
import ModalDelete from "@common/components/Modal/ModalDelete";
import { useMachine } from "./machine-view-model";

const Machine = () => {
  const machine = useMachine();
  return (
    <>
      <Breadcrumbs items={["Machine"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md text-[#514E4E]">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl ">Machine</h1>
          <button className="py-[12px] px-[20px] bg-[#667085] text-white align-middle rounded-[4px]"
            onClick={machine.onAdd}
          >+ Add Data</button>
        </div>
        <div>
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-y border-[#D0D3D9]">
              <tr>
                <th className="py-6 px-8 text-start font-[600]">ID Machine</th>
                <th className="py-6 px-8 text-start font-[600]">No. Machine</th>
                <th className="py-6 px-8 text-start font-[600]">Action</th>
              </tr>
            </thead>
            <tbody>
              {machine.machine.data.map((item) => (
                <tr key={item.id} className="border-b border-[#D0D3D9]">
                  <td className="py-6 px-8 text-start">{item.idMachine}</td>
                  <td className="py-6 px-8 text-start">{item.noMachine}</td>
                  <td className="py-6 px-8 flex gap-3 justify-start">
                    <button onClick={(e) => machine.onEdit(item.id)}
                      className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-[4px] text-white flex gap-2"
                    >
                      <PenAltIcon />
                      <span className="text-sm">Edit</span>
                    </button>
                    <button
                      onClick={(e) => machine.onDelete(item.id)}
                      className="py-[12px] px-[20px] bg-[#F04438] items-center rounded-[4px] text-white flex gap-2"
                    >
                      <TrashIcon />
                      <span className="text-sm">Delete</span>
                    </button>
                  </td>
                </tr>
              ))}
              {machine.machine.data.length == 0 && (
                <>
                  <tr>
                    <td
                      colSpan={999}
                      className="text-center py-4 border-b border-[#D0D3D9] bg-gray-50"
                    >Empty</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
          <div className="flex items-center justify-end px-8 py-6">
            <Pagination
              row={machine.machine.totalRow}
              limit={machine.machine.limit}
              page={machine.machine.page}
              onClick={machine.onPageChange}
            />
          </div>
        </div>
      </div>
      <ModalDelete
        showModal={machine.deleteConfirmShow}
        setShowModal={machine.setDeleteConfirmShow}
        onConfirm={machine.onConfirmDelete}
      />
    </>
  );
};

export default Machine;
