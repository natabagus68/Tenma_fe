import { PaginatedData } from "@domain/models/paginated-data";
import { IPart, Part } from "@domain/models/part";
import { TableParam } from "types";

export interface PartRepository {
    get(param:TableParam): Promise<PaginatedData<Part>>;
    show(id: string): Promise<Part>;
    store(part: Part): Promise<Part>;
    update(part: Part): Promise<Part>;
    destroy(part: Part): Promise<boolean>;
}
