import { ToolApiRepository } from "@data/api/tool-api-repository";
import { WeightingApiRepository } from "@data/api/weighting-api-repository";
import { Tool } from "@domain/models/tool";
import { Transaction } from "@domain/models/transaction";
import { Weighting } from "@domain/models/weighting";
import { WeightingForm } from "@domain/models/weighting-form";
import { ToolRepository } from "@domain/repositories/tool-repository";
import { WeightingRepository } from "@domain/repositories/weighting-repository";
import { useEffect, useState } from "react";

export function useWeighting() {
    const [addData, setAddData] = useState<WeightingForm>(
        WeightingForm.create({
            toolID: "",
            transactionID: "",
        })
    );
    const [dataTools, setDataTools] = useState<Tool[]>([]);
    const [weighting, setWeighting] = useState<Weighting[]>([]);
    const [transaction, setTransaction] = useState<Transaction[]>([]);
    const [search, setSearch] = useState<string>("");
    const [modal, setModal] = useState(false);
    const [confirm, setConfirm] = useState(0);
    const weightingRepo: WeightingRepository = new WeightingApiRepository();
    const toolRepo: ToolRepository = new ToolApiRepository();
    const fetchWeightingData = () => {
        weightingRepo.getWeighting().then((result) => {
            setWeighting(result);
        });
    };

    const handleAddDataForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddData((prevState) => {
            const data = WeightingForm.create({
                ...prevState.unmarshall(),
                [e.target.name]: e.target.value,
            });
            return data;
        });
    };
    const storeAddData = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setModal(true);
    };

    const onConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        weightingRepo.store(addData).then(() => {
            setModal(false);
            setAddData(WeightingForm.create({ toolID: "", transactionID: "" }));
            setConfirm(confirm + 1);
        });
    };

    const getTools = () => {
        toolRepo.getTools().then((result) => {
            setDataTools(result);
        });
    };

    const getTransaction = () => {
        weightingRepo.getTransaction().then((result) => {
            setTransaction(result);
        });
    };
    useEffect(() => {
        fetchWeightingData();
    }, [confirm]);

    useEffect(() => {
        getTools();
        getTransaction();
    }, []);

    return {
        weighting,
        modal,
        addData,
        dataTools,
        transaction,
        setModal,
        handleAddDataForm,
        storeAddData,
        onConfirm,
    };
}
