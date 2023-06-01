import { Breadcrumbs } from "@common/components";
import { useWeighting } from "./weighting-view-model";
import { SearchIcon } from "@common/components/icons/SearchIcon";
import ModalConfirm from "@common/components/Modal/ModalConfirm";
import moment from "moment";

const Weighting = () => {
  const model = useWeighting();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["Weighting"]} />
      {/* form */}
      <div className="w-full border border-[#D0D3D9] rounded-md">
        <h1 className="font-[700] px-8 py-6 text-2xl border-b border-[#D0D3D9]">Add Data</h1>
        <form action="" className="flex flex-col gap-4 px-8 py-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-[400]">Tools</label>
            <select
              name="toolID"
              onChange={model.handleAddDataForm}
              className="w-full py-2 px-2 outline-none rounded-md border border-[#D0D3D9]"
            >
              <option selected disabled>Tools</option>
              {model?.dataTools?.map((item) => {
                return <option value={item.id}>{item?.name}</option>;
              })}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-[400]">ID Transaction</label>
            <select
              name="transactionID"
              onChange={model.handleAddDataForm}
              className="w-full py-2 px-2 outline-none text-gray-700 rounded-md border border-[#D0D3D9]"
            >
              <option selected disabled>transactions</option>
              {model.transaction?.map((item) => {
                return (
                  <option value={item.id}>
                    {item.progressTransactionID}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mt-5">
            <button
              onClick={model.storeAddData}
              className="text-center bg-[#D0D3D9] text-[#B8B6B6] rounded-[4px] w-[180px] h-[46px]"
            >Save</button>
          </div>
        </form>
      </div>
      {/* weighting */}
      <div className="w-full border border-[#D0D3D9] rounded-md mt-4">
        {/* header */}
        <div className="border-[#D0D3D9] flex justify-between px-8 py-6">
          <h1 className="text-2xl font-[700]">LOG Weighting</h1>
          <div className="relative w-1/5">
            <SearchIcon color={"#B8B6B6"} className="absolute top-[32.5%] left-[5%]" />
            <input
              type="text"
              name="search"
              value={model.search}
              onChange={model.handleSearch}
              placeholder="Search tools"
              className="w-full py-2 px-11 border border-[#D0D3D9] outline-none rounded-[4px] placeholder:text-[#B8B6B6]"
            />
          </div>
        </div>
        {/* content */}
        <div>
          <table className="w-full">
            <thead>
              <tr className="text-sm">
                <th className="px-8 py-[22px] text-left bg-gray-50 items-center">Tools</th>
                <th className="px-8 py-[22px] text-left bg-gray-50 items-center">ID Transaction</th>
                <th className="px-8 py-[22px] text-left bg-gray-50 items-center">Part Code</th>
                <th className="px-8 py-[22px] text-left bg-gray-50 items-center">Weight Part (gram)</th>
                <th className="px-8 py-[22px] text-left bg-gray-50 items-center">Timestamps</th>
              </tr>
            </thead>
            <tbody>
              {model.weighting?.map((item) => {
                return (
                  <tr>
                    <td className="px-8 py-[22px] text-left border-b border-[#D0D3D9] items-center"> {item.tools?.name || ""} </td>
                    <td className="px-8 py-[22px] text-left border-b border-[#D0D3D9] items-center"> {item.progressCheck.progress_transaction_id} </td>
                    <td className="px-8 py-[22px] text-left border-b border-[#D0D3D9] items-center"> {item.progressCheck?.part?.part_cd || ""} </td>
                    <td className="px-8 py-[22px] text-left border-b border-[#D0D3D9] items-center"> {item.progressCheck?.actual_part_weight || ""} </td>
                    <td className="px-8 py-[22px] text-left border-b border-[#D0D3D9] items-center">
                      {moment(item.progressCheck.updated_at).format("l")}
                      &nbsp;
                      {moment(item.progressCheck.updated_at).format("LT")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <ModalConfirm
        showModal={model.modal}
        setShowModal={model.setModal}
        onConfirm={model.onConfirm}
      />
    </div>
  );
};

export default Weighting;