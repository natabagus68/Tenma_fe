import { Entity } from "./_entity";
import { Access, IAccess } from "./access";

export interface IUserProps {
    id: string;
    name: string;
    email: string;
    password: string;
    role_id: string | null;
    is_verified: boolean;
    photo: string | null;
    email_verified_at: Date | null;
    fcm_token: string | null;
    created_at: string;
    updated_at: string;
    deleted_at: Date | null;
    roles?: IAccess[];
    checked: boolean;
}

export interface IUser {
    unmarshall(): IUserProps;
}

export class User extends Entity<IUserProps> implements IUser {
    unmarshall(): IUserProps {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            role_id: this.role_id,
            is_verified: this.is_verified,
            photo: this.photo,
            email_verified_at: this.email_verified_at,
            fcm_token: this.fcm_token,
            created_at: this.created_at,
            updated_at: this.updated_at,
            deleted_at: this.deleted_at,
            roles: this.roles.map((item) => item.unmarshall()),
            checked: this.checked,
        };
    }
    static create(props: IUserProps): User {
        return new User(props);
    }
    check(): User {
        this._props.checked = true;
        return this;
    }
    uncheck(): User {
        this._props.checked = false;
        return this;
    }
    updateUser(props: IUserProps) {
        this._props = props;
    }
    get id(): string {
        return this._props.id;
    }
    get name(): string {
        return this._props.name;
    }
    get email(): string {
        return this._props.email;
    }
    get password(): string {
        return this._props.password;
    }
    get role_id(): string | null {
        return this._props.role_id;
    }
    get is_verified(): boolean {
        return this._props.is_verified;
    }
    set is_verified(value) {
        this._props.is_verified = value;
    }

    get photo(): string | null {
        return this._props.photo;
    }
    get email_verified_at(): Date | null {
        return this._props.email_verified_at;
    }
    get fcm_token(): string | null {
        return this._props.fcm_token;
    }
    get created_at(): string {
        return this._props.created_at;
    }
    get updated_at(): string {
        return this._props.updated_at;
    }
    get deleted_at(): Date | null {
        return this._props.deleted_at;
    }
    get roles(): Access[] {
        return (this._props.roles || []).map((item) => Access.create(item));
    }
    get checked(): boolean {
        return this._props.checked;
    }
}
