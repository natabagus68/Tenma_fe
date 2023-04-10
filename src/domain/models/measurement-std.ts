import { Entity } from "./_entity";
import { IPart, Part } from "./part";
import { IPacSegment, PacSegment } from "./pac-segment";
import { ITool } from "./tool";

export interface IMeasurementStd {
    id?: string;
    part: IPart;
    segments: IPacSegment[];
    checked: boolean;
}

export class MeasurementStd extends Entity<IMeasurementStd> {
    static create(props: IMeasurementStd): MeasurementStd {
        return new MeasurementStd(props);
    }
    unmarshall(): IMeasurementStd {
        return {
            id: this.id,
            part: this.part,
            segments: this.segments.map((item) => item.unmarshall()),
            checked: !!this.checked,
        };
    }
    createSegment(): MeasurementStd {
        this._props.segments.push(
            PacSegment.create({
                character: "",
                nominal: "",
                nominalValue: "",
                upper: 0,
                lower: 0,
                saUpper: 0,
                saLower: 0,
                checked: false,
            }).unmarshall()
        );
        return this;
    }
    changeTool(tool: ITool, i: number): MeasurementStd {
        this._props.segments[i].tool = tool;
        return this;
    }
    removeSegment(i: number): MeasurementStd {
        this._props.segments.splice(i, 1);
        return this;
    }
    updateSegment(i: number, segment: IPacSegment): MeasurementStd {
        this._props.segments[i] = segment;
        return this;
    }
    updateAllSegment(segments: IPacSegment[]): MeasurementStd {
        this._props.segments = segments;
        return this;
    }
    duplicate(): MeasurementStd {
        return MeasurementStd.create(this.unmarshall());
    }
    chooseSegment(segment: PacSegment) {
        this._props.segments = this._props.segments.map((item) =>
            item.id == segment.id
                ? { ...item, checked: true }
                : { ...item, checked: false }
        );
        return this;
    }
    replaceSegment(segment: IPacSegment) {
        this._props.segments = this._props.segments.map((item) =>
            item.id == segment.id ? segment : item
        );
        return this;
    }
    // getDetail(measurement: any) {
    //     this._props.part = measurement.part;
    //     this._props.segments = measurement.special_accept_segments.map((item) =>
    //         Segment.create(item.unmarshall())
    //     );
    // }
    get part(): Part {
        return this._props.part ? Part.create(this._props.part) : undefined;
    }
    get segments(): PacSegment[] {
        return this._props.segments.map((item) => PacSegment.create(item));
    }
    get checked(): boolean {
        return this._props.checked;
    }
    get checkedSegment(): PacSegment {
        return this.segments.find((item) => item.checked);
    }
    set part(part: Part) {
        this._props.part = part.unmarshall();
    }
    set segments(segments: PacSegment[]) {
        this._props.segments = segments.map((item) => item.unmarshall());
    }
}
