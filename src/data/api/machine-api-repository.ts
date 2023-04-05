import { Machine, IMachine } from "@domain/models/machine";
import { MachineRepository } from "@domain/repositories/machine-repository";
import { TableParam } from "types";
import { api } from "./_api";
import { PaginatedData } from "@domain/models/paginated-data";
import { GetMachineReponse } from "./types/get-machine-reponse";
import { ShowMachineReponse } from "./types/show-machine-response";
import { StoreMachineResponse } from "./types/store-machine-response";
import { StoreMachineRequest } from "./types/store-machine-request";
import { AxiosResponse } from "axios";
import { UpdateMachineResponse } from "./types/update-machine-response";

export class MachineApiRepository implements MachineRepository {
    async get(props: TableParam): Promise<PaginatedData<Machine>> {
        const { data } = await api.get<GetMachineReponse>(`machine`, {
            params: { page: props.page, limit: props.limit, search: props.q },
        });
        return PaginatedData.create({
            page: props.page,
            limit: props.limit,
            lastPage: data.totalPage,
            data: (data.data || []).map((item) =>
                Machine.create({
                    id: item.id,
                    idMachine: item.id_machine,
                    noMachine: item.no,
                    checked: false,
                })
            ),
        });
    }
    async show(id: string): Promise<Machine> {
        const {
            data: { data },
        } = await api.get<ShowMachineReponse>(`machine/${id}`);
        return Machine.create({
            id: data.id,
            idMachine: data.id_machine,
            noMachine: data.no,
            checked: false,
        });
    }
    async store(machine: Machine): Promise<Machine> {
        const {
            data: { data },
        } = await api.post<
            StoreMachineRequest,
            AxiosResponse<StoreMachineResponse, StoreMachineRequest>,
            StoreMachineRequest
        >(`machine`, {
            id_machine: machine.idMachine,
            no: machine.noMachine,
        });
        return Machine.create({
            id: data.id,
            idMachine: data.id_machine,
            noMachine: data.no,
            checked: false,
        });
    }
    async update(machine: Machine): Promise<Machine> {
        const {
            data: { data },
        } = await api.put<UpdateMachineResponse>(`machine/${machine.id}`, {
            id_machine: machine.idMachine,
            no: machine.noMachine,
        });
        return Machine.create({
            id: data.id,
            idMachine: data.id_machine,
            noMachine : data.no,
            checked: false,
        });
    }
    async destroy(id: string): Promise<boolean> {
        await api.delete(`machine/${id}`);
        return true;
    }
}
