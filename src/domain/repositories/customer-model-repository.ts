import { CustomerModel } from "@domain/models/customer-model";
import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";

export interface CustomerModelRepository {
    get(param: TableParam): Promise<PaginatedData<CustomerModel>>;
    show(id: CustomerModel["id"]): Promise<CustomerModel>;
    store(data: CustomerModel): Promise<CustomerModel>;
    update(data: CustomerModel): Promise<CustomerModel>;
    destroy(id: CustomerModel["id"]): Promise<boolean>;
}
