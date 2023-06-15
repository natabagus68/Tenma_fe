import { config } from "@common/utils";
import { ColorApiRepository } from "@data/api/color-api-repository";
import { Color, IColor } from "@domain/models/color";
import { PaginatedData } from "@domain/models/paginated-data";
import { ColorRepository } from "@domain/repositories/color-repository";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableParam } from "types";

export default function useColor() {
  const colorRepository: ColorRepository = new ColorApiRepository();
  const navigate = useNavigate();
  const [deleteConfirmShow, setDeleteConfirmShow] = useState(false);
  const [params, setParams] = useState<TableParam>({
    page: 0,
    limit: 10,
    q: "",
  });
  const [color, setColor] = useState<PaginatedData<Color>>(
    PaginatedData.create<Color>({
      page: 0,
      limit: 0,
      lastPage: 0,
      totalRow: 0,
      data: [],
    })
  );
  const onAdd = () => {
    navigate(`${config.pathPrefix}master-data/color/create`);
  };
  const onEdit = (id: IColor["id"]) => {
    navigate(`${config.pathPrefix}master-data/color/${id}/edit`);
  };
  const onDelete = (id: IColor["id"]) => {
    setDeleteConfirmShow(true);
    setColor((prevColor) => {
      const color = PaginatedData.create<Color>(prevColor.unmarshall());
      color.data.find((item) => item.id == id).check();
      return color;
    });
  };
  const onConfirmDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await colorRepository.destroy(color.data.find((item) => item.checked).id);
    setDeleteConfirmShow(false);
    setColor((prevColor) => {
      const color = PaginatedData.create<Color>(prevColor.unmarshall());
      color.data = color.data.filter((item) => !item.checked);
      return color;
    });
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

  const cancelDelete = () => {
    setDeleteConfirmShow(!deleteConfirmShow);
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
    colorRepository
      .get({ limit: params.limit, page: params.page, q: params.q })
      .then((result) => {
        return setColor(result);
      });
  }, [params.page, params.q]);
  return {
    color,
    onAdd,
    onEdit,
    onDelete,
    onConfirmDelete,
    onPageChange,
    deleteConfirmShow,
    setDeleteConfirmShow,
    cancelDelete,
    handleSearch,
    params,
  };
}
