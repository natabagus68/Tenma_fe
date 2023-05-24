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
            <div className="flex justify-center relative">
                <canvas className="w-1/2" ref={ctx}></canvas>
                <div className="absolute text-center items-center top-24 left-42 scale-125">
                    <h1 className="text-4xl text-gray-700 font-semibold">
                        {total}
                    </h1>
                    <p className="text-gray-600 text-xl">Total</p>
                </div>
            </div>
        </>
    );
};
