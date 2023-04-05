import { MachineApiRepository } from "@data/api/machine-api-repository";
import { Machine } from "@domain/models/machine";
import { PaginatedData } from "@domain/models/paginated-data";
import { MachineRepository } from "@domain/repositories/machine-repository";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function useMachine() {
    const machineRepository: MachineRepository = new MachineApiRepository();
    const navigate = useNavigate();
    const [machine, setMachine] = useState<PaginatedData<Machine>>(
        PaginatedData.create<Machine>({
            page: 1,
            limit: 10,
            lastPage: 1,
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
    const onPageChange = (page: number) => {
        setMachine((prevMachine) => {
            const machine = prevMachine.duplicate();
            machine.page = page;
            return machine;
        });
    };
    useEffect(() => {
        machineRepository
            .get({ limit: 10, page: machine.page })
            .then((result) => setMachine(result));
    }, [machine.page]);
    return {
        machine,
        onAdd,
        onEdit,
        onDelete,
        deleteConfirmShow,
        setDeleteConfirmShow,
        onPageChange,
        onConfirmDelete,
    };
}
