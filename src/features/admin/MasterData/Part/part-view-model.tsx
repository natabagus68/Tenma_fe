import { config } from "@common/utils";
import { IPaginatedData, PaginatedData } from "@domain/models/paginated-data";
import { IPart, Part } from "@domain/models/part";
import { PartRepository } from "@domain/repositories/part-repository";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TableParam } from "types";

export function usePart(partRepository: PartRepository) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [deleteConfirmShow, setDeleteConfirmShow] = useState(false);
  const [countRow, setCountRow] = useState(0);
  const [params, setParams] = useState<TableParam>({
    page: 1,
    limit: 10,
    q: "",
  });
  const [pageinationShow, setPaginationShow] = useState(false);
  const navigate = useNavigate();
  const partRef = useRef<PaginatedData<Part>>(
    PaginatedData.create<Part>({
      data: [],
      lastPage: 1,
      totalRow: 1,
      limit: Number(searchParams.get("limit")) || 10,
      page: Number(searchParams.get("page")) || 1,
      q: searchParams.get("q") || "",
    })
  );
  const [part, setPart] = useState<IPaginatedData<IPart>>(
    partRef.current.unmarshall()
  );
  const onAddData = () => {
    navigate(`${config.pathPrefix}master-data/part/create`);
  };
  const onDetail = (part: IPart) => {
    navigate(`${config.pathPrefix}master-data/part/${part.id}/detail`);
  };
  const onEdit = (part: IPart) => {
    navigate(`${config.pathPrefix}master-data/part/${part.id}/edit`);
  };
  const onDelete = (part: IPart) => {
    partRef.current.data = partRef.current.data.map((item) =>
      item.id == part.id ? item.check() : item.uncheck()
    );
    setPart(partRef.current.unmarshall());
    setDeleteConfirmShow(true);
  };

  const onConfirmDelete = () => {
    setDeleteConfirmShow(false);
    partRepository
      .destroy(partRef.current.data.find((item) => item.checked))
      .then(() => {
        loadPart();
      });
  };
  const loadPart = () => {
    partRepository
      .get({ limit: params.limit, page: params.page, q: params.q })
      .then((result) => {
        partRef.current = result;
        setPart(partRef.current.unmarshall());
        setCountRow(result.totalRow);
        setPaginationShow(true);
      });
  };

  const cancelDelete = () => {
    setDeleteConfirmShow(!deleteConfirmShow);
  };

  const toDuplicate = (part) => {
    navigate(`${config.pathPrefix}master-data/part/${part.id}/duplicate`);
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
  const handelSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams((prev) => {
      return {
        ...prev,
        q: e.target.value,
      };
    });
  };
  // useEffect(() => {
  //   setSearchParams({
  //     q: part.q,
  //     page: `${part.page}`,
  //     limit: `${part.limit}`,
  //   });
  // }, [part.page]);
  useEffect(() => {
    loadPart();
  }, [params.page, params.q]);
  return {
    countRow,
    params,
    part,
    onAddData,
    onDetail,
    onEdit,
    onDelete,
    onPageChange,
    deleteConfirmShow,
    setDeleteConfirmShow,
    onConfirmDelete,
    cancelDelete,
    handelSearch,
    toDuplicate,
    partRef,
    pageinationShow,
  };
}
