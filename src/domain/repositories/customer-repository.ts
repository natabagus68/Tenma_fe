import { Customer } from "@domain/models/customer";
import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";

export interface CustomerRepository {
    get(param: TableParam): Promise<PaginatedData<Customer>>;
    show(id: Customer["id"]): Promise<Customer>;
    store(data: Customer): Promise<Customer>;
    update(data: Customer): Promise<Customer>;
    destroy(id: Customer["id"]): Promise<boolean>;
}
