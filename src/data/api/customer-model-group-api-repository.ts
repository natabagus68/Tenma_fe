import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";
import { api } from "./_api";
import { CustomerModelGroupRepository } from "@domain/repositories/customer-model-group-repository";
import { CustomerModelGroup } from "@domain/models/customer-model-group";

export class CustomerModelGroupApiRepository
    implements CustomerModelGroupRepository
{
    async get(param: TableParam): Promise<PaginatedData<CustomerModelGroup>> {
        const { data } = await api.get(`customer-model-group`, {
            params: param,
        });
        return PaginatedData.create<CustomerModelGroup>({
            data: (data?.data || []).map((item) =>
                CustomerModelGroup.create({
                    id: item.id,
                    name: item.name,
                })
            ),
            page: data.page,
            limit: data.limit,
            lastPage: data.totalPage,
            totalRow: data.totalRows,
        });
    }
    async show(id: string): Promise<CustomerModelGroup> {
        const {
            data: { data = {} },
        } = await api.get(`customer-model-group/${id}`);
        return CustomerModelGroup.create({
            id: data.id,
            name: data.name,
        });
    }
    async store(param: CustomerModelGroup): Promise<CustomerModelGroup> {
        const {
            data: { data = {} },
        } = await api.post(`customer-model-group`, {
            name: param.name,
        });
        return CustomerModelGroup.create({
            id: data.id,
            name: data.name,
        });
    }
    async update(param: CustomerModelGroup): Promise<CustomerModelGroup> {
        const {
            data: { data = {} },
        } = await api.put(`customer-model-group/${param.id}`, {
            name: param.name,
        });
        return CustomerModelGroup.create({
            id: data.id,
            name: data.name,
        });
    }
    async destroy(id: string): Promise<boolean> {
        await api.delete(`customer-model-group/${id}`);
        return true;
    }
}
