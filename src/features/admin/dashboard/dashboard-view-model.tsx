import { DashboatApiRepository } from "@data/api/dashboard-api-repository";
import { Bar } from "@domain/models/bar-chart-dashboard";
import { ProgressCheck } from "@domain/models/progress-check-dashboard";
import { Sumary } from "@domain/models/sumary-dashbord-chart";
import { useEffect, useState } from "react";

export const dashboardModel = () => {
    const dashboardRepo = new DashboatApiRepository();
    const [barQuery, setBarQuery] = useState<string>("daily");
    const [sumaryData, setSumaryData] = useState<Sumary>(
        Sumary.create({
            total: 0,
            ok: 0,
            ng: 0,
            waiting: 0,
        })
    );

    const [progressCheckData, setProgressCheckData] = useState<ProgressCheck>(
        ProgressCheck.create({
            part: 0,
            progressCheck: 0,
            ThreeDCheck: 0,
            TwoDCheck: 0,
        })
    );

    const [bar, setBar] = useState<Bar>(
        Bar.create({
            date: [],
            data3D: [],
            data2D: [],
        })
    );

    const fetchSumaryData = () => {
        dashboardRepo.getSumaryChart().then((result) => {
            setSumaryData(result);
        });
    };
    const fetchProgessCheck = () => {
        dashboardRepo.getProgressCheck().then((result) => {
            setProgressCheckData(result);
        });
    };
    const fetchBar = () => {
        dashboardRepo.getBarCharData(barQuery).then((result) => {
            setBar(result);
        });
    };
    useEffect(() => {
        fetchSumaryData();
        fetchProgessCheck();
        fetchBar();
    }, []);
    return {
        sumaryData,
        progressCheckData,
        bar,
    };
};
