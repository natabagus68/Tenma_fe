import { config } from "@common/utils";
import { ColorApiRepository } from "@data/api/color-api-repository";
import { Color, IColor } from "@domain/models/color";
import { PaginatedData } from "@domain/models/paginated-data";
import { ColorRepository } from "@domain/repositories/color-repository";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useColor() {
  const colorRepository: ColorRepository = new ColorApiRepository();
  const navigate = useNavigate();
  const [deleteConfirmShow, setDeleteConfirmShow] = useState(false);
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
  const onPageChange = (page: number) => {
    setColor((prev) => {
      const data = PaginatedData.create({
        ...prev.unmarshall(),
        page: page,
      });
      return data;
    });
  };
  const onCacelComfirmShow = () => {
    setDeleteConfirmShow(!deleteConfirmShow);
  };
  useEffect(() => {
    colorRepository
      .get({ limit: color.limit, page: color.page })
      .then((result) => {
        return setColor(result);
      });
  }, []);
  return {
    color,
    onAdd,
    onEdit,
    onDelete,
    onConfirmDelete,
    onPageChange,
    deleteConfirmShow,
    setDeleteConfirmShow,
    onCacelComfirmShow
  };
}

