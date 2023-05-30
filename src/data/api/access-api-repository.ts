import { Access } from "@domain/models/access";
import { PaginatedData } from "@domain/models/paginated-data";
import { AccessRepository } from "@domain/repositories/access-repository";
import { TableParam } from "types";
import { api } from "./_api";

export class AccessApiRepository implements AccessRepository {
    async get(params: TableParam): Promise<PaginatedData<Access[]>> {
        const { data } = await api.get(`access`, { params });
        return PaginatedData.create({
            page: params.page,
            limit: params.limit,
            lastPage: data.totalPage,
            totalRow: data.totalRows,
            data: (data.data || []).map((el) => {
                return Access.create({
                    id: el.id,
                    name: el.name,
                });
            }),
        });
    }
    // async show(id: string): Promise<Access> {
    //     const {
    //         data: { data = {} },
    //     } = await api.get(`access/${id}/menu`);
    //     console.log(id)
    //     return Access.create({
    //         id: data?.id,
    //         name: data?.name,
    //     });
    // }
    async show(id: string): Promise<PaginatedData<Access>> {
        const { data } = await api.get(`access/${id}/menu`);
        return PaginatedData.create({
            page: data.page,
            limit: data.limit,
            lastPage: data.lastPage,
            totalRow: data.totalRows,
            data: data.data.map((e) => {
                return Access.create({
                    id: e.id,
                    name: e.name,
                });
            }),
        });
    }
    update(id: string, access: Access): Promise<Access> {
        throw new Error("Method not implemented.");
    }
    async store(name: string): Promise<void> {
        await api.post("access", { name });
    }
    async destroy(id: string): Promise<boolean> {
        await api.delete("");
        return true;
    }
}
