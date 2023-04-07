import { Entity } from "./_entity";
import { ITool, Tool } from "./tool";

export interface ISegment {
    id?: string;
    character: string;
    nominal: string;
    nominalValue: string;
    upper: number;
    lower: number;
    saUpper: number;
    saLower: number;
    tool?: ITool;
    checked: boolean;
}

export class Segment extends Entity<ISegment> {
    static create(props: ISegment): Segment {
        return new Segment(props);
    }
    unmarshall(): ISegment {
        return {
            id: this.id,
            character: this.character,
            nominal: this.nominal,
            nominalValue: this.nominalValue,
            upper: this.upper,
            lower: this.lower,
            saUpper: this.saUpper,
            saLower: this.saLower,
            tool: this.tool?.unmarshall(),
            checked: this.checked,
        };
    }
    duplicate(): Segment {
        return Segment.create(this.unmarshall());
    }
    update(props: ISegment): Segment {
        this._props = props;
        return this;
    }
    get character(): string {
        return this._props.character;
    }
    get nominal(): string {
        return this._props.nominal;
    }
    get nominalValue(): string {
        return this._props.nominalValue;
    }
    get upper(): number {
        return this._props.upper;
    }
    get lower(): number {
        return this._props.lower;
    }
    get saUpper(): number {
        return this._props.saUpper;
    }
    get saLower(): number {
        return this._props.saLower;
    }
    get tool(): Tool | undefined {
        return this._props.tool ? Tool.create(this._props.tool) : undefined;
    }
    get checked(): boolean {
        return !!this._props.checked;
    }
}
