import { HistoryApiRepository } from "@data/api/history-api-repository";
import { History } from "@domain/models/history";
import { HistoryRepository } from "@domain/repositories/history-repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function useHistoryForm() {
    const navigate = useNavigate();
    const { id, historyId } = useParams();
    const historyRepo: HistoryRepository = new HistoryApiRepository();
    const [history, setHistory] = useState<History>(
        History.create({
            date: new Date(),
            problemDetail: "",
            char: "",
            remark: "",
        })
    );
    const [saveConfirmShow, setSaveConfirmShow] = useState(false);
    const onHistoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHistory((history) => {
            const newHistory = history.duplicate().replace({
                ...history.unmarshall(),
                [e.target.name]: e.target.value,
            });
            return newHistory;
        });
    };
    const onSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSaveConfirmShow(true);
    };
    const onSaveConfirm = async (e: React.MouseEvent<HTMLButtonElement>) => {
        historyId
            ? await historyRepo.update(id, history)
            : await historyRepo.store(id, history);
        navigate(-1);
    };
    const onSaveCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSaveConfirmShow(false);
    };
    const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate(-1);
    };
    useEffect(() => {
        historyRepo.show(id, historyId).then((res) => setHistory(res));
    }, [id, historyId]);
    return {
        history,
        saveConfirmShow,
        setSaveConfirmShow,
        historyId,
        onHistoryChange,
        onSave,
        onSaveConfirm,
        onSaveCancel,
        onCancel,
    };
}
