import { DailyProgressCheckApiRepository } from "@data/api/daily-progress-check-api-repository";
import { DailyProgressCheck } from "@domain/models/daily-progress-check";
import { PaginatedData } from "@domain/models/paginated-data";
import { Pic } from "@domain/models/pic";
import {
  DailyProgressCheckRepository,
  IDPCGetParam,
} from "@domain/repositories/daily-progress-check-repository";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useDailyProgressCheck() {
  const dailyProgressCheckRepository: DailyProgressCheckRepository =
    new DailyProgressCheckApiRepository();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [dailyProgressCheck, setDailyProgressCheck] = useState(
    PaginatedData.create<DailyProgressCheck>({
      page: 1,
      limit: 10,
      lastPage: 1,
      data: [],
    })
  );
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });
  const [dailyProgressCheckGetPayload, setDailyProgressCheckGetPayload] =
    useState<IDPCGetParam>({
      date: searchParams.get("date") || moment().format("YYYY-MM-DD"),
      judgement: searchParams.get("judgement") || "",
      limit: Number(searchParams.get("limit")) || 10,
      page: Number(searchParams.get("page")) || 1,
      pic: searchParams.get("pic") || "",
      search: searchParams.get("search") || "",
    });
  const [deleteConfirmShow, setDeleteConfirmShow] = useState(false);
  const [pic, setPic] = useState<Pic[]>([]);
  const fetchDailyProgressCheck = () => {
    dailyProgressCheckRepository
      .get(dailyProgressCheckGetPayload)
      .then((result) => setDailyProgressCheck(result));
  };
  const onDailyProgressCheckGetPayloadChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setDailyProgressCheckGetPayload((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("create");
  };
  const onDetail = (item: DailyProgressCheck) => {
    navigate(`${item.id}/detail`);
  };
  const onEdit = (item: DailyProgressCheck) => {
    navigate(`${item.id}/edit`);
  };
  const onDelete = (payload: DailyProgressCheck) => {
    setDailyProgressCheck((prevState) => {
      const newState = prevState.duplicate();
      newState.data.forEach((item) =>
        item.id == payload.id ? item.check() : item.uncheck()
      );
      return newState;
    });
    setDeleteConfirmShow(true);
  };
  const onCancelDelete = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const onConfirmDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    dailyProgressCheckRepository
      .destroy(dailyProgressCheck.data.find((item) => item.checked).id)
      .then((result) =>
        setDailyProgressCheck((prevState) => {
          const newState = prevState.duplicate();
          newState.data = newState.data.filter((item) => !item.checked);
          return newState;
        })
      );
    setDeleteConfirmShow(false);
  };

  const handleChangeJudgment = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: string,
    index: number
  ) => {
    const value = `${e.target.value}`;
    await dailyProgressCheckRepository.updateJudgmentUniv(id, value);
    setDailyProgressCheck((prev) => {
      const newState = prev.duplicate();
      newState.data = newState.data.map((item, i) => {
        i == index ? (item.judgement = value) : true;
        return item;
      });
      return newState;
    });
  };

  useEffect(() => {
    fetchDailyProgressCheck();
    dailyProgressCheckRepository.getPic().then((res) => setPic(res));
  }, []);
  useEffect(() => {
    setSearchParams({
      ...dailyProgressCheckGetPayload,
      date: moment(dailyProgressCheckGetPayload.date).format("YYYY-MM-DD"),
      page: `${dailyProgressCheckGetPayload.page}`,
      limit: `${dailyProgressCheckGetPayload.limit}`,
    });
    fetchDailyProgressCheck();
  }, []);
  return {
    dailyProgressCheck,
    dailyProgressCheckGetPayload,
    deleteConfirmShow,
    setDeleteConfirmShow,
    pic,
    onDailyProgressCheckGetPayloadChange,
    onAdd,
    onDelete,
    onEdit,
    onDetail,
    onCancelDelete,
    onConfirmDelete,
    handleChangeJudgment,
  };
}
