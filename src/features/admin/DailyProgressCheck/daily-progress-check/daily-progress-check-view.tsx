import moment from "moment";
import { Breadcrumbs } from "@common/components";
import { EyeIcon, PenAltIcon, TrashIcon } from "@common/components/icons";
import Pagination from "@common/components/pagination/Pagination";
import JudgemnetIcon from "../icon/JudgemnetIcon";
import DimantionIcon from "../icon/DimantionIcon";
import { useDailyProgressCheck } from "./daily-progress-check-view-model";
import ModalDelete from "@common/components/Modal/ModalDelete";
import { SearchIcon } from "@common/components/icons/SearchIcon";

const DailyProgessCheckView = () => {
  const dailyProgressCheck = useDailyProgressCheck();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["Daily Progress Check"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md">
        <div className="w-full flex justify-between items-center px-8 py-6">
          <h1 className="font-[700] text-2xl">Daily Progress Check</h1>
          <div className="flex gap-4 w-1/2 items-center justify-end">
            <button
              className="py-[12px] px-[20px] bg-[#667085] text-white align-middle rounded-[4px] text-sm"
              onClick={dailyProgressCheck.onAdd}
            >
              + Add Data
            </button>
            <div className="relative">
              <input
                type="date"
                name="date"
                value={`${dailyProgressCheck.dailyProgressCheckGetPayload.date}`}
                onChange={
                  dailyProgressCheck.onDailyProgressCheckGetPayloadChange
                }
                className="py-[12px] border rounded-[4px] px-10 outline-none border-[#D0D3D9]"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center border-t boder-gray-100 px-8 py-6">
          <div className="flex gap-5">
            <div className="flex gap-3 items-center">
              <label className="text-sm">PIC</label>
              <select
                name="pic"
                value={dailyProgressCheck.dailyProgressCheckGetPayload.pic}
                onChange={
                  dailyProgressCheck.onDailyProgressCheckGetPayloadChange
                }
                className="w-[100px] py-2 px-3 bg-white outline-none border rounded-md border-[#D0D3D9] text-sm"
              >
                <option value="">Semua</option>
                {dailyProgressCheck.pic.map((item) => (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-3 items-center">
              <label className="text-sm">Judgement</label>
              <select
                name="judgement"
                value={
                  dailyProgressCheck.dailyProgressCheckGetPayload.judgement
                }
                onChange={
                  dailyProgressCheck.onDailyProgressCheckGetPayloadChange
                }
                className="w-[150px] py-2 px-3 bg-white outline-none border rounded-md border-[#D0D3D9] text-sm"
              >
                <option value={""}>Semua</option>
                <option value={"Waiting"}>Waiting</option>
                <option value={"OK"}>OK</option>
                <option value={"NG"}>NG</option>
              </select>
            </div>
          </div>
          <div className="relative">
            <SearchIcon
              color={"#D0D3D9"}
              className="absolute top-[32.5%] left-[5%]"
            />
            <input
              type="text"
              name="search"
              placeholder="Search Part Code"
              value={dailyProgressCheck.dailyProgressCheckGetPayload.search}
              onChange={dailyProgressCheck.onDailyProgressCheckGetPayloadChange}
              className="outline-none text-sm border w-[210px] h-[46px] pl-8 rounded-[4px] border-[#D0D3D9] placeholder:text-sm"
            />
          </div>
        </div>
        <div>
          <table className="w-full text-sm font-[600]">
            <thead className="bg-[#FAFAFB] border-y border-[#D0D3D9]">
              <tr>
                <th className="py-6 text-start pl-10">Update at</th>
                <th className="py-6 text-start pl-10">Part Code</th>
                <th className="py-6 text-start pl-10">Model</th>
                <th className="py-6 text-start pl-10">Shift</th>
                <th className="py-6 text-start pl-10">3D</th>
                <th className="py-6 text-start pl-10">2D</th>
                <th className="py-6 text-start pl-10">PIC</th>
                <th className="py-6 text-start pl-10">Transaction ID</th>
                <th className="py-6 text-start pl-10">Judgement</th>
                <th className="py-6 text-start pl-10">Action</th>
              </tr>
            </thead>
            <tbody>
              {dailyProgressCheck.dailyProgressCheck.data.map((item, i) => {
                console.log(item.updatedAt);
                return (
                  <tr
                    key={item.id}
                    className="border-b border-[#D0D3D9] font-[400]"
                  >
                    <td className="py-6 text-start pl-10 items-center">
                      {moment(item.updatedAt).format("HH:mm")}
                    </td>
                    <td className="py-6 text-start pl-10 items-center">
                      {item.partCode}
                    </td>
                    <td className="py-6 text-start pl-10 items-center">
                      {item.model}
                    </td>
                    <td className="py-6 text-start pl-10 items-center">
                      {item.shift}
                    </td>
                    <td className="py-6 text-start pl-10 items-center">
                      <DimantionIcon value={item.judgement3d} />
                    </td>
                    <td className="py-6 text-start pl-10 items-center ">
                      <DimantionIcon value={item.judgement2d} />
                    </td>
                    <td className="py-6 text-start pl-10 items-center ">
                      {item.pic.name}
                    </td>
                    <td className="py-6 text-start pl-10 items-center ">
                      {item.transactionID}
                    </td>
                    <td className="py-6 text-start pl-10 items-center ">
                      <JudgemnetIcon
                        value={item.judgement}
                        changer={(e) =>
                          dailyProgressCheck.handleChangeJudgment(e, item.id, i)
                        }
                      />
                    </td>
                    <td className="py-6  pl-10 items-center flex gap-3 justify-start">
                      <button
                        onClick={(e) => dailyProgressCheck.onDetail(item)}
                        className="py-[12px] px-[20px] bg-[#1BBDD4] items-center rounded-md text-white flex gap-2"
                      >
                        <EyeIcon />
                        <span className="text-sm">Detail</span>
                      </button>
                      <button
                        className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2"
                        onClick={(e) => dailyProgressCheck.onEdit(item)}
                      >
                        <PenAltIcon />
                        <span className="text-sm">Edit</span>
                      </button>
                      <button
                        onClick={(e) => dailyProgressCheck.onDelete(item)}
                        className="py-[12px] px-[20px] bg-[#F04438] items-center rounded-md text-white flex gap-2"
                      >
                        <TrashIcon />
                        <span className="text-sm">Delete</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex items-center justify-end px-8 py-6">
            <Pagination
              row={
                dailyProgressCheck.dailyProgressCheck.lastPage *
                dailyProgressCheck.dailyProgressCheck.limit
              }
              limit={dailyProgressCheck.dailyProgressCheck.limit}
              page={dailyProgressCheck.dailyProgressCheck.page}
            />
          </div>
        </div>
      </div>
      <ModalDelete
        showModal={dailyProgressCheck.deleteConfirmShow}
        setShowModal={dailyProgressCheck.setDeleteConfirmShow}
        onConfirm={dailyProgressCheck.onConfirmDelete}
      />
    </div>
  );
};

export default DailyProgessCheckView;

