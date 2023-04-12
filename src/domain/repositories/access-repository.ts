import { Access } from "@domain/models/access";
import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";

export interface AccessRepository {
    get(params: TableParam): Promise<PaginatedData<Access[]>>;
    show(id: string): Promise<Access>;
    update(id: string, access: Access): Promise<Access>;
    store(name: string): Promise<void>;
    destroy(id: string): Promise<boolean>;
}
