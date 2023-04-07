import { DailyProgressCheckApiRepository } from "@data/api/daily-progress-check-api-repository";
import { MachineApiRepository } from "@data/api/machine-api-repository";
import { PartApiRepository } from "@data/api/part-api-repository";
import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { Machine } from "@domain/models/machine";
import { Part } from "@domain/models/part";
import {
    DailyProgressCheckRepository,
    IDPCStorePayload,
} from "@domain/repositories/daily-progress-check-repository";
import { MachineRepository } from "@domain/repositories/machine-repository";
import { PartRepository } from "@domain/repositories/part-repository";
import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export function useDailyProgressCheckCreate() {
    const navigate = useNavigate();
    const partRepo: PartRepository = new PartApiRepository();
    const machineRepo: MachineRepository = new MachineApiRepository();
    const dailyProgressCheckRepo: DailyProgressCheckRepository =
        new DailyProgressCheckApiRepository();
    const [dailyProgressCheck, setDailyProgressCheck] =
        useState<IDPCStorePayload>({ machineId: "", partId: "", shift: "" });
    const [parts, setParts] = useState<Part[]>([]);
    const [machines, setMachines] = useState<Machine[]>([]);
    const [saveConfirmShow, setSaveConfirmShow] = useState(false);
    const model = useMemo(() => {
        return parts.find(item => item.id == dailyProgressCheck.partId)?.customerModel
    }, [dailyProgressCheck, parts])
    const onDailyProgressCheckChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setDailyProgressCheck((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const onSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSaveConfirmShow(true);
    };
    const onConfirmSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dailyProgressCheckRepo.store(dailyProgressCheck).then((result) => {
            navigate("../");
        });
    };
    const onCancelSave = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSaveConfirmShow(false);
    };
    const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate("../");
    };
    useEffect(() => {
        partRepo
            .get({ limit: 9999, page: 1, q: "" })
            .then((result) => setParts(result.data));
        machineRepo
            .get({ limit: 9999, page: 1 })
            .then((result) => setMachines(result.data));
    }, []);
    return {
        dailyProgressCheck,
        machines,
        parts,
        model,
        saveConfirmShow,
        setSaveConfirmShow,
        onDailyProgressCheckChange,
        onSave,
        onConfirmSave,
        onCancelSave,
        onCancel,
    };
}
