import { IPacSegment } from "./pac-segment";
import { Entity } from "./_entity";

export interface ISegment {
    id?: string;
    name: string;
    type: string;
    pacSegments: IPacSegment[];
    checked:boolean;
}
export class Segment extends Entity<ISegment> {
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
    get pacSegments(): IPacSegment[] {
        return this._props.pacSegments;
    }
    get checked(): boolean {
        return !!this._props.checked;
    }
}
