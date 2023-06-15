import { MachineApiRepository } from "@data/api/machine-api-repository";
import { Machine } from "@domain/models/machine";
import { PaginatedData } from "@domain/models/paginated-data";
import { MachineRepository } from "@domain/repositories/machine-repository";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TableParam } from "types";
export function useMachine() {
  const machineRepository: MachineRepository = new MachineApiRepository();
  const navigate = useNavigate();
  const [params, setParams] = useState<TableParam>({
    page: 1,
    limit: 1,
    q: "",
  });
  const [machine, setMachine] = useState<PaginatedData<Machine>>(
    PaginatedData.create<Machine>({
      page: 1,
      limit: 10,
      lastPage: 1,
      totalRow: 0,
      data: [],
    })
  );
  const [deleteConfirmShow, setDeleteConfirmShow] = useState(false);
  const onAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`create`);
  };
  const onEdit = (id: Machine["id"]) => {
    navigate(`${id}/edit`);
  };
  const onDelete = (id: Machine["id"]) => {
    setMachine((prevMachine) => {
      const machine = prevMachine.duplicate();
      machine.data.forEach((item) =>
        item.id == id ? item.check() : item.uncheck()
      );
      return machine;
    });
    setDeleteConfirmShow(true);
  };
  const onConfirmDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await machineRepository.destroy(
      machine.data.find((item) => item.checked).id
    );
    setDeleteConfirmShow(false);
    setMachine((prevMachine) => {
      const machine = prevMachine.duplicate();
      machine.data = machine.data.filter((item) => !item.checked);
      return machine;
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
    machineRepository
      .get({ limit: params.limit, page: params.page, q: params.q })
      .then((result) => setMachine(result));
  }, [params.page, params.q]);
  return {
    machine,
    onAdd,
    onEdit,
    onDelete,
    deleteConfirmShow,
    setDeleteConfirmShow,
    onPageChange,
    onConfirmDelete,
    cancelDelete,
    handleSearch,
    params,
  };
}
