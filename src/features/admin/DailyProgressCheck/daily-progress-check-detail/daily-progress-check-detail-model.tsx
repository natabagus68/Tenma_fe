import { config } from "@common/utils";
import { DailyProgressCheckApiRepository } from "@data/api/daily-progress-check-api-repository";
import { HistoryApiRepository } from "@data/api/history-api-repository";
import { ReportApiRepository } from "@data/api/report-api-repository";
import { Segment3dApiRepository } from "@data/api/segment-3d-api-repository";
import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { History } from "@domain/models/history";
import { IMeasurement, Measurement } from "@domain/models/measurement";
import { Segment } from "@domain/models/segment";
import { DailyProgressCheckRepository } from "@domain/repositories/daily-progress-check-repository";
import { HistoryRepository } from "@domain/repositories/history-repository";
import { Segment3dRepository } from "@domain/repositories/segment-3d-repository";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function useDailyProgressCheckDetail() {
    const { id = "" } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();
    const [location, setLocation] = useState(false);
    const [onEditSegment, setOnEditSegment] = useState<boolean>(false);
    const reportRepo = new ReportApiRepository();
    const historyRepo: HistoryRepository = new HistoryApiRepository();
    const dailyProgressCheckRepo = new DailyProgressCheckApiRepository();
    const segmentRepo: Segment3dRepository = new Segment3dApiRepository();
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
                acceptSampleTime: "",
                measureSampleTime: "",
                weightPart: 0,
                actWeightPart: 0,
                checked: false,
            })
        );
    const [segments, setSegments] = useState<Segment[]>([]);
    const [histories, setHistories] = useState<History[]>([]);
    const [deleteSegmentConfirmShow, setDeleteSegmentConfirmShow] =
        useState(false);
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
    const fetchSegment2d = () => {
        dailyProgressCheckRepo
            .get2dSegments(id)
            .then((result) => setSegments(result));
    };

    // =====report

    const fetchRepo2d = () => {
        reportRepo.get2dSegments(id).then((result) => {
            setSegments(result);
        });
    };
    const fetchRepo3d = () => {
        reportRepo.get3dSegments(id).then((result) => setSegments(result));
    };

    const fetchDetailReport = () => {
        reportRepo.getpartReportDetail(id).then((result) => {
            setDailyProgressCheck(result);
        });
    };

    // ===========

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
        } else {
            navigate(
                `${config.pathPrefix}daily-progress-check/${id}/add-segment-data-2d`
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
    const onEditHistory = (
        e: React.MouseEvent<HTMLButtonElement>,
        history: History
    ) => {
        navigate(
            `${config.pathPrefix}daily-progress-check/${id}/history/${history.id}/edit`
        );
    };
    const toEditSegment2d = () => {
        navigate(
            `${config.pathPrefix}daily-progress-check/${id}/edit-segment-data-2d`,
            {
                state: "edit",
            }
        );
    };
    const deleteSegment = (
        e: React.MouseEvent<HTMLButtonElement>,
        id: Segment["id"]
    ) => {
        setSegments((prevState) =>
            prevState.map((item) =>
                item.id == id
                    ? Segment.create({
                          ...item.unmarshall(),
                          checked: true,
                      })
                    : Segment.create({
                          ...item.unmarshall(),
                          checked: false,
                      })
            )
        );
        setDeleteSegmentConfirmShow(true);
    };

    const confirmDeleteSegment = (e: React.MouseEvent<HTMLButtonElement>) => {
        segmentRepo
            .destroy(id, segments.find((item) => item.checked).id)
            .then(() => {
                setDeleteSegmentConfirmShow(false);
                setSegments((prevState) =>
                    prevState.filter((item) => !item.checked)
                );
            });
        setDeleteSegmentConfirmShow(false);
    };

    const handelChangeJudgment = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (toogle == "2d") {
            setDailyProgressCheck((prev) => {
                const data = prev.duplicate();
                data.judgement2d = e.target.value;
                return DailyProgressCheck.create(data);
            });
            await dailyProgressCheckRepo.updateJudgmen(
                id,
                "2d",
                e.target.value
            );
        } else {
            setDailyProgressCheck((prev) => {
                const data = prev.duplicate();
                data.judgement3d = e.target.value;
                return DailyProgressCheck.create(data);
            });
            await dailyProgressCheckRepo.updateJudgmen(
                id,
                "3d",
                e.target.value
            );
        }
    };

    const editSegment = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOnEditSegment(true);
    };
    const saveSegment = async (
        e: React.MouseEvent<HTMLButtonElement>,
        cavityID
    ) => {
        e.preventDefault();
        const data: IMeasurement[] = segments
            .find((item) => item.id === cavityID)
            .pacSegments.map((item) => item);
        console.log(data);
        await dailyProgressCheckRepo.updateCavity3D(id, cavityID, data);
        setOnEditSegment(false);
    };

    const handleEditSegment = (
        e: React.ChangeEvent<HTMLInputElement>,
        iSegment: number,
        iMeas: number
    ) => {
        setSegments((prev) => {
            const data = prev.map((el, i) => {
                if (iSegment == i) {
                    el.pacSegments.map((item, ex) => {
                        if (iMeas === ex) {
                            item[e.target.name] = e.target.value;
                        }
                        return item;
                    });
                }
                return el;
            });

            return data;
        });
    };

    const uploadComparisson = (
        e: React.ChangeEvent<HTMLInputElement>,
        cavityID: string
    ) => {
        // e.preventDefault();
        console.log(id, cavityID);
        const form = new FormData();
        form.append("file", e.target.files[0]);

        dailyProgressCheckRepo
            .uploadComparisson(id, cavityID, form)
            .then(() => {
                console.log("berhasil");
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        if (state) {
            setLocation(true);
            fetchDetailReport();
            if (toogle === "3d") {
                fetchRepo3d();
            } else {
                fetchRepo2d();
            }
        } else {
            fetchDetail();
            if (toogle === "3d") {
                fetchSegment();
            } else {
                fetchSegment2d();
            }
            fetchHistory();
        }
    }, [id, toogle]);
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
        toEditSegment2d,
        deleteSegmentConfirmShow,
        setDeleteSegmentConfirmShow,
        deleteSegment,
        confirmDeleteSegment,
        handelChangeJudgment,
        location,
        editSegment,
        onEditSegment,
        saveSegment,
        handleEditSegment,
        uploadComparisson,
    };
}
