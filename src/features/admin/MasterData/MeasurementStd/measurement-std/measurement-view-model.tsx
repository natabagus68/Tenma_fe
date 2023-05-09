import {
    IMeasurementStd,
    MeasurementStd,
} from "@domain/models/measurement-std";
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
            totalRow: 0,
            data: [],
        })
    );
    const [deleteConfirmShow, setDeleteConfirmShow] = useState(false);

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
        navigate(`add-data`);
    };

    const onDelete = (id: string) => {
        setMeasurementStd((prev) =>
            PaginatedData.create<MeasurementStd>({
                ...prev.unmarshall(),
                data: prev.unmarshall().data.map((item) =>
                    item.id == id
                        ? MeasurementStd.create({
                              id: item.id,
                              part: item.part,
                              segments: item.segments,
                              checked: true,
                          })
                        : MeasurementStd.create({
                              id: item.id,
                              part: item.part,
                              segments: item.segments,
                              checked: false,
                          })
                ),
            })
        );
        setDeleteConfirmShow(true);
    };

    const onCancel = () => {
        navigate(-1);
    };
    const onPageChange = (page: number) => {
        setMeasurementStd((prev) => {
            const data = PaginatedData.create({ ...prev.unmarshall(), page });
            return data;
        });
    };
    const onConfirmDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        measurementStdRepository
            .destroy(measurementStd.data.find((item) => item.checked).id)
            .then(() => {
                setDeleteConfirmShow(false);
                measurementStdRepository
                    .get({
                        limit: measurementStd.limit,
                        page: measurementStd.page,
                    })
                    .then((result) => setMeasurementStd(result));
            });
    };
    useEffect(() => {
        measurementStdRepository
            .get({
                limit: measurementStd.limit,
                page: measurementStd.page,
            })
            .then((result) => setMeasurementStd(result));
    }, [measurementStd]);

    return {
        measurementStd,
        toDetail,
        toEdit,
        toAddData,
        onCancel,
        onDelete,
        deleteConfirmShow,
        setDeleteConfirmShow,
        onConfirmDelete,
        onPageChange,
    };
}
