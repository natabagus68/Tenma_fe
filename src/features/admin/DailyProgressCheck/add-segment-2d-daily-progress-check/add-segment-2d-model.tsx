import { MeasurementStdApiRepository } from "@data/api/measurement-std-api-repository";
import { Segment2dApiRepository } from "@data/api/segment-2d-api-repository";
import { MeasurementStd } from "@domain/models/measurement-std";
import { Segment2D } from "@domain/models/segment-2d";
import { MeasurementStdRepository } from "@domain/repositories/measurement-std-repository";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function useAddSegment2dModel() {
    const { id } = useParams();
    const navigate = useNavigate();
    const measuremntStdRepo: MeasurementStdRepository =
        new MeasurementStdApiRepository();
    const segment2dRepo: Segment2dApiRepository = new Segment2dApiRepository();
    const [segments, setSegments] = useState<Segment2D[]>([]);
    const [measurementStd, setMeasurementStd] = useState<MeasurementStd>(
        MeasurementStd.create({
            part: undefined,
            segments: [],
            checked: false,
        })
    );
    const onCancel = () => {
        navigate("../");
    };
    const fetchMeasurementStd = () => {
        measuremntStdRepo.getByProcessId(id).then((result) => {
            setMeasurementStd(result);
            setSegments((prevState) => [
                ...prevState,
                Segment2D.create({
                    name: "",
                    measurements: result.segments,
                }),
            ]);
        });
    };
    const onAddSegment = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSegments((prevState) => [
            ...prevState,
            Segment2D.create({
                name: "",
                measurements: measurementStd.segments,
            }),
        ]);
    };

    const onChangeInput = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number,
        index2: number
    ) => {
        setSegments((prev) => {
            const newPrev = prev.map((el, i) => {
                const obj = el.duplicate();
                if (i == index) {
                    obj.updateMeasurement(index2, {
                        ...prev[index].measurements[index2].unmarshall(),
                        [e.target.name]: e.target.value,
                    });
                    return obj;
                }
                return obj;
            });
            return newPrev;
        });
    };

    const onInputNameChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        setSegments((prev) => {
            const newPrev = prev.map((el, i) => {
                const obj = el.duplicate();
                console.log(obj);
                if (index == i) {
                    obj.updateName(index, e.target.value);
                }
                return obj;
            });
            return newPrev;
        });
    };

    const onSave = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        segment2dRepo.store(id, segments).then((result) => navigate(-1));
    };

    useEffect(() => {
        fetchMeasurementStd();
    }, []);
    return {
        segments,
        measurementStd,
        onAddSegment,
        onCancel,
        onChangeInput,
        onInputNameChange,
        onSave,
    };
}
