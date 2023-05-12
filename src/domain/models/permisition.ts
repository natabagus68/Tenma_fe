import { Entity } from "./_entity";

export interface IPermission {
    id?: string;
    name: string;
    active: boolean;
    used: boolean;
}

export class Permission extends Entity<IPermission> {
    static create(props: IPermission): Permission {
        return new Permission(props);
    }
    unmarshall() {
        return {
            id: this.id,
            name: this.name,
            active: this.active,
            used: this.used,
        };
    }

    get id(): string {
        return this._props.id;
    }
    get name(): string {
        return this._props.name;
    }

    get active(): boolean {
        return this._props.active;
    }
    set active(value: boolean) {
        this._props.active = value;
    }
    get used(): boolean {
        return this._props.used;
    }
}
