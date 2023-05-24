import { DailyProgressCheckApiRepository } from "@data/api/daily-progress-check-api-repository";
import { MachineApiRepository } from "@data/api/machine-api-repository";
import { PartApiRepository } from "@data/api/part-api-repository";
import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { Machine } from "@domain/models/machine";
import { Part } from "@domain/models/part";
import { DailyProgressCheckRepository } from "@domain/repositories/daily-progress-check-repository";
import { MachineRepository } from "@domain/repositories/machine-repository";
import { PartRepository } from "@domain/repositories/part-repository";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
export function useDailyProgressCheckEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const partRepo: PartRepository = new PartApiRepository();
    const machineRepo: MachineRepository = new MachineApiRepository();
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
                acceptSampleTime: null,
                measureSampleTime: null,
                weightPart: 0,
                actWeightPart: 0,
                checked: false,
            })
        );
    const [parts, setParts] = useState<Part[]>([]);
    const [machines, setMachines] = useState<Machine[]>([]);
    const [saveConfirmShow, setSaveConfirmShow] = useState(false);
    const onDailyProgressCheckChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setDailyProgressCheck((prevState) =>
            DailyProgressCheck.create({
                ...prevState.unmarshall(),
                [e.target.name]: e.target.value,
            })
        );
    };
    const onPartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDailyProgressCheck((prevState) =>
            DailyProgressCheck.create({
                ...prevState.unmarshall(),
                partId: e.target.value,
                part: parts.find((item) => item.id == e.target.value),
            })
        );
    };
    const onMachineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDailyProgressCheck((prevState) =>
            DailyProgressCheck.create({
                ...prevState.unmarshall(),
                machine: machines.find((item) => item.id == e.target.value),
                machineId: e.target.value,
            })
        );
    };
    const onPicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDailyProgressCheck((prevState) =>
            DailyProgressCheck.create({
                ...prevState.unmarshall(),
                pic: {
                    name: e.target.value,
                    checked: false,
                },
            })
        );
    };
    const onSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSaveConfirmShow(true);
    };
    const onCancel = () => {
        navigate(-1);
    };
    const onConfirmSave = () => {
        dailyProgressCheckRepo.update(dailyProgressCheck).then((res) => {
            setSaveConfirmShow(false);
            navigate(-1);
        });
    };
    const onCancelSave = () => {
        setSaveConfirmShow(false);
    };
    useEffect(() => {
        partRepo
            .get({ limit: 99999999, page: 1 })
            .then((res) => setParts(res.data));
        machineRepo
            .get({ limit: 9999999, page: 1 })
            .then((res) => setMachines(res.data));
        dailyProgressCheckRepo
            .detail(id)
            .then((res) => setDailyProgressCheck(res));
    }, []);
    return {
        dailyProgressCheck,
        parts,
        machines,
        saveConfirmShow,
        setSaveConfirmShow,
        onPartChange,
        onMachineChange,
        onPicChange,
        onDailyProgressCheckChange,
        onSave,
        onCancel,
        onConfirmSave,
        onCancelSave,
    };
}
