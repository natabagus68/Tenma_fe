import { Breadcrumbs } from "@common/components/";
import { EyeIcon, PenAltIcon, TrashIcon } from "@common/components/icons";
import Pagination from "@common/components/pagination/Pagination";
import ModalDelete from "@common/components/Modal/ModalDelete";
import useMeasurement from "./measurement-view-model";

export default function MeasurementStd() {
  const measurementStd = useMeasurement();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["Measurement Std."]} />
      <div className="m-auto w-full border border-gray-100 rounded-md">
        <div className="w-full flex justify-between items-center px-8 py-[18px]">
          <h1 className="font-[700] text-2xl font-sans">Measurement Std</h1>
          <div className="flex gap-3 items-center">
            <button
              className="py-[12px] px-[20px] bg-[#667085] text-white align-middle rounded-[4px] text-sm"
              onClick={measurementStd.toAddData}
            >
              + Add Data
            </button>
            <input
              type="text"
              value={measurementStd.params.q}
              onChange={measurementStd.handleSearch}
              placeholder="Search"
              className="border border-gray-300 rounded-md py-2 px-3 outline-none text-gray-700"
            />
          </div>
        </div>
        <div>
          <table className="w-full text-[#514E4E]">
            <thead className="bg-[#FAFAFB] border-y border-gray-100">
              <tr>
                <th className="py-6 text-start pl-10 font-[500]">
                  Part Code (Item CD)
                </th>
                <th className="py-6 text-start pl-10 font-[500]">Part Name</th>
                <th className="py-6 text-start pl-10 font-[500]">Model</th>
                <th className="py-6 text-start pl-10 font-[500]">Action</th>
              </tr>
            </thead>
            <tbody>
              {measurementStd.measurementStd.data.map((item, ind) => (
                <tr className="border-b border-gray-100" key={ind}>
                  <td className="py-2 text-start pl-10 font-[400]">
                    {item.part.partCode}
                  </td>
                  <td className="py-2 text-start pl-10 font-[400]">
                    {item.part.partName}
                  </td>
                  <td className="py-2 text-start pl-10 font-[400]">
                    {item.part.customerModel}
                  </td>
                  <td className="py-2 pl-10 flex gap-3 justify-start">
                    <button
                      className="py-[12px] px-[20px] bg-[#1BBDD4] items-center rounded-[4px] text-white flex gap-2 text-sm"
                      onClick={(e) => measurementStd.toDetail(item.id)}
                    >
                      <EyeIcon />
                      <span className="text-sm">Detail</span>
                    </button>
                    <button
                      onClick={() => measurementStd.toEdit(item.id)}
                      className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-[4px] text-white flex gap-2 text-sm"
                    >
                      <PenAltIcon />
                      <span className="text-sm">Edit</span>
                    </button>
                    <button
                      onClick={(e) => measurementStd.onDelete(e, item.id)}
                      className="py-[12px] px-[20px] bg-[#F04438] items-center rounded-[4px] text-white flex gap-2 text-sm"
                    >
                      <TrashIcon />
                      <span className="text-sm">Delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-end py-4 pr-8">
          {measurementStd.measurementStd.totalRow && (
            <Pagination
              row={measurementStd.measurementStd.totalRow}
              limit={measurementStd.measurementStd.limit}
              page={measurementStd.measurementStd.page}
              onClick={measurementStd.onPageChange}
            />
          )}
        </div>
      </div>
      <ModalDelete
        showModal={measurementStd.deleteConfirmShow}
        setShowModal={measurementStd.setDeleteConfirmShow}
        onConfirm={measurementStd.onConfirmDelete}
        onCancel={measurementStd.cancelDelete}
      />
    </div>
  );
}

