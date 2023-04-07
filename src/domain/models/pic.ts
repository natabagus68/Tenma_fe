import { Entity } from "./_entity";

export interface IPic {
    id?: string;
    name: string;
    checked: boolean;
}

export class Pic extends Entity<IPic> {
    static create(props: IPic): Pic {
        return new Pic(props);
    }
    unmarshall(): IPic {
        return {
            id: this.id,
            name: this.name,
            checked: this.checked,
        };
    }
    get name(): string {
        return this._props.name;
    }
    get checked(): boolean {
        return !!this._props.checked;
    }
}
