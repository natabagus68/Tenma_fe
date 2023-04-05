// import { Machine, IMachine } from "@domain/models/machine";
// import { MachineRepository } from "@domain/repositories/machine-repository";
// import { TableParam } from "types";
// import { api } from "./_api";
// import { PaginatedData } from "@domain/models/paginated-data";

// export class MachineApiRepository implements MachineRepository {
//     async get(props: TableParam): Promise<PaginatedData<Machine>> {
//         const { data } = await api.get(`machine`, {
//             params: { page: props.page, limit: props.limit },
//         });
//         return PaginatedData.create({
//             page: props.page,
//             limit: props.limit,
//             lastPage: data.totalPage,
//             data: (data.data || []).map((item) =>
//                 Machine.create({
//                     id: item.id,
//                     idMachine: "",
//                     noMachine: "",
//                     checked: false
//                 })
//             ),
//         });
//     }
//     async show(id: string): Promise<Machine> {
//         const {
//             data: { data = {} },
//         } = await api.get(`machine/${id}`);
//         return Machine.create({
//             id: data.id,
//             idMachine: "",
//             noMachine: "",
//             checked: false
//         });
//     }
//     async store(machine: Machine): Promise<Machine> {
//         const {
//             data: { data = {} },
//         } = await api.post(`machine`, {
//             id_machine: machine.idMachine,
//             name: machine.materialMachine,
//         });
//         return Machine.create({
//             id: data.id,
//             idMachine: data.id_machine,
//             materialMachine: data.name,
//             checked: false,
//         });
//     }
//     async update(machine: Machine): Promise<Machine> {
//         const {
//             data: { data = {} },
//         } = await api.put(`machine/${machine.id}`, {
//             id_machine: machine.idMachine,
//             name: machine.materialMachine,
//         });
//         return Machine.create({
//             id: data.id,
//             idMachine: data.id_machine,
//             materialMachine: data.name,
//             checked: false,
//         });
//     }
//     async destroy(id: string): Promise<boolean> {
//         await api.delete(`machine/${id}`);
//         return true;
//     }
// }
