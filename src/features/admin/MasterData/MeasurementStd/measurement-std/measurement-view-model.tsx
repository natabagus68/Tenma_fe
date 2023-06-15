import {
  IMeasurementStd,
  MeasurementStd,
} from "@domain/models/measurement-std";
import { MeasurementStdApiRepository } from "@data/api/measurement-std-api-repository";
import { PaginatedData } from "@domain/models/paginated-data";
import { config } from "@common/utils";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TableParam } from "types";

export default function useMeasurement() {
  const measurementStdRepository = new MeasurementStdApiRepository();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [params, setParams] = useState<TableParam>({
    page: 1,
    limit: 10,
    q: "",
  });
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
    navigate(`${config.pathPrefix}master-data/measurement-std/${id}/detail`);
  };

  const toEdit = (id: string) => {
    navigate(`${config.pathPrefix}master-data/measurement-std/${id}/edit-data`);
  };
  const toAddData = () => {
    navigate(`add-data`);
  };

  const onDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: MeasurementStd["id"]
  ) => {
    e.preventDefault();
    console.log(id);
    setMeasurementStd((prev) => {
      const result = PaginatedData.create<MeasurementStd>({
        ...prev.unmarshall(),
        data: prev.data.map((item) => {
          return MeasurementStd.create({
            ...item.unmarshall(),
            checked: id === item.id ? true : false,
          });
        }),
      });

      return result;
    });
    setDeleteConfirmShow(true);
  };

  const onCancel = () => {
    navigate(-1);
  };
  // const onPageChange = (page: number) => {
  //   setMeasurementStd((prev) => {
  //     const data = PaginatedData.create({ ...prev.unmarshall(), page });
  //     return data;
  //   });
  // };
  const onConfirmDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = measurementStd.data.find((item) => item.checked);
    measurementStdRepository.destroy(data.id).then(() => {
      setDeleteConfirmShow(false);
      setMeasurementStd((prev) => {
        const result = PaginatedData.create<MeasurementStd>({
          ...prev.unmarshall(),
          data: prev.data.filter((item) => !item.checked),
        });

        return result;
      });
    });
  };

  const cancelDelete = () => {
    setDeleteConfirmShow(!deleteConfirmShow);
  };

  const onPageChange = (
    e: React.MouseEvent<HTMLButtonElement>,
    page: number
  ) => {
    e.preventDefault();
    setParams((prev) => {
      return {
        ...prev,
        page,
      };
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams((prev) => {
      return {
        ...prev,
        q: e.target.value,
      };
    });
  };

  useEffect(() => {
    measurementStdRepository
      .get({
        limit: params.limit,
        page: params.page,
        q: params.q,
      })
      .then((result) => setMeasurementStd(result));
  }, [params.page, params.q]);

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
    cancelDelete,
    handleSearch,
    params,
  };
}
