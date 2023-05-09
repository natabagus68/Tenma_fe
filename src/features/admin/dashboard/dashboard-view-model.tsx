import { DashboatApiRepository } from "@data/api/dashboard-api-repository";
import { PartApiRepository } from "@data/api/part-api-repository";
import { Bar } from "@domain/models/bar-chart-dashboard";
import { PaginatedData } from "@domain/models/paginated-data";
import { Part } from "@domain/models/part";
import { ProgressCheck } from "@domain/models/progress-check-dashboard";
import { Revenue } from "@domain/models/revenue";
import { Sumary } from "@domain/models/sumary-dashbord-chart";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const dashboardModel = () => {
    const dashboardRepo = new DashboatApiRepository();
    const partRepo = new PartApiRepository();
    const navigate = useNavigate();
    const [revenueQuery, setRevenueQuery] = useState({
        part: "",
        character: "",
    });
    const [part, setPart] = useState<PaginatedData<Part>>(
        PaginatedData.create({
            page: 0,
            limit: 0,
            lastPage: 0,
            data: [],
        })
    );
    const [character, setCharacter] = useState([]);
    const [sumaryQuery, setSumaryQuery] = useState("");
    const [sumaryRunner, setSumaryRunner] = useState(false);
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
    const [revenue, setRevenue] = useState<Revenue[]>([]);
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
        dashboardRepo.getSumaryChart(sumaryQuery).then((result) => {
            setSumaryData(result);
            setSumaryRunner(true);
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

    const handleSumaryQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSumaryQuery(e.target.value);
        setSumaryRunner(false);
    };

    const fetchRevenueChart = () => {
        dashboardRepo.getRevenue(revenueQuery).then((result) => {
            setRevenue(result);
        });
    };

    const fetchPartOption = () => {
        partRepo
            .get({ limit: 9999999, page: 0 })
            .then((result) => setPart(result));
    };

    const fetchCharacter = () => {
        dashboardRepo.getCharackter(revenueQuery.part).then((result) => {
            setCharacter(result);
        });
    };
    const toTraceability = () => {
        navigate("traceability");
    };

    const handleChangeRevenue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRevenueQuery((prev) => {
            const data = { ...prev, [e.target.name]: e.target.value };
            return data;
        });
    };

    useEffect(() => {
        fetchPartOption();
    }, []);
    useEffect(() => {
        fetchCharacter();
        console.log(revenueQuery.part);
    }, [revenueQuery.part]);
    useEffect(() => {
        fetchRevenueChart();
    }, [revenueQuery]);
    useEffect(() => {
        fetchSumaryData();
    }, [sumaryQuery]);

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
        sumaryRunner,
        revenueQuery,
        revenue,
        part,
        character,
        handleChangeBarQuery,
        handleTreacibilityTime,
        toTraceability,
        handleSumaryQuery,
        handleChangeRevenue,
    };
};
