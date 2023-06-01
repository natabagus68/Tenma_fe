import { Breadcrumbs } from "@common/components/Breadcrumbs";
import { ArrowIcon, PenAltIcon } from "@common/components/icons"
import CavasitySMeasurent from "../components/CavasitySMeasurent";
import useMeasurementDetail from "./measurement-detail-view-model";

const MeasurementDetail = () => {
  const model = useMeasurementDetail();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["Measurement Std", "Details"]} />
      <div className="m-auto w-full border border-[#D0D3D9] rounded-md">
        <div className="w-full flex justify-between items-center px-8 py-[18px]">
          <h1 className="font-[700] text-2xl">Details</h1>
          <div className="flex gap-3 justify-end">
            <button onClick={model.back}
              className="py-[12px] px-[20px] border border-[#D0D3D9] text-[#667085] rounded-[4px] flex gap-2 items-center">
              <ArrowIcon color="#667085" className="-rotate-90" />
              <span>Back</span>
            </button>
            <button onClick={(e) => model.toEdit()}
              className="py-[12px] px-[20px] bg-[#F79009] text-[#FFFFFF] rounded-[4px] flex gap-3 items-center" >
              <PenAltIcon />
              <span>Edit</span>
            </button>
          </div>
        </div>
        <div className="border-t border-[#D0D3D9] px-8 py-6">
          <table className="w-[50%]">
            <tbody>
              <tr className="bg-[#F0F1F3]">
                <td className="p-4">Part Name</td>
                <td className="p-4 font-[600]">{model.measurement.part.partName}</td>
              </tr>
              <tr>
                <td className="p-4">Part Code (Item CD)</td>
                <td className="p-4 font-[600]">{model.measurement.part.partCode}</td>
              </tr>
              <tr className="bg-[#F0F1F3]">
                <td className="p-4">Model</td>
                <td className="p-4 font-[600]">{model.measurement.part.customerModel}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <CavasitySMeasurent model={model.measurement} />
    </div>
  );
};

export default MeasurementDetail;