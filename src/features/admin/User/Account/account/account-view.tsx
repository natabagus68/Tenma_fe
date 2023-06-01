import { Breadcrumbs } from "@common/components";
import { EyeIcon, PenAltIcon, TrashIcon, SearchIcon } from "@common/components/icons";
import ModalDelete from "@common/components/Modal/ModalDelete";
import Pagination from "@common/components/pagination/Pagination";
import ToggleNew from "@common/components/input/ToggleNew";
import { useAccount } from "./account-model";

const Account = () => {
  const model = useAccount();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <ModalDelete
        showModal={model.deleteConfirmShow}
        setShowModal={model.setDeleteConfirmShow}
        onConfirm={model.onConfirmDelete}
      />
      <Breadcrumbs items={["User", "Account"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-lg">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl">Account</h1>
          <div className="flex justify-end gap-4">
            <div className="relative">
              <SearchIcon color={"#D0D3D9"} className="absolute top-[35%] left-[5%]" />
              <input
                type="text"
                name="search"
                placeholder="Search "
                value={model.userParam.q}
                onChange={model.onSearch}
                className="outline-none border border-[#D0D3D9] rounded-[4px] h-[46px] px-4 pl-10"
              />
            </div>
            <button
              className="bg-[#667085] text-white align-middle rounded-[4px] h-[46px] px-4 text-sm"
              onClick={model.onCreateNewAccount}
            >+ Create New Account</button>
          </div>
        </div>
        <div>
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-y border-[#D0D3D9]">
              <tr className="text-sm">
                <th className="py-[18px] pl-8 text-start font-[600]">Status</th>
                <th className="py-[18px] pl-4 text-start font-[600]">Nama</th>
                <th className="py-[18px] pl-4 text-start font-[600]">Email</th>
                <th className="py-[18px] pl-4 text-start font-[600]">Role</th>
                <th className="py-[18px] pl-4 text-start font-[600]">Action</th>
              </tr>
            </thead>
            <tbody>
              {model.account.data.map((item) => (
                <tr key={item.id} className="border-b border-[#D0D3D9]">
                  <td className="py-[18px] pl-8 text-start">
                    <ToggleNew
                      status={item.is_verified}
                      id={item.id}
                      handleClick={model.onToogleActive}
                    />
                  </td>
                  <td className="py-[18px] pl-4 text-start">{item.name}</td>
                  <td className="py-[18px] pl-4 text-start">{item.email}</td>
                  <td className="py-[18px] px-12 text-start">{item.roles.map((item) => item.name).join(", ")}</td>
                  <td className="py-2 pl-4 flex gap-3 justify-start">
                    <button onClick={(e) => model.onDetail(e, item.id)}
                      className="py-[12px] px-[18px] bg-sky-standart items-center rounded-[4px] text-white flex gap-2"
                    >
                      <EyeIcon />
                      <span className="text-sm">Detail</span>
                    </button>
                    <button onClick={(e) => model.onEdit(e, item.id)}
                      className="py-[10px] px-[18px] bg-[#F79009] items-center rounded-[4px] text-white flex gap-2"
                    >
                      <PenAltIcon />
                      <span className="text-sm">Edit</span>
                    </button>
                    <button onClick={(e) => model.onDelete(e, item.id)}
                      className="py-[10px] px-[18px] bg-[#F04438] items-center rounded-[4px] text-white flex gap-2"
                    > <TrashIcon />
                      <span className="text-sm">Delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-end px-8 py-6">
            <Pagination
              row={model.account.totalRow}
              limit={model.account.limit}
              page={model.account.page}
              onClick={model.onPageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;