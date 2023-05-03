import React, { useEffect, useRef, useState } from "react";
import Chart from "./../../../common/components/Chart";

export const BarChart = ({ datas }) => {
    const ctx = useRef();
    const chart = useRef();
    console.log(datas);
    useEffect(() => {
        const initChart = () => {
            chart.current = new Chart(ctx.current, {
                type: "bar",
                data: {
                    labels: datas.date,
                    datasets: [
                        {
                            label: "3D",
                            backgroundColor: "#20519F",
                            data: datas.data3D,
                        },
                        {
                            label: "2D",
                            backgroundColor: "#F79009",
                            data: datas.data2D,
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
        if (!chart.current) {
            initChart();
        } else {
            try {
                chart.current.update();
            } catch (e) {
                chart.current.destroy();
                initChart();
            }
        }
    }, []);

    return (
        <>
            <div className="">
                <canvas className="w-full" ref={ctx}></canvas>
            </div>
        </>
    );
};
