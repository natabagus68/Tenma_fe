import { MeasurementStdApiRepository } from "@data/api/measurement-std-api-repository";
import { MeasurementStd } from "@domain/models/measurement-std";
import { Segment2D } from "@domain/models/segment-2d";
import { MeasurementStdRepository } from "@domain/repositories/measurement-std-repository";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useAddSegment2dModel() {
    const { id } = useParams();
    const measuremntStdRepo: MeasurementStdRepository =
        new MeasurementStdApiRepository();
    const [segments, setSegments] = useState<Segment2D[]>([]);
    const [measurementStd, setMeasurementStd] = useState<MeasurementStd>(
        MeasurementStd.create({
            part: undefined,
            segments: [],
            checked: false,
        })
    );
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
    useEffect(() => {
        fetchMeasurementStd();
    }, []);
    return {
        segments,
        measurementStd,
        onAddSegment,
    };
}
