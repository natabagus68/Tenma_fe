import React from "react";
import {
    AreaIcon,
    ArrowIcon,
    CompanyIcon,
    PitIcon,
    UsersIcon,
} from "../../../common/components/icons";
import { Input } from "../../../common/components/input";
import { DashboardCard } from "./DashboardCard";
import { RevenueChart } from "./RevenueChart";
import { SumaryChart } from "./SumaryChart";
import { BarChart } from "./BarChart";
import { dashboardModel } from "./dashboard-view-model";
export const Dashboard = () => {
    const model = dashboardModel();
    return (
        <>
            <div className="flex gap-3 text-gray-500 font-body mb-6">
                <a>Home</a>/<div className="text-gray-700">Dashboard</div>
            </div>
            <div className="w-full py-2 px-4  rounded-md mb-4 pt-6 shadow-md">
                <div className="w-full flex justify-between mb-3 items-center">
                    <h1 className="text-gray-800 font-semibold text-xl">
                        Traceability
                        <span
                            onClick={model.toTraceability}
                            className="text-sm text-blue-500 ml-3 hover:text-blue-600 cursor-pointer"
                        >
                            See more
                        </span>
                    </h1>

                    <select
                        name="traceability"
                        onChange={model.handleTreacibilityTime}
                        className="outline-none px-3 py-2 rounded-md"
                    >
                        <option value="">today</option>
                        <option value="monthly">this month</option>
                        <option value="year">this year</option>
                    </select>
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 font-nunito-sans mb-6">
                    <DashboardCard
                        label={model?.progressCheckData?.part}
                        content={"TOTAL PART"}
                        icon={<CompanyIcon />}
                    />
                    <DashboardCard
                        label={model?.progressCheckData?.progressCheck}
                        content={"TOTAL PROGRESS CHECK"}
                        icon={<AreaIcon />}
                    />
                    <DashboardCard
                        label={model?.progressCheckData?.ThreeDCheck}
                        content={"TOTAL 3D"}
                        icon={<PitIcon />}
                    />
                    <DashboardCard
                        label={model?.progressCheckData?.TwoDCheck}
                        content={"TOTAL 2D"}
                        icon={<UsersIcon />}
                    />
                </div>
            </div>
            <div className="flex flex-col  rounded-lg shadow-[0px_2px_20px_rgba(0,_0,_0,_0.12)] px-6 py-4 bg-white relative">
                <div className="flex justify-between">
                    <div className="mb-2">Quality Trends</div>
                    <div className="flex gap-4">
                        <select
                            name="part"
                            value={model.revenueQuery.part}
                            onChange={model.handleChangeRevenue}
                            className="outline-none px-6"
                        >
                            <option value="" disabled selected>
                                Part
                            </option>
                            {model.part.data.map((item) => {
                                return (
                                    <option value={item.id}>
                                        {item.partCode}
                                    </option>
                                );
                            })}
                        </select>
                        <select
                            name="character"
                            value={model.revenueQuery.character}
                            onChange={model.handleChangeRevenue}
                            className="outline-none px-6"
                        >
                            <option value="" disabled selected>
                                Character
                            </option>
                            {model.character.map((item) => {
                                return (
                                    <option value={item.character}>
                                        {item.character}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                {model.revenue && <RevenueChart datas={model?.revenue} />}
            </div>

            <div className="w-full flex justify-between mt-5 gap-4">
                <div className="w-1/2 rounded-md shadow-lg bg-white justify-center items-center">
                    <div className="px-6 py-3 flex justify-between">
                        <p className="text-xl">Summary Judgement</p>
                        <select
                            onChange={model.handleSumaryQuery}
                            className="px-6 py-2 rounded-md outline-none bg-transparent"
                        >
                            <option value="">Today</option>
                            <option value="month">Month</option>
                            <option value="year">Year</option>
                        </select>
                    </div>
                    <div className="relative">
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
                    <div className="w-full flex gap-3 justify-center py-6">
                        <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 bg-[#12B569] rounded-full"></div>
                            <p>OK</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 bg-[#20519F] rounded-full"></div>
                            <p>Waiting</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 bg-[#F79009] rounded-full"></div>
                            <p>NG</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 rounded-md shadow-lg bg-white justify-center items-center">
                    <div className="px-6 py-3 flex justify-between">
                        <p className="text-xl">Part Checking</p>
                        <select
                            name="barQuery"
                            value={model.barQuery}
                            onChange={model.handleChangeBarQuery}
                            className="px-3 py-2 outline-none rounded-md bg-transparent"
                        >
                            <option value="daily">Daily</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>

                    {model.bar.date && <BarChart datas={model.bar} />}
                    <div className="mt-3 flex gap-4 justify-center items-center w-full">
                        <div className="flex gap-2 items-center">
                            <div className="w-8 h-5 bg-[#20519F]"></div>
                            <p className="text-gray-500">3D Check</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-8 h-5 bg-[#F79009]"></div>
                            <p className="text-gray-500">2D Check</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
