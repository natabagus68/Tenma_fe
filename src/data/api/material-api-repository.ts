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
                    idMaterial: item.id_material,
                    materialDetail: item.detail,
                    colorId: item.color?.id || "",
                    color: item.color && {
                        id: item.color?.id,
                        idColor: item.color?.id_color,
                        materialColor: item.color?.name,
                        checked: false,
                    },
                })
            ),
            page: data.page,
            limit: data.limit,
            lastPage: data.totalPage,
            totalRow: data.totalRows,
        });
    }
    async show(id: string): Promise<Material> {
        const {
            data: { data = {} },
        } = await api.get(`material/${id}`);
        return Material.create({
            id: data.id,
            name: data.name,
            idMaterial: data.id_material,
            materialDetail: data.detail,
            colorId: data.color_id,
        });
    }
    async store(param: Material): Promise<Material> {
        const {
            data: { data = {} },
        } = await api.post(`material`, {
            id_material: param.idMaterial,
            name: param.name,
            detail: param.materialDetail,
            color_id: param.colorId,
        });
        return Material.create({
            id: data.id,
            name: data.name,
            idMaterial: data.id_material,
            materialDetail: data.detail,
            colorId: data.color_id,
        });
    }
    async update(param: Material): Promise<Material> {
        const {
            data: { data = {} },
        } = await api.put(`material/${param.id}`, {
            id_material: param.idMaterial,
            name: param.name,
            detail: param.materialDetail,
            color_id: param.colorId,
        });
        return Material.create({
            id: data.id,
            name: data.name,
            idMaterial: data.id_material,
            materialDetail: data.detail,
            colorId: data.color_id,
        });
    }
    async destroy(id: string): Promise<boolean> {
        await api.delete(`material/${id}`);
        return true;
    }
}
