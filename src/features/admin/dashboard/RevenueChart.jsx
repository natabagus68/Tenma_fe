import React, { useEffect, useRef, useState } from "react";
import Chart from "./../../../common/components/Chart";

export const RevenueChart = ({ datas }) => {
  // console.log(datas.map((e) => e.result));
  const ctx = useRef();
  const chart = useRef();
  const [blue, setBlue] = useState(12);
  const [frequent, setFrequent] = useState("this_year");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(datas);
  }, [datas]);

  useEffect(() => {
    const initChart = () => {
      chart.current = new Chart(ctx.current, {
        type: "line",
        data: {
          labels: data.map((item) => item.createdAt),
          datasets: [
            {
              label: "actual result",
              backgroundColor: "#F5A618",
              data: data.map((item) => Number(item.result)),
            },
            {
              label: "special accept result",
              backgroundColor: "#D0D3D9",
              data: data.map((item) => Number(item.saResult)),
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
        // chart.current.data.datasets[0].data = [20, blue, 3, 5, 2, 3];
        chart.current.destroy();
        initChart();
      } catch (e) {
        chart.current.destroy();
        initChart();
      }
    }
  }, [datas]);

  return (
    <>
      <div className="w-full">
        <canvas className="w-[700px]" ref={ctx}></canvas>
      </div>
      <div className="flex justify-center w-full gap-6 mt-4">
        <div className="flex gap-2 items-center">
          <div className="w-[18px] h-[8px] bg-[#F5A618]"></div>
          <label htmlFor="this_yearfrequent_input">
            <span className="text-sm font-[400]">Actual Result</span>
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-[18px] h-[6px] bg-[#D0D3D9]"></div>
          <label htmlFor="last_year_frequent_input">
            <span className="text-sm font-[400]">SA Result</span>
          </label>
        </div>
      </div>
    </>
  );
};
