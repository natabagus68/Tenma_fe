import { CustomerModelGroup } from "@domain/models/customer-model-group";
import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";

export interface CustomerModelGroupRepository {
    get(param: TableParam): Promise<PaginatedData<CustomerModelGroup>>;
    show(id: CustomerModelGroup["id"]): Promise<CustomerModelGroup>;
    store(data: CustomerModelGroup): Promise<CustomerModelGroup>;
    update(data: CustomerModelGroup): Promise<CustomerModelGroup>;
    destroy(id: CustomerModelGroup["id"]): Promise<boolean>;
}
