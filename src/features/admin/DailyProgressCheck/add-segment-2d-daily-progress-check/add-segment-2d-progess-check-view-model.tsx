import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MeasurementStdApiRepository } from "@data/api/measurement-std-api-repository";
import { PaginatedData } from "@domain/models/paginated-data";
import { MeasurementStd } from "@domain/models/measurement-std";
import { ISegment2D, Segment2D } from "@domain/models/segment-2d";
import { Tool } from "@domain/models/tool";
import { Segment } from "@domain/models/segment";
import { PacSegment } from "../../../../domain/models/pac-segment";
export default function useAddSegmentTwoD() {
    const { id } = useParams();
    const navigate = useNavigate();
    const measurementRepo = new MeasurementStdApiRepository();
    const [measurement, setMeasurement] = useState<
        PaginatedData<MeasurementStd>
    >(
        PaginatedData.create<MeasurementStd>({
            page: 1,
            limit: 10,
            lastPage: 0,
            data: [],
        })
    );
    const [tabelSegment, setTableSegment] = useState([]);
    const addSegment = () => {};
    const onSave = () => {};
    const onCancel = () => {
        navigate("../");
    };
    const handelInputNameChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {};
    const handleTableInput = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {};

    useEffect(() => {
        measurementRepo
            .get({ page: measurement.page, limit: 999999 })
            .then((result) => {
                setTableSegment((prev) => {
                    const data = result.data.map((e) => {
                        return e;
                    });
                    return data;
                });
            });
    }, []);
    return {
        id,
        onSave,
        addSegment,
        onCancel,
        handelInputNameChange,
        handleTableInput,
        measurement,
        tabelSegment,
    };
}
