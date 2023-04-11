import { Auth } from "@domain/models/auth";
import { User } from "@domain/models/user";
import { UserRepository } from "@domain/repositories/user-repository";
import { getParam } from "@domain/repositories/_repository";
import { api } from "./_api";
import { Access } from "@domain/models/access";

export class UserApiRepository implements UserRepository {
    constructor(private _api = api) {}
    async login(
        email: string,
        password: string,
        lineShiftId: string
    ): Promise<Auth> {
        const { data } = await this._api.post("hmi/auth/login", {
            email,
            password,
            lineShiftId,
        });
        return Auth.create({
            token: data.token,
            user: {
                id: data.data?.user?.id,
                name: data.data?.user?.name,
                email: data.data?.user?.email,
                password: data.data?.user?.password,
                role_id: data.data?.user?.role_id,
                is_active: data.data?.user?.is_active,
                photo: data.data?.user?.photo,
                email_verified_at: data.data?.user?.email_verified_at,
                fcm_token: data.data?.user?.fcm_token,
                created_at: data.data?.user?.created_at,
                updated_at: data.data?.user?.updated_at,
                deleted_at: data.data?.user?.deleted_at,
                roles: [],
            },
        });
    }
    async check(): Promise<Auth> {
        const { data } = await this._api.get("hmi/auth/me");
        return Auth.create({
            token: data.token,
            user: {
                id: data.data?.user?.id,
                name: data.data?.user?.name,
                email: data.data?.user?.email,
                password: data.data?.user?.password,
                role_id: data.data?.user?.role_id,
                is_active: data.data?.user?.is_active,
                photo: data.data?.user?.photo,
                email_verified_at: data.data?.user?.email_verified_at,
                fcm_token: data.data?.user?.fcm_token,
                created_at: data.data?.user?.created_at,
                updated_at: data.data?.user?.updated_at,
                deleted_at: data.data?.user?.deleted_at,
                roles: [],
            },
        });
    }
    async logout(): Promise<void> {
        await this._api.delete("hmi/auth/logout");
    }
    async get(param?: getParam): Promise<User[]> {
        const { data } = await api.get(`user`, {
            params: { page: param.page, limit: param.limit, q: param.q },
        });
        return (data?.data || []).map((item) =>
            User.create({
                id: item.id,
                name: item.name,
                email: item.email,
                password: item.password,
                role_id: item.role_id,
                is_active: item.is_active,
                photo: item.photo,
                email_verified_at: item.email_verified_at,
                fcm_token: item.fcm_token,
                created_at: item.created_at,
                updated_at: item.updated_at,
                deleted_at: item.deleted_at,
                roles: [],
            })
        );
    }
    create(props: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    update(id: string, data: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
