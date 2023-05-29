import React, { useEffect, useRef, useState } from "react";
import Chart from "./../../../common/components/Chart";

export const BarChart = ({ datas, className }) => {
    const ctx = useRef();
    const chart = useRef();
    useEffect(() => {
        const initChart = () => {
            chart.current = new Chart(ctx.current, {
                type: "bar",
                data: {
                    labels: datas.date ? datas.date : null,
                    datasets: [
                        {
                            label: "3D",
                            backgroundColor: "#20519F",
                            data: datas.data3D ? datas.data3D : null,
                        },
                        {
                            label: "2D",
                            backgroundColor: "#F79009",
                            data: datas.data2D ? datas.data2D : null,
                        },
                    ],
                },
                options: {
                    responsive: true,
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
                chart.current.destroy();
                initChart();
                // chart.current.update();
            } catch (e) {
                chart.current.destroy();
                initChart();
            }
        }
    }, [datas]);

    return (
        <>
            <div className={`${className}`}>
                <canvas
                    className="w-full"
                    ref={ctx}
                    height={227}
                    width={554}
                ></canvas>
            </div>
        </>
    );
};
