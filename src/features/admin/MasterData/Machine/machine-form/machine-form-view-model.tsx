import { MachineApiRepository } from "@data/api/machine-api-repository";
import { Machine } from "@domain/models/machine";
import { MachineRepository } from "@domain/repositories/machine-repository";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
export function useMachineForm() {
    const machineRepository: MachineRepository = new MachineApiRepository();
    const navigate = useNavigate();
    const { id } = useParams();
    const [machine, setMachine] = useState<Machine>(
        Machine.create({
            idMachine: "",
            noMachine: "",
            checked: false,
        })
    );
    const onSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        id
            ? await machineRepository.update(machine)
            : await machineRepository.store(machine);
        navigate(-1);
    };
    const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(-1);
    };
    const onMachineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMachine((prevMachine) => {
            const machine = prevMachine.duplicate();
            machine._props[e.target.name] = e.target.value;
            return machine;
        });
    };
    useEffect(() => {
        if (id) {
            machineRepository.show(id).then((result) => setMachine(result));
        }
    }, [id]);
    return {
        machine,
        onSave,
        onCancel,
        onMachineChange,
        id,
    };
}
