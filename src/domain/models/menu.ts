import { Entity } from "./_entity";
import { IPermission } from "./permisition";

export interface IMenu {
    id?: string;
    name: string;
    active: boolean;
    moduleId: string;
    permission: IPermission[];
    checked: boolean;
}
export class Menu extends Entity<IMenu> {
    static create(props: IMenu): Menu {
        return new Menu(props);
    }
    unmarshall(): IMenu {
        return {
            id: this.id,
            name: this.name,
            permission: this.permission,
            active: this.active,
            moduleId: this.moduleId,
            checked: this.checked,
        };
    }
    duplicate(): Menu {
        return Menu.create(this.unmarshall());
    }
    update(props: IMenu): Menu {
        this._props = props;
        return this;
    }
    get name(): string {
        return this._props.name;
    }
    get permission(): IPermission[] {
        return this._props.permission;
    }
    get checked(): boolean {
        return this._props.checked;
    }

    set active(value) {
        this._props.active = value;
    }
    get active(): boolean {
        return this._props.active;
    }
    get moduleId(): string {
        return this._props.moduleId;
    }
}
