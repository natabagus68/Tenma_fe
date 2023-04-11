import { Entity } from "./_entity";
import { MeasurementStd } from "./measurement-std";
import { IMeasurement, Measurement } from "./measurement";

export interface ISegment2D {
    id?: string;
    name: string;
    measurements?: IMeasurement[];
}

export class Segment2D extends Entity<ISegment2D> {
    static create(props: ISegment2D): Segment2D {
        return new Segment2D(props);
    }
    unmarshall() {
        return {
            id: this.id,
            name: this.name,
            measurements: this.measurements.map((item) => item.unmarshall()),
        };
    }
    duplicate() {
        return Segment2D.create(this.unmarshall());
    }
    replace(props: ISegment2D): Segment2D {
        this._props = props;
        return this;
    }
    updateMeasurement(i: number, measurement: IMeasurement) {
        this._props.measurements[i] = measurement;
        return this;
    }
    updateName(i: number, name: string): Segment2D {
        this._props.name = name;
        return this;
    }
    get id(): string {
        return this._props.id;
    }
    get name(): string {
        return this._props.name;
    }
    get measurements(): Measurement[] {
        return this._props.measurements.map((item) => Measurement.create(item));
    }
}
