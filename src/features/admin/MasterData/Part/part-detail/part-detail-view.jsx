import { Breadcrumbs } from "@common/components";
import { PenAltIcon } from "@common/components/icons";
import { usePartDetail } from "./part-detail-view-model";
import { ArrowIcon } from "@common/components/icons/ArrowIcon";
import { PartApiRepository } from "@data/api/part-api-repository";

const PartDetail = () => {
  const partDetail = usePartDetail(new PartApiRepository());
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["Part", "Details"]} />
      <div>
        <div className="m-auto w-full border border-[#D0D3D9] rounded-md pb-52">
          <div className="w-full py-6 border-b border-[#D0D3D9] px-8 flex justify-between items-center">
            <h1 className="font-[700] text-2xl">Details</h1>
            <div className="flex items-center gap-3">
              <button
                className="py-[12px] px-[20px] border border-[#D0D3D9] text-center items-center rounded-md flex gap-2"
                onClick={(e) => partDetail.onBack()}
              >
                <ArrowIcon className="-rotate-90" color={"#667085"} />
                <span className="text-[#667085]">Back</span>
              </button>
              <button
                onClick={(e) => partDetail.onEdit()}
                className="py-[12px] px-[20px] bg-[#F79009] text-white text-center items-center rounded-md flex gap-2 "
              >
                <PenAltIcon />
                <span>Edit</span>
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            {/* table 1 */}
            <table className="w-1/2 ml-8 my-6">
              <tbody>
                <tr className="bg-[#F0F1F3]">
                  <td className="border-none p-4">Cust. Item CD</td>
                  <td className="border-none text-[#393737] font-[600]">
                    {partDetail.part.custItemId}
                  </td>
                </tr>
                <tr>
                  <td className=" border-none p-4">Part Code</td>
                  <td className="border-none text-[#393737] font-[600]">
                    {partDetail.part.partCode}
                  </td>
                </tr>
                <tr className="bg-[#F0F1F3]">
                  <td className="border-none p-4">Part Name</td>
                  <td className="border-none text-[#393737] font-[600]">
                    {partDetail.part.partName}
                  </td>
                </tr>
                <tr>
                  <td className="border-none p-4">Item Group CD</td>
                  <td className="border-none text-[#393737] font-[600]">
                    {partDetail.part.itemGroupCode}
                  </td>
                </tr>
                <tr className="bg-[#F0F1F3]">
                  <td className="border-none p-4">Item Group Name</td>
                  <td className="border-none text-[#393737] font-[600]">
                    {partDetail.part.itemGroupName}
                  </td>
                </tr>
                <tr>
                  <td className="border-none p-4">Old Part Number</td>
                  <td className="border-none text-[#393737] font-[600]">
                    {partDetail.part.oldPartNumber}
                  </td>
                </tr>
                <tr className="bg-[#F0F1F3]">
                  <td className="border-none p-4">Customer Model</td>
                  <td className="border-none text-[#393737] font-[600]">
                    {partDetail.part.customerModel}
                  </td>
                </tr>
              </tbody>
            </table>
            {/* table 2 */}
            <table className="w-1/2 mr-8 my-6">
              <tbody>
                <tr className="bg-[#F0F1F3]">
                  <td className="border-none p-4">Customer</td>
                  <td className="border-none text-[#393737] font-[600]">
                    {partDetail.part.customer}
                  </td>
                </tr>
                <tr>
                  <td className="border-none p-4">Material</td>
                  <td className="border-none text-[#393737] font-[600]">
                    {partDetail.part.material}
                  </td>
                </tr>
                <tr className="bg-[#F0F1F3]">
                  <td className="border-none p-4">Material Color</td>
                  <td className="border-none text-[#393737] font-[600]">
                    {partDetail.part.materialColor}
                  </td>
                </tr>
                <tr>
                  <td className="border-none p-4">Customer Model Group</td>
                  <td className="border-none text-[#393737] font-[600]">
                    {partDetail.part.customerModelGroup}
                  </td>
                </tr>
                <tr className="bg-[#F0F1F3]">
                  <td className="border-none p-4">Unit CD</td>
                  <td className="border-none text-[#393737] font-[600]">
                    {partDetail.part.unitCd}
                  </td>
                </tr>
                <tr>
                  <td className="border-none p-4">Material Details</td>
                  <td className="border-none text-[#393737] font-[600]">
                    {partDetail.part.materialDetails}
                  </td>
                </tr>
                <tr className="bg-[#F0F1F3]">
                  <td className="border-none p-4">Product Weight</td>
                  <td className="border-none text-[#393737] font-[600]">
                    {partDetail.part.productWeight} gram
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartDetail;

