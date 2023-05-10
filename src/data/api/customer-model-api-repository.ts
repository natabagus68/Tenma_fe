import { CustomerModel } from "@domain/models/customer-model";
import { PaginatedData } from "@domain/models/paginated-data";
import { CustomerModelRepository } from "@domain/repositories/customer-model-repository";
import { TableParam } from "types";
import { api } from "./_api";

export class CustomerModelApiRepository implements CustomerModelRepository {
    async get(param: TableParam): Promise<PaginatedData<CustomerModel>> {
        const { data } = await api.get(`customer-model`, { params: param });
        return PaginatedData.create<CustomerModel>({
            data: (data?.data || []).map((item) =>
                CustomerModel.create({
                    id: item.id,
                    name: item.name,
                })
            ),
            page: data.page,
            limit: data.limit,
            lastPage: data.totalPage,
            totalRow:data.totalRows,
        });
    }
    async show(id: string): Promise<CustomerModel> {
        const {
            data: { data = {} },
        } = await api.get(`customer-model/${id}`);
        return CustomerModel.create({
            id: data.id,
            name: data.name,
        });
    }
    async store(param: CustomerModel): Promise<CustomerModel> {
        const {
            data: { data = {} },
        } = await api.post(`customer-model`, {
            name: param.name,
        });
        return CustomerModel.create({
            id: data.id,
            name: data.name,
        });
    }
    async update(param: CustomerModel): Promise<CustomerModel> {
        const {
            data: { data = {} },
        } = await api.put(`customer-model/${param.id}`, {
            name: param.name,
        });
        return CustomerModel.create({
            id: data.id,
            name: data.name,
        });
    }
    async destroy(id: string): Promise<boolean> {
        await api.delete(`customer-model/${id}`);
        return true;
    }
}
