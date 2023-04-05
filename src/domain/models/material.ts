import { Color, IColor } from "./color";
import { Entity } from "./_entity";
export interface IMaterial {
    id?: string;
    idMaterial: string;
    name: string;
    materialDetail: string;
    colorId: string;
    color?: IColor;
    checked?: boolean;
}
export class Material extends Entity<IMaterial> {
    static create(props: IMaterial): Material {
        return new Material(props);
    }
    unmarshall(): IMaterial {
        return {
            id: this.id,
            idMaterial: this.idMaterial,
            name: this.name,
            materialDetail: this.materialDetail,
            colorId: this.colorId,
            color: this.color,
            checked: this.checked,
        };
    }
    check():Material{
        this._props.checked = true
        return this
    }
    uncheck():Material{
        this._props.checked = false
        return this
    }
    get idMaterial(): string {
        return this._props.idMaterial;
    }
    get name(): string {
        return this._props.name;
    }
    get materialDetail(): string {
        return this._props.materialDetail;
    }
    get colorId(): string {
        return this._props.colorId;
    }
    get color(): undefined | Color {
        return this._props.color ? Color.create(this._props.color) : undefined;
    }
    get checked(): boolean {
        return !!this._props.checked;
    }
}
