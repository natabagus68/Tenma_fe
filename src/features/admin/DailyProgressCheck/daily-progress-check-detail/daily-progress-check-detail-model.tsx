import { config } from "@common/utils";
import { DailyProgressCheckApiRepository } from "@data/api/daily-progress-check-api-repository";
import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { History } from "@domain/models/history";
import { Segment } from "@domain/models/segment";
import { DailyProgressCheckRepository } from "@domain/repositories/daily-progress-check-repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function useDailyProgressCheckDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dailyProgressCheckRepo: DailyProgressCheckRepository =
        new DailyProgressCheckApiRepository();
    const [dailyProgressCheck, setDailyProgressCheck] =
        useState<DailyProgressCheck>(
            DailyProgressCheck.create({
                picId: "",
                judgement: "",
                judgement2d: "",
                judgement3d: "",
                updatedAt: undefined,
                partCode: "",
                model: "",
                shift: "",
                has3d: false,
                has2d: false,
                partId: "",
                machineId: "",
                inspectionDate: undefined,
                lotProduction: "",
                labelNo: "",
                acceptSampleTime: new Date(),
                measureSampleTime: new Date(),
                weightPart: 0,
                checked: false,
            })
        );
    const [segments, setSegments] = useState<Segment[]>([]);
    const [histories, setHistories] = useState<History[]>([]);
    const fetchDetail = () => {
        dailyProgressCheckRepo
            .detail(id)
            .then((res) => setDailyProgressCheck(res));
    };
    const fetchSegment = () => {
        dailyProgressCheckRepo
            .get3dSegments(id)
            .then((res) => setSegments(res));
    };
    const fetchHistory = () => {
        dailyProgressCheckRepo
            .getHistories(id)
            .then((res) => setHistories(res));
    };
    const [toogle, setToogle] = useState<"2d" | "3d">("2d");
    const onToogle = () => {
        setToogle((toogle) => (toogle === "2d" ? "3d" : "2d"));
    };
    const onAddSegment = () => {
        if (toogle === "3d") {
            navigate(
                `${config.pathPrefix}daily-progress-check/${id}/create-segment`
            );
        } else {
            navigate(
                `${config.pathPrefix}daily-progress-check/${id}/add-segment-data-2d`
            );
        }
    };
    const onAddHistory = () => {};
    const onDownloadReport = () => {};
    const onBack = () => {
        navigate(-1);
    };
    useEffect(() => {
        fetchDetail();
        fetchSegment();
        fetchHistory();
    }, [id]);
    return {
        dailyProgressCheck,
        segments,
        histories,
        toogle,
        onToogle,
        onAddHistory,
        onAddSegment,
        onDownloadReport,
        onBack,
    };
}
