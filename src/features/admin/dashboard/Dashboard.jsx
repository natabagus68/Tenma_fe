import { Breadcrumbs } from "@common/components";
import { DashboardCard } from "./DashboardCard";
import { RevenueChart } from "./RevenueChart";
import { SumaryChart } from "./SumaryChart";
import { BarChart } from "./BarChart";
import { dashboardModel } from "./dashboard-view-model";
import { TreacebilityIcon } from "@common/components/icons/TreacebilityIcon";

export const Dashboard = () => {
  const model = dashboardModel();
  return (
    <div className="text-[#514E4E] font-open-sans">
      <Breadcrumbs items={["Dashboard"]} />
      <div className="w-full px-4 rounded-md mb-6 pb-3 border border-[#D0D3D9] bg-[#FFFFFF] shadow-sm">
        <div className="w-full flex justify-between items-center py-3">
          <div className="flex items-center">
            <h1 className="font-[600]">Traceability</h1>
            <span onClick={model.toTraceability} className="text-[10px] text-blue-500 ml-3 hover:text-blue-600 cursor-pointer">See More</span>
          </div>
          <select
            name="traceability"
            onChange={model.handleTreacibilityTime}
            className="p-2 bg-[#FFFFFF] border border-[#D0D3D9] rounded-md text-xs"
          >
            <option value="">Today</option>
            <option value="monthly">this month</option>
            <option value="year">this year</option>
          </select>
        </div>
        <div className="flex gap-4">
          <DashboardCard
            label={model?.progressCheckData?.part}
            content={"TOTAL PART"}
            icon={<TreacebilityIcon width="50px" bColor="bg-[#12B569]" />}
          />
          <DashboardCard
            label={model?.progressCheckData?.progressCheck}
            content={"PROGRESS CHECKING"}
            icon={<TreacebilityIcon width="50px" bColor="bg-[#667085]" />}
          />
          <DashboardCard
            label={model?.progressCheckData?.ThreeDCheck}
            content={"3D CHECK"}
            icon={<TreacebilityIcon width="50px" bColor="bg-[#20519F]" />}
          />
          <DashboardCard
            label={model?.progressCheckData?.TwoDCheck}
            content={"2D CHECK"}
            icon={<TreacebilityIcon width="50px" bColor="bg-[#F79009]" />}
          />
        </div>
      </div>
      <div className="flex flex-col rounded-md shadow-sm px-6 py-4 bg-white relative border border-[#D0D3D9]">
        <div className="flex justify-between">
          <div className="mb-2 text-[#514E4E] font-[600]">Quality Trends</div>
          <div className="flex gap-4">
            <select
              name="part"
              value={model.revenueQuery.part}
              onChange={model.handleChangeRevenue}
              className="p-2 bg-[#FFFFFF] border border-[#D0D3D9] rounded-md text-xs"
            >
              <option value="" disabled selected>Part Code</option>
              {model.part.data.map((item) => { return <option value={item.id}>{item.partCode}</option>; })}
            </select>
            <select
              name="character"
              value={model.revenueQuery.character}
              onChange={model.handleChangeRevenue}
              className="p-2 bg-[#FFFFFF] border border-[#D0D3D9] rounded-md text-xs"
            >
              <option value="" disabled selected>Characters</option>
              {model.character.map((item) => {
                return <option value={item.character}>{item.character}</option>;
              })}
            </select>
          </div>
        </div>
        {model.revenue && <RevenueChart datas={model?.revenue} />}
      </div>
      <div className="w-full flex justify-between gap-6 mt-6">
        <div className="w-1/2 rounded-md shadow-sm bg-white justify-center items-center border border-[#D0D3D9]">
          <div className="flex justify-between px-6 py-3">
            <p className="font-[600]">Summary Judgement</p>
            <select
              onChange={model.handleSumaryQuery}
              className="p-2 bg-[#FFFFFF] border border-[#D0D3D9] rounded-md text-xs"
            >
              <option value="">Today</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </div>
          <div className="relative mt-[26px] mb-[46px]">
            {model.sumaryRunner ? (
              <SumaryChart
                datas={[
                  model.sumaryData.ok,
                  model.sumaryData.waiting,
                  model.sumaryData.ng,
                ]}
                total={model.sumaryData.total}
              />
            ) : null}
          </div>
          <div className="w-full flex gap-8 justify-center mb-[42px]">
            <div className="flex gap-2 items-center">
              <div className="w-[16px] h-[16px] bg-[#12B569] rounded-full"></div>
              <p className="font-[400] text-xs">OK</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[16px] h-[16px] bg-[#20519F] rounded-full"></div>
              <p className="font-[400] text-xs">Waiting</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[16px] h-[16px] bg-[#F79009] rounded-full"></div>
              <p className="font-[400] text-xs">NG</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 rounded-md shadow-sm bg-white px-6 py-3 flex flex-col justify-between border border-[#D0D3D9]">
          <div className="flex justify-between relative w-[100%]">
            <p className="mb-[14px] font-[600]">Part Checking</p>
            <p className="absolute -rotate-90 top-[10rem] -left-[40px] text-[10px]">part Quantity</p>
            <select
              onChange={model.handleSumaryQuery}
              className="p-2 bg-[#FFFFFF] border border-[#D0D3D9] rounded-md text-xs"
            >
              <option value="Daily">Daily</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          {model.bar.date && <BarChart datas={model.bar} />}
          <div className="flex gap-6 justify-center items-center w-full my-[20px]">
            <div className="flex gap-2 items-center">
              <div className="w-6 h-2 bg-[#20519F]"></div>
              <p className="font-[400] font-[#6F6C6C] text-xs">3D Check</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-6 h-2 bg-[#F79009]"></div>
              <p className="font-[400] font-[#6F6C6C] text-xs">2D Check</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
