import { DashboatApiRepository } from "@data/api/dashboard-api-repository";
import { Bar } from "@domain/models/bar-chart-dashboard";
import { ProgressCheck } from "@domain/models/progress-check-dashboard";
import { Sumary } from "@domain/models/sumary-dashbord-chart";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const dashboardModel = () => {
    const navigate = useNavigate();
    const dashboardRepo = new DashboatApiRepository();
    const [barQuery, setBarQuery] = useState<string>("daily");
    const [traceability, setTraceability] = useState("");
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
            console.log(result, "sumary das");
            setSumaryData(result);
        });
    };
    const fetchProgessCheck = () => {
        dashboardRepo.getProgressCheck(traceability).then((result) => {
            setProgressCheckData(result);
        });
    };
    const fetchBar = () => {
        dashboardRepo.getBarCharData(barQuery).then((result) => {
            console.log(result, "bar");
            setBar(result);
        });
    };
    const handleChangeBarQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBarQuery(e.target.value);
    };
    const handleTreacibilityTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTraceability(e.target.value);
    };
    const toTraceability = () => {
        navigate("traceability");
    };
    useEffect(() => {
        fetchSumaryData();
    }, []);

    useEffect(() => {
        fetchProgessCheck();
    }, [traceability]);

    useEffect(() => {
        fetchBar();
    }, [barQuery]);
    return {
        sumaryData,
        progressCheckData,
        bar,
        barQuery,
        handleChangeBarQuery,
        handleTreacibilityTime,
        toTraceability,
    };
};
