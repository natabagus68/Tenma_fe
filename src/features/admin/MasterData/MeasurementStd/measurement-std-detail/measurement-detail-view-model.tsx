import { MeasurementStdApiRepository } from "../../../../../data/api/measurement-std-api-repository";
import { MeasurementStd } from "../../../../../domain/models/measurement-std";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Part } from "../../../../../domain/models/part";
import { Segment } from "@domain/models/segment";
import { Measurement } from "@domain/models/measurement";
import { config } from "@common/utils";

export default function useMeasurementDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const measurementRepository = new MeasurementStdApiRepository();
    const [measurement, setMeasurement] = useState<MeasurementStd>(
        MeasurementStd.create({
            part: Part.createEmpty(),
            segments: [
                Measurement.create({
                    character: "",
                    nominal: "",
                    nominalValue: "",
                    upper: 0,
                    lower: 0,
                    saUpper: 0,
                    saLower: 0,
                    result: "",
                    judgement: "",
                    saResult: "",
                    saJudgement: "",
                    checked: false,
                }),
            ],
            checked: false,
        })
    );

    const toEdit = () => {
        navigate(
            `${config.pathPrefix}master-data/measurement-std/${id}/edit-data`
        );
    };
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
        toEdit,
    };
}
