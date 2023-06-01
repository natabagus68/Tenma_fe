import { Breadcrumbs } from "@common/components";
import { PenAltIcon, ArrowIcon } from "@common/components/icons";
import Pagination from "@common/components/pagination/Pagination";
import Modal from "../Modal/Modal";
import { useAccessMenu } from "./user-access-menu-view-model";

const Menu = () => {
  const model = useAccessMenu();
  return (
    <div className="text-[#514E4E] font-open-sans">
      {model.permisions && (
        <Modal
          showHide={model.showModal}
          setShowHide={model.setShowModal}
          data={model.permisions}
          onChange={model.handleChangeCheckedPermission}
          onCancel={model.onCancelModalPermission}
          onSave={model.savePermissions}
        />
      )}
      <Breadcrumbs items={["Access", "Menu"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl">Menu</h1>
          <div className="flex justify-end gap-4">
            <button
              className="py-[12px] px-[20px] border border-[#667085] text-[#667085] align-middle rounded-[4px] flex justify-center itemn-center gap-2"
              onClick={model.onBack}
            >
              <div className="flex items-center justify-center gap-3 border-[#667085]">
                <ArrowIcon color={"#667085"} className="-rotate-90" />
                <span className="text-sm">Back</span>
              </div>
            </button>
          </div>
        </div>
        <div>
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-y border-[#D0D3D9]">
              <tr>
                <th className="py-6 text-start pl-10 font-[500] text-sm">
                  <input
                    type="checkbox"
                    disabled
                    checked
                    className="w-6 h-6 accent-gray-700"
                  />
                </th>
                <th className="py-6 text-start pl-10 font-[500] text-sm">Menu Name</th>
                <th className="py-6 text-start pl-10 font-[500] text-sm">Permissions</th>
                <th className="py-6 text-start pl-10 font-[500] text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {model.menu.data.map((item, i) => {
                return (
                  <tr key={item.id} className="border-b-2 border-[#D0D3D9]">
                    <td className="py-6 text-start pl-10 text-gray-600 ">
                      <input
                        type="checkbox"
                        checked={item.active}
                        value={item.active}
                        onChange={(e) =>
                          model.changeActiveMEnu(e, i, item.moduleId)
                        }
                        className="w-6 h-6 accent-gray-700  "
                      />
                    </td>
                    <td className="py-6 text-start pl-10">{item.name}</td>
                    <td className="py-6 text-start pl-10">
                      {item.permission.map((e, i) => {
                        if (e.active) {
                          return (
                            <p>
                              {e.name} {i !== e.length ? " " : " | "}
                            </p>
                          );
                        }
                      })}
                    </td>
                    <td className="py-6  pl-10 flex gap-3 justify-start">
                      <button
                        onClick={() => model.buttonModal(item.id)}
                        className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-[4px] text-white flex gap-2"
                      >
                        <PenAltIcon />
                        <span className="text-sm">Edit</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex items-center justify-end px-8 py-6">
            <Pagination
              row={model.menu.totalRow}
              limit={model.menu.limit}
              page={model.menu.page}
              onClick={model.onPageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;