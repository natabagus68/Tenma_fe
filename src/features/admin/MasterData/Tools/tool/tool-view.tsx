import { Breadcrumbs } from "@common/components";
import { PenAltIcon, TrashIcon } from "@common/components/icons";
import Pagination from "@common/components/pagination/Pagination";
import ModalDelete from "@common/components/Modal/ModalDelete";
import useTool from "./tool-view-model";

const ToolView = () => {
  const tool = useTool();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["Tools"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md">
        <div className="w-full flex justify-between items-center text-[#514E4E] px-8 py-6">
          <h1 className="font-[700] text-2xl">Tools</h1>
          <div className="flex gap-3 items-center">
            <button
              className="py-[12px] px-[20px] bg-[#667085] text-white align-middle rounded-[4px] text-sm"
              onClick={() => tool.onAdd()}
            >
              + Add Data
            </button>
            <input
              type="text"
              value={tool.params.q}
              onChange={tool.handleSearch}
              placeholder="Search"
              className="border border-gray-300 rounded-md py-2 px-3 outline-none text-gray-700"
            />
          </div>
        </div>
        <div>
          <table className="w-full">
            <thead className="bg-[#FAFAFB] border-y border-[#D0D3D9] text-[#514E4E]">
              <tr className="font[700] text-left text-sm">
                <th className="py-[18px] pl-8">ID Tools</th>
                <th className="py-[18px] pl-8">Tool Code</th>
                <th className="py-[18px] pl-8">Name</th>
                <th className="py-[18px] pl-8">Address</th>
                <th className="py-[18px] pl-8">Action</th>
              </tr>
            </thead>
            <tbody>
              {tool.tool.data.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#D0D3D9] text-[#514E4E]"
                >
                  <td className="px-8">{item.idTool}</td>
                  <td className="px-8">{item.toolCode}</td>
                  <td className="px-8">{item.name}</td>
                  <td className="px-8">{item.address}</td>
                  <td className="py-2 px-8 flex items-center gap-3">
                    <button
                      onClick={() => tool.onEdit(item.id)}
                      className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-[4px] text-white flex gap-2"
                    >
                      <PenAltIcon />
                      <span className="text-sm">Edit</span>
                    </button>
                    <button
                      onClick={() => tool.onDelete(item.id)}
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
            {tool.tool.totalRow && (
              <Pagination
                row={tool.tool.totalRow}
                limit={tool.tool.limit}
                page={tool.tool.page}
                onClick={tool.onPageChange}
              />
            )}
          </div>
        </div>
      </div>
      <ModalDelete
        showModal={tool.deleteConfirmShow}
        setShowModal={tool.setDeleteConfirmShow}
        onConfirm={tool.onConfirmDelete}
        onCancel={tool.cancelDelete}
      />
    </div>
  );
};

export default ToolView;

