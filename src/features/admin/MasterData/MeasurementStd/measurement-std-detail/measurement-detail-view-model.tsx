import { MeasurementStdApiRepository } from "../../../../../data/api/measurement-std-api-repository";
import { MeasurementStd } from "../../../../../domain/models/measurement-std";
import { useNavigate, useParams } from "react-router-dom";
import { PaginatedData } from "../../../../../domain/models/paginated-data";
import { useState, useEffect } from "react";
import { Segment } from "../../../../../domain/models/segment";
import { Part } from "../../../../../domain/models/part";

export default function useMeasurementDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const measurementRepository = new MeasurementStdApiRepository();
    const [measurement, setMeasurement] = useState<MeasurementStd>(
        MeasurementStd.create({
            part: Part.createEmpty(),
            segments: [
                Segment.create({
                    character: "",
                    nominal: "",
                    nominalValue: "",
                    upper: 0,
                    lower: 0,
                    saUpper: 0,
                    saLower: 0,
                    checked: false,
                }),
            ],
            checked: false,
        })
    );

    const toEdit = (id: string) => {};
    const back = () => {
        navigate("../");
    };
    useEffect(() => {
        measurementRepository.show(id).then((result) => setMeasurement(result));
    }, []);

    return {
        id,
        measurement,
        back,
    };
}
