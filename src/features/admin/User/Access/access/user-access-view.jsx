import { Breadcrumbs } from "../../../../../common/components";
import {
  EyeIcon,
  MenuIcon,
  PenAltIcon,
  TrashIcon,
} from "../../../../../common/components/icons";
import Pagination from "../../../../../common/components/pagination/Pagination";
import Modal from "../Modal/Modal";
import useUserAccess from "./user-access-model-view";
import ModalDelete from "@common/components/Modal/ModalDelete";

const Access = () => {
  const model = useUserAccess();
  return (
    <>
      <ModalDelete
        showModal={model.openModal}
        onConfirm={model.confirmDelete}
        onCancel={model.cancelDelete}
      />{" "}
      <div className="text-[#514E4E] font-open-sans">
        <Breadcrumbs items={["User", "Access"]} />
        <div className="m-auto w-full border border-[#D0D3D9] rounded-md">
          <div className="w-full py-6 px-8 flex justify-between items-center">
            <h1 className="font-[700] text-2xl">Access</h1>
            <div className="flex justify-end">
              <button
                onClick={model.toAddData}
                className="bg-[#667085] text-white align-middle rounded-[4px] h-[46px] px-4 text-sm"
              >
                + Create New Role
              </button>
            </div>
          </div>
          <div>
            <table className="w-full">
              <thead className="bg-[#FAFAFB] border-y border-[#D0D3D9]">
                <tr>
                  <th className="py-6 text-start pl-10 text-[#514E4E] font-[500]">
                    Role
                  </th>
                  <th className="py-6 text-start pl-80 text-[#514E4E] font-[500]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {model.access.data.map((item, index) => (
                  <tr className="border-b border-[#D0D3D9]" key={index}>
                    <td className="py-4 text-start pl-10 text-[#514E4E] ">
                      {item.name}
                    </td>
                    <td className="py-2 pl-80 text-[#514E4E] flex gap-3 justify-start">
                      <button
                        onClick={() => model.toMenu(item.id)}
                        className="py-[12px] px-[20px] bg-sky-standart items-center rounded-[4px] text-white flex gap-2"
                      >
                        <MenuIcon />
                        <span className="text-sm">Menu</span>
                      </button>
                      <button
                        onClick={() => model.toEdit(item.id)}
                        className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-[4px] text-white flex gap-2"
                      >
                        <PenAltIcon />
                        <span className="text-sm">Edit</span>
                      </button>
                      <button
                        onClick={(e) => model.buttonDelete(e, item.id)}
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
              {model.access.totalRow && (
                <Pagination
                  row={model.access.totalRows}
                  limit={model.params.limit}
                  page={model.params.page}
                  onClick={model.onPageChange}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Access;
