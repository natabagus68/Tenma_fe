import { config } from "@common/utils";
import { DailyProgressCheckApiRepository } from "@data/api/daily-progress-check-api-repository";
import { HistoryApiRepository } from "@data/api/history-api-repository";
import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { History } from "@domain/models/history";
import { Segment } from "@domain/models/segment";
import { DailyProgressCheckRepository } from "@domain/repositories/daily-progress-check-repository";
import { HistoryRepository } from "@domain/repositories/history-repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function useDailyProgressCheckDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const historyRepo: HistoryRepository = new HistoryApiRepository();
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
        historyRepo.get(id).then((res) => setHistories(res));
    };
    const [toogle, setToogle] = useState<"2d" | "3d">("2d");
    const [confirmDeleteHistoryShow, setConfirmDeleteHistoryShow] =
        useState(false);
    const onToogle = () => {
        setToogle((toogle) => (toogle === "2d" ? "3d" : "2d"));
    };
    const onAddSegment = () => {
        if (toogle === "3d") {
            navigate(
                `${config.pathPrefix}daily-progress-check/${id}/create-segment`
            );
        }
    };
    const onAddHistory = () => {
        navigate(
            `${config.pathPrefix}daily-progress-check/${id}/history/create`
        );
    };
    const onDownloadReport = () => {};
    const onBack = () => {
        navigate(-1);
    };
    const onDeleteHistory = (
        e: React.MouseEvent<HTMLButtonElement>,
        history: History
    ) => {
        e.preventDefault();
        setHistories((histories) =>
            histories.map((item) => {
                const newItem = item.duplicate();
                item.id == history.id ? newItem.check() : newItem.uncheck();
                return newItem;
            })
        );
        setConfirmDeleteHistoryShow(true);
    };
    const onConfirmDeleteHistory = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        historyRepo
            .destroy(id, histories.find((item) => item.checked).id)
            .then((res) => {
                setHistories((histories) =>
                    histories.filter((item) => !item.checked)
                );
                setConfirmDeleteHistoryShow(false);
            });
    };
    const onEditHistory = (e:React.MouseEvent<HTMLButtonElement>, history:History) => {
        navigate(`${config.pathPrefix}daily-progress-check/${id}/history/${history.id}/edit`)
    }
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
        confirmDeleteHistoryShow,
        setConfirmDeleteHistoryShow,
        onDeleteHistory,
        onConfirmDeleteHistory,
        onToogle,
        onAddHistory,
        onAddSegment,
        onDownloadReport,
        onBack,
        onEditHistory,
    };
}
