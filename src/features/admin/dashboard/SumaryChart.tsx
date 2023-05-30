import React, { useEffect, useRef, useState } from "react";
import Chart from "../../../common/components/Chart";
import { Sumary } from "@domain/models/sumary-dashbord-chart";
import { DashboatApiRepository } from "@data/api/dashboard-api-repository";

export const SumaryChart = ({ datas, total }) => {
    console.log(datas[3], "component");
    const ctx: any = useRef();
    const chart: any = useRef();
    const initChart = () => {
        chart.current = new Chart(ctx.current, {
            type: "doughnut",
            data: {
                labels: ["ok", "waiting", "ng"],
                datasets: [
                    {
                        data: datas,
                        backgroundColor: ["#12B569", "#20519F", "#F79009"],
                    },
                ],
            },
            options: {
                responsive: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                },
            },
        });
    };

    useEffect(() => {
        if (!chart.current) {
            initChart();
        } else {
            try {
                chart.current.destroy();
                initChart();
            } catch (e) {
                chart.current.destroy();
                initChart();
            }
        }
    }, []);

    return (
        <>
            <div className="flex justify-center">
                <canvas className="w-[176px] h-[176px]" ref={ctx}></canvas>
                <div className="absolute top-[28%] left-42 w-[40px] flex flex-col items-center">
                    <h1 className="text-[#6F6C6C] font-[900] text-xl">
                        {total}
                    </h1>
                    <p className="text-[#9A9898] font-[400]">Total</p>
                </div>
            </div>
        </>
    );
};
