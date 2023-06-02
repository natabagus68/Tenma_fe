import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import {
  EyeIcon,
  PenAltIcon,
  TrashIcon,
} from "../../../../../common/components/icons";
import ModalDelete from "../../../../../common/components/Modal/ModalDelete";
import Pagination from "../../../../../common/components/pagination/Pagination";
import { useAccount } from "./account-model";
import ToggleNew from "../../../../../common/components/input/ToggleNew";

const Account = () => {
  const model = useAccount();
  return (
    <>
      <ModalDelete
        showModal={model.deleteConfirmShow}
        setShowModal={model.setDeleteConfirmShow}
        onConfirm={model.onConfirmDelete}
        onCancel={model.cancelDelete}
      />
      <div>
        <Breadcrumbs items={["User", "Account"]} />
      </div>
      <div className="m-auto w-full border border-gray-100 rounded-lg pb-6 ">
        <div className="w-full py-5 px-10 flex justify-between items-center">
          <h1 className="font-[700] text-2xl text-gray-700 font-open-sans">
            Account
          </h1>
          <div className="flex justify-end gap-4">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute top-3 left-2 text-gray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                name="search"
                value={model.userParam.q}
                placeholder="Search "
                onChange={model.onSearch}
                className="outline-none pl-9 py-4  border border-gray-100 rounded-xl w-[280px] text-sm placeholder:text-gray-100 text-gray-600"
              />
            </div>
            <button
              className="py-[12px] px-[20px] bg-gray-600 text-white align-middle rounded-md"
              onClick={model.onCreateNewAccount}
            >
              + Create New Account
            </button>
          </div>
        </div>
        <div>
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-y border-gray-100">
              <tr>
                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                  Status
                </th>
                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                  Nama
                </th>
                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                  Email
                </th>
                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                  Role
                </th>
                <th className="py-6 text-start pl-10 text-gray-600 font-[500]">
                  Action
                </th>
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
                  <td className="py-[18px] px-12 text-start">
                    {item.roles.map((item) => item.name).join(", ")}
                  </td>
                  <td className="py-2 pl-4 flex gap-3 justify-start">
                    <button
                      onClick={(e) => model.onDetail(e, item.id)}
                      className="py-[12px] px-[18px] bg-sky-standart items-center rounded-[4px] text-white flex gap-2"
                    >
                      <EyeIcon />
                      <span className="text-sm">Detail</span>
                    </button>
                    <button
                      onClick={(e) => model.onEdit(e, item.id)}
                      className="py-[10px] px-[18px] bg-[#F79009] items-center rounded-[4px] text-white flex gap-2"
                    >
                      <PenAltIcon />
                      <span className="text-sm">Edit</span>
                    </button>
                    <button
                      onClick={(e) => model.onDelete(e, item.id)}
                      className="py-[10px] px-[18px] bg-[#F04438] items-center rounded-[4px] text-white flex gap-2"
                    >
                      {" "}
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
              row={model.account.totalRow}
              limit={model.account.limit}
              page={model.account.page}
              onClick={model.onPageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;

