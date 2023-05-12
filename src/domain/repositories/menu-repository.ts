import { Menu } from "@domain/models/menu";
import { PaginatedData } from "@domain/models/paginated-data";
import { IPermission } from "@domain/models/permisition";

export interface MenuRepository {
    get(id: string): Promise<PaginatedData<Menu>>;
    updatePermission(
        id: string,
        modulId: string,
        data: any[]
    ): Promise<boolean>;
    updateRoleMenu(id: string, moduleId: string): Promise<Boolean>;
}
