import { Machine } from "@domain/models/machine";
import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";

export interface MachineRepository {
    get(param: TableParam): Promise<PaginatedData<Machine>>;
    show(id: Machine["id"]): Promise<Machine>;
    store(data: Machine): Promise<Machine>;
    update(data: Machine): Promise<Machine>;
    destroy(id: Machine["id"]): Promise<boolean>;
}
