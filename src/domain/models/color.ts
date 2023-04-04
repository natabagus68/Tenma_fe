import { Entity } from "./_entity";

export interface IColor {
    id: string;
    idColor: string;
    materialColor: string;
    checked: boolean;
}

export class Color extends Entity<IColor> {
    static create(props: IColor): Color {
        return new Color(props);
    }
    unmarshall(): IColor {
        return {
            id: this.id,
            idColor: this.idColor || "",
            materialColor: this.materialColor || "",
            checked: this.checked,
        };
    }
    check(): Color {
        this._props.checked = true;
        return this;
    }
    uncheck(): Color {
        this._props.checked = false;
        return this;
    }
    get idColor(): string {
        return this._props.idColor;
    }
    get materialColor(): string {
        return this._props.materialColor;
    }
    get checked(): boolean {
        return !!this._props.checked;
    }
}
