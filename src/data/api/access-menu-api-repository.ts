import { Menu } from "@domain/models/menu";
import { IPermission, Permission } from "@domain/models/permisition";
import { MenuRepository } from "@domain/repositories/menu-repository";
import { api } from "./_api";
import { PaginatedData } from "@domain/models/paginated-data";

export class MenuApirepository implements MenuRepository {
  async get(id: string): Promise<PaginatedData<Menu>> {
    const { data } = await api.get(`access/${id}/menu`);
    console.log(data);
    return PaginatedData.create({
      page: data.page,
      limit: data.limit,
      lastPage: data.lastPage,
      totalRow: data.totalRows,
      data: data.data.map((item) => {
        return Menu.create({
          id: item.module_id,
          name: item.module_name,
          active: item.is_module_active,
          moduleId: item.module_id,
          permission: item.permissions.map((el) => {
            return Permission.create({
              id: el.id,
              name: el.name,
              active: el.is_permission_active,
              used: el.is_permission_used,
            });
          }),
          checked: false,
        });
      }),
    });
  }
  async updatePermission(
    id: string,
    modulId: string,
    data: any
  ): Promise<boolean> {
    await api.put(`access/${id}/menu/${modulId}/update`, {
      permissions: data,
    });
    return true;
  }

  async updateRoleMenu(id: string, moduleId: string): Promise<Boolean> {
    await api.put(`access/${id}/menu/${moduleId}/activation`);
    return true;
  }

  async getPermision(roleId: string, moduleId: string): Promise<Permission[]> {
    const { data } = await api.get(`access/${roleId}/menu/${moduleId}`);
    console.log(roleId, moduleId);
    return data.data.map((item) => {
      return Permission.create({
        id: item.permission_id,
        name: item.permission.name,
        active: item.is_permission_active,
        used: item.is_permission_used,
      });
    });
  }
}

