import { Entity } from "./_entity";

export interface IMenu {
    id?: string;
    name: string;
    permission: string[];
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
    get permission(): string[] {
        return this._props.permission;
    }
    get checked(): boolean {
        return this._props.checked;
    }
}
