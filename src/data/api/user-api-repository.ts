import { Auth } from "@domain/models/auth";
import { User } from "@domain/models/user";
import { UserRepository } from "@domain/repositories/user-repository";
import { getParam } from "@domain/repositories/_repository";
import { api } from "./_api";
import { Access } from "@domain/models/access";
import { PaginatedData } from "@domain/models/paginated-data";

export class UserApiRepository {
  async create(props: User): Promise<User> {
    const { data } = await api.post("user", {
      name: props.name,
      email: props.email,
      password: props.password,
      role: props.role_id,
    });
    return User.create({
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
      is_verified: data.is_verified,
      photo: data.photo,
      email_verified_at: data.email_verified_at,
      fcm_token: data.fcm_token,
      created_at: data.created_at,
      updated_at: data.updated_at,
      deleted_at: data.deleted_at,
      roles: data.roles,
      checked: data.checked,
      id: data.id,
    });
  }
  async login(email: string, password: string): Promise<Auth> {
    const { data } = await api.post("login", {
      email,
      password,
    });
    return Auth.create({
      token: data.token,
      user: User.create({
        id: data.data.id,
        name: data.data.name,
        email: data.data.email,
        password: data.data.password,
        role_id: data.data.role_id,
        is_verified: false,
        photo: "",
        email_verified_at: undefined,
        fcm_token: "",
        created_at: "",
        updated_at: "",
        deleted_at: undefined,
        checked: false,
      }),
    });
  }
  async check(): Promise<Auth> {
    const { data } = await api.get("auth/me");
    return Auth.create({
      token: data.token,
      user: User.create({
        id: data.data.id,
        name: data.data.name,
        email: data.data.email,
        password: data.data.password,
        role_id: data.data.role_id,
        is_verified: false,
        photo: "",
        email_verified_at: undefined,
        fcm_token: "",
        created_at: "",
        updated_at: "",
        deleted_at: undefined,
        checked: false,
      }),
    });
  }
  async logout(): Promise<void> {
    await this._api.delete("hmi/auth/logout");
  }
  async get(param?: getParam): Promise<PaginatedData<User>> {
    const { data } = await api.get(`user`, {
      params: { page: param.page, limit: param.limit, q: param.q },
    });
    return PaginatedData.create<User>({
      page: param.page,
      limit: param.limit,
      lastPage: data.totalPage,
      totalRow: data.totalRows,
      data: data?.data.map((item) => {
        return User.create({
          id: item.id,
          name: item.name,
          email: item.email,
          password: item.password,
          role_id: item.role_id,
          is_verified: item.is_verified,
          photo: item.photo,
          email_verified_at: item.email_verified_at,
          fcm_token: item.fcm_token,
          created_at: item.created_at,
          updated_at: item.updated_at,
          deleted_at: item.deleted_at,
          roles: [],
          checked: false,
        });
      }),
    });
  }

  async update(id: string, props: User): Promise<User> {
    const { data } = await api.put("user/" + id, {
      name: props.name,
      email: props.email,
      password: props.password,
      role: props.role_id,
    });

    return User.create({
      name: data.data.name,
      email: data.data.email,
      password: data.data.password,
      role_id: data.data.role_id,
      is_verified: data.data.is_verified,
      photo: data.data.photo,
      email_verified_at: data.data.email_verified_at,
      fcm_token: data.data.fcm_token,
      created_at: data.data.created_at,
      updated_at: data.data.updated_at,
      deleted_at: data.data.deleted_at,
      roles: data.data.roles,
      checked: data.data.checked,
      id: data.data.id,
    });
  }
  async delete(id: string): Promise<boolean> {
    await api.delete("user/" + id);
    return true;
  }
  async updateVerify(id: string): Promise<boolean> {
    await api.put(`user/${id}/verify`);
    return true;
  }

  async show(id: string): Promise<User> {
    const { data } = await api.get("user/" + id);
    return User.create({
      name: data.data.name,
      email: data.data.email,
      password: "",
      role_id: data.data.role_id,
      is_verified: data.data.is_verified,
      photo: data.data.photo,
      email_verified_at: data.data.email_verified_at,
      fcm_token: data.data.fcm_token,
      created_at: data.data.created_at,
      updated_at: data.data.updated_at,
      deleted_at: data.data.deleted_at,
      roles: data.data.roles,
      checked: data.data.checked,
      id: data.data.id,
    });
  }
}
