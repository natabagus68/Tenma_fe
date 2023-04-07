import { config } from "@common/utils";
import { MeasurementStd } from "@domain/models/measurementStd";
import { MeasurementStdApiRepository } from "@data/api/measurement-std-api-repository";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Part } from "@domain/models/part";
import { Segment } from "@domain/models/measurementStd";
import { PartApiRepository } from "@data/api/part-api-repository";
import { PaginatedData } from "@domain/models/paginated-data";
export default function useFormMeasurement() {
    const measurementRepository = new MeasurementStdApiRepository();
    const partRepository = new PartApiRepository();
    const navigate = useNavigate();
    const { id } = useParams();
    const [part, setPart] = useState<PaginatedData<Part>>(
        PaginatedData.create<Part>({
            page: 0,
            limit: 0,
            lastPage: 0,
            data: [],
        })
    );
    const [measurement, setMeasurement] = useState({
        part_code: "",
        segments: [
            {
                character: "",
                nominal_type: "",
                nominal_value: "",
                standard_upper: "",
                standard_lower: "",
                special_accept_upper: "",
                special_accept_lower: "",
                tool_id: "",
            },
        ],
    });

    useEffect(() => {
        partRepository
            .get({ page: 1, limit: 99999 })
            .then((result) => setPart(result));
    }, []);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, ind: string) => {
        setMeasurement((prev) => {
            if (e.target.name === "part_code") {
                const object = { ...prev, part_code: e.target.value };
                return object;
            } else {
                const newSegment = measurement.segments.map((item, i) => {
                    if (ind == i.toString()) {
                        item[e.target.name] = e.target.value;
                    }
                    return item;
                });
                const object = { ...prev, segments: newSegment };
                return object;
            }
        });
    };

    const addColumnt = (e: React.MouseEvent) => {
        e.preventDefault();
        setMeasurement((prev) => ({
            ...prev,
            segments: [
                ...prev.segments,
                {
                    character: "",
                    nominal_type: "",
                    nominal_value: "",
                    standard_upper: "",
                    standard_lower: "",
                    special_accept_upper: "",
                    special_accept_lower: "",
                    tool_id: "",
                },
            ],
        }));
    };

    const deleteColumnt = (e: React.MouseEvent, ind: string) => {
        e.preventDefault();
        const newSegment = [];
        for (let i = 0; i < measurement.segments.length; i++) {
            if (i === parseInt(ind)) continue;
            newSegment.push(measurement.segments[i]);
        }
        setMeasurement((prev) => ({
            ...prev,
            segments: newSegment,
        }));
    };

    const onSave = async () => {
        // id
        //     ? measurementRepository.update(measurement)
        //     : measurementRepository.store(measurement);
    };
    return {
        measurement,
        onChange,
        addColumnt,
        deleteColumnt,
        part,
        id,
    };
}
