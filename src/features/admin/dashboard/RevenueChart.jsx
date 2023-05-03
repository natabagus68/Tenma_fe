import React, { useEffect, useRef, useState } from "react";
import Chart from "./../../../common/components/Chart";

export const RevenueChart = () => {
    const ctx = useRef();
    const chart = useRef();
    const [blue, setBlue] = useState(12);
    const [frequent, setFrequent] = useState("this_year");

    useEffect(() => {
        const initChart = () => {
            chart.current = new Chart(ctx.current, {
                type: "line",
                data: {
                    labels: [
                        ["12:00", "Jan"],
                        "Feb",
                        "Mar",
                        "Apr",
                        "Mei",
                        "Jun",
                        "Jul",
                        "Ags",
                        "Sep",
                        "Okt",
                        "Nov",
                        "Des",
                    ],
                    datasets: [
                        {
                            data: [
                                75, 75, 75, 100, 200, 120, 90, 140, 150, 120,
                                90, 150,
                            ],
                            borderWidth: 1,
                            borderColor: "#229BD8",
                        },
                    ],
                },
                options: {
                    responsive: false,
                    animations: {
                        tension: {
                            duration: 1000,
                            easing: "linear",
                            from: 1,
                            to: 0,
                            loop: true,
                        },
                    },
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
                // chart.current.data.datasets[0].data = [20, blue, 3, 5, 2, 3];
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
            <div className="flex justify-center w-full gap-6 mt-4">
                <div className="flex gap-2">
                    <input
                        type="radio"
                        name="frequent"
                        id="this_yearfrequent_input"
                        defaultValue={`this_year`}
                        checked={frequent == `this_year`}
                        onChange={(e) => setFrequent(e.target.value)}
                    />
                    <label htmlFor="this_yearfrequent_input">
                        Actual Result
                    </label>
                </div>
                <div className="flex gap-2">
                    <input
                        type="radio"
                        name="frequent"
                        id="last_year_frequent_input"
                        defaultValue={`last_year`}
                        checked={frequent == `last_year`}
                        onChange={(e) => setFrequent(e.target.value)}
                    />
                    <label htmlFor="last_year_frequent_input">SA Result</label>
                </div>
            </div>
        </>
    );
};
