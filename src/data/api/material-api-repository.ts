import { api } from "./_api";
import { TableParam } from "types";
import { PaginatedData } from "@domain/models/paginated-data";
import { MaterialRepository } from "@domain/repositories/material-repository";
import { Material } from "@domain/models/material";

export class MaterialApiRepository implements MaterialRepository {
    async get(param: TableParam): Promise<PaginatedData<Material>> {
        const { data } = await api.get(`material`, { params: param });
        return PaginatedData.create<Material>({
            data: (data?.data || []).map((item) =>
                Material.create({
                    id: item.id,
                    name: item.name,
                })
            ),
            page: data.page,
            limit: data.limit,
            lastPage: data.totalPage,
        });
    }
    async show(id: string): Promise<Material> {
        const {
            data: { data = {} },
        } = await api.get(`material/${id}`);
        return Material.create({
            id: data.id,
            name: data.name,
        });
    }
    async store(param: Material): Promise<Material> {
        const {
            data: { data = {} },
        } = await api.post(`material`, {
            name: param.name,
        });
        return Material.create({
            id: data.id,
            name: data.name,
        });
    }
    async update(param: Material): Promise<Material> {
        const {
            data: { data = {} },
        } = await api.put(`material/${param.id}`, {
            name: param.name,
        });
        return Material.create({
            id: data.id,
            name: data.name,
        });
    }
    async destroy(id: string): Promise<boolean> {
        await api.delete(`material/${id}`);
        return true;
    }
}
