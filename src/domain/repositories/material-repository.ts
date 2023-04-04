import { Material } from "@domain/models/material";
import { PaginatedData } from "@domain/models/paginated-data";
import { TableParam } from "types";

export interface MaterialRepository {
    get(param: TableParam): Promise<PaginatedData<Material>>;
    show(id: Material["id"]): Promise<Material>;
    store(data: Material): Promise<Material>;
    update(data: Material): Promise<Material>;
    destroy(id: Material["id"]): Promise<boolean>;
}
