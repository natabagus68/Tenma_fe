import { DailyProgressCheckApiRepository } from "@data/api/daily-progress-check-api-repository";
import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { DailyProgressCheckRepository } from "@domain/repositories/daily-progress-check-repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function useDailyProgressCheckDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dailyProgressCheckRepo = new DailyProgressCheckApiRepository();
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
                checked: false,
            })
        );

    const [segments, setSegments] = useState({});
    const fetchDetail = () => {
        dailyProgressCheckRepo.detail(id);
    };
    const [toogle, setToogle] = useState<"2d" | "3d">("2d");
    const onToogle = () => {
        if (toogle == "2d") {
            setToogle("3d");
        } else {
            setToogle("2d");
        }
    };
    const onAddSegment = () => {
        navigate("add-segment-data-" + toogle);
    };
    const onAddHistory = () => {};
    const onDownloadReport = () => {};
    const onBack = () => {};
    useEffect(() => {
        dailyProgressCheckRepo
            .getCavity(id, toogle)
            .then((result) => setSegments(result));
    }, [toogle]);
    return {
        dailyProgressCheck,
        toogle,
        onToogle,
        onAddHistory,
        onAddSegment,
        onDownloadReport,
        onBack,
    };
}
