import { TraceabilityApiRepository } from "@data/api/traceabilty-api-repository";
import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { PaginatedData } from "@domain/models/paginated-data";
import { Traceability } from "@domain/models/traceability";
import { IParamsTraceability } from "@domain/models/traceability-params";
import { TraceabilityRepository } from "@domain/repositories/traceability-repository";
import { useEffect, useState } from "react";

export const useTraceability = () => {
    const traceabilityRepo = new TraceabilityApiRepository();

    const [params, setParams] = useState({
        dateFrom: null,
        dateTo: null,
        page: null,
        limit: null,
        pic: "",
        partCode: "",
        shift: "",
    });
    const [pic, setPic] = useState([]);
    const [shift, setShift] = useState([]);
    const [traceability, setTracebility] =
        useState<PaginatedData<DailyProgressCheck>>(null);

    const handleParams = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setParams((prev) => {
            const data = { ...prev, [e.target.name]: e.target.value };
            return data;
        });
    };
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11),
    });

    const handleValueChange = (newValue) => {
        setValue(newValue);
        console.log(newValue);
    };
    const onSubmitSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setParams((prev) => {
            const obj = { dateFrom: value.startDate, dateTo: value.endDate };
            let data = {
                ...prev,
                ...obj,
            };

            return data;
        });
    };
    const fetchPic = () => {
        traceabilityRepo.getpic().then((result) => {
            setPic(result);
        });
    };

    const fetchShift = () => {
        traceabilityRepo.getShift().then((result) => {
            setShift(result);
        });
    };

    const onHandlePAgination = (value) => {
        setParams((prev) => {
            const data = {
                ...prev,
                page: value,
            };
            return data;
        });
    };

    useEffect(() => {
        traceabilityRepo.get(params).then((result) => {
            setTracebility(result);
        });
    }, [params]);

    useEffect(() => {
        fetchShift();
        fetchPic();
    }, []);

    return {
        traceability,
        params,
        pic,
        shift,
        value,
        handleValueChange,
        handleParams,
        onSubmitSearch,
        onHandlePAgination
    };
};
