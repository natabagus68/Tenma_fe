import { IMeasurement } from "./measurement";
import { Entity } from "./_entity";

export interface ISegment {
    id?: string;
    name: string;
    type: string;
    pacSegments: IMeasurement[];
    checked:boolean;
}
export class Segment extends Entity<ISegment> {
    static Segment(arg0: { character: string; nominal: string; nominalValue: string; upper: number; lower: number; saUpper: number; saLower: number; checked: false; }): IMeasurement {
        throw new Error("Method not implemented.");
    }
    static Segment(arg0: { character: string; nominal: string; nominalValue: string; upper: number; lower: number; saUpper: number; saLower: number; checked: false; }): IMeasurement {
        throw new Error("Method not implemented.");
    }
    static create(props: ISegment): Segment {
        return new Segment(props);
    }
    unmarshall(): ISegment {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            pacSegments: this.pacSegments,
            checked: this.checked,
        };
    }
    duplicate(): Segment {
        return Segment.create(this.unmarshall());
    }
    replace(props:ISegment):Segment{
        this._props = props
        return this
    }
    check():Segment{
        this._props.checked = true
        return this
    }
    uncheck():Segment{
        this._props.checked = false
        return this
    }
    get name(): string {
        return this._props.name;
    }
    get type(): string {
        return this._props.type;
    }
    get pacSegments(): IMeasurement[] {
        return this._props.pacSegments;
    }
    get checked(): boolean {
        return !!this._props.checked;
    }
}
