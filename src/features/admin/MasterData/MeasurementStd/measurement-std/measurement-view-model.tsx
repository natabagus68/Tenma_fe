import { MeasurementStd } from "@domain/models/measurementStd";
import { MeasurementStdApiRepository } from "@data/api/measurement-std-api-repository";
import { PaginatedData } from "@domain/models/paginated-data";
import { config } from "@common/utils";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useMeasurement() {
    const measurementStdRepository = new MeasurementStdApiRepository();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [measurementStd, setMeasurementStd] = useState<
        PaginatedData<MeasurementStd>
    >(
        PaginatedData.create<MeasurementStd>({
            page: 1,
            limit: 10,
            lastPage: 0,
            data: [],
        })
    );

    const toDetail = (id: string) => {
        navigate(
            `${config.pathPrefix}master-data/measurement-std/${id}/detail`
        );
    };

    const toEdit = (id: string) => {
        navigate(
            `${config.pathPrefix}master-data/measurement-std/${id}/edit-data`
        );
    };
    const toAddData = () => {
        navigate(`${config.pathPrefix}master-data/measurement-std/add-data`);
    };

    const onDelete = (id: string) => {
        setMeasurementStd((prev) => {
            const measurement = PaginatedData.create(prev.unmarshall());
            measurement.data.forEach((item) => {
                item.id == id ? item.check() : item.uncheck();
            });
            return measurement;
        });
        setShowModal(true);
    };

    const onConfirm = async (e: React.MouseEvent) => {
        e.preventDefault();
        const { id } = measurementStd.data.find((item) => item.checked);
        setMeasurementStd((prev) => {
            const measurement = PaginatedData.create(prev.unmarshall());
            measurement.data.filter((item) => !item.checked);
            return measurement;
        });

        await measurementStdRepository.destroy(id);
        setShowModal(false);
    };

    const onCancel = () => {};
    useEffect(() => {
        measurementStdRepository
            .get({
                limit: measurementStd.limit,
                page: measurementStd.page,
            })
            .then((result) => setMeasurementStd(result));
    }, []);

    return {
        measurementStd,
        toDetail,
        toEdit,
        toAddData,
        onDelete,
        onConfirm,
        onCancel,
    };
}
