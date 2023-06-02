import { Access } from "@domain/models/access";
import { PaginatedData } from "@domain/models/paginated-data";
import { AccessRepository } from "@domain/repositories/access-repository";
import { TableParam } from "types";
import { api } from "./_api";

export class AccessApiRepository implements AccessRepository {
  async get(params: TableParam): Promise<PaginatedData<Access>> {
    const { data } = await api.get(`access`, { params });
    return PaginatedData.create({
      page: params.page,
      limit: params.limit,
      lastPage: data.totalPage,
      totalRow: data.totalRows,
      data: data.data.map((el) => {
        return Access.create({
          id: el.id,
          name: el.name,
          checked: false,
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
  async show(id: string): Promise<Access> {
    const { data } = await api.get(`access/${id}`);

    return Access.create({
      id: data.data.id,
      name: data.data.name,
      checked: false,
    });
  }
  async update(id: string, access: Access): Promise<boolean> {
    await api.put(`access/${id}`, {
      name: access.name,
    });

    return true;
  }
  async store(name: string): Promise<void> {
    await api.post("access", { name });
  }
  async destroy(id: string): Promise<boolean> {
    await api.delete(`access/${id}`);
    return true;
  }
}

