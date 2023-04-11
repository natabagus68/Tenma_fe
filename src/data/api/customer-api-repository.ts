import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";
import { api } from "./_api";
import { CustomerRepository } from "@domain/repositories/customer-repository";
import { Customer } from "@domain/models/customer";

export class CustomerApiRepository implements CustomerRepository {
    async get(param: TableParam): Promise<PaginatedData<Customer>> {
        const { data } = await api.get(`customer`, { params: param });
        return PaginatedData.create<Customer>({
            data: (data?.data || []).map((item) =>
                Customer.create({
                    id: item.id,
                    name: item.name,
                })
            ),
            page: data.page,
            limit: data.limit,
            lastPage: data.totalPage,
        });
    }
    async show(id: string): Promise<Customer> {
        const {
            data: { data = {} },
        } = await api.get(`customer/${id}`);
        console.log({ data });
        return Customer.create({
            id: data.id,
            name: data.name,
        });
    }
    async store(param: Customer): Promise<Customer> {
        const {
            data: { data = {} },
        } = await api.post(`customer`, {
            name: param.name,
        });
        return Customer.create({
            id: data.id,
            name: data.name,
        });
    }
    async update(param: Customer): Promise<Customer> {
        const {
            data: { data = {} },
        } = await api.put(`customer/${param.id}`, {
            name: param.name,
        });
        return Customer.create({
            id: data.id,
            name: data.name,
        });
    }
    async destroy(id: string): Promise<boolean> {
        await api.delete(`customer/${id}`);
        return true;
    }
}
