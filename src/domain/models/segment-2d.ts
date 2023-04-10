import { Entity } from "./_entity";
import { MeasurementStd } from "./measurement-std";
import { IMeasurement, PacSegment } from "./measurement";

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
            measurements: this.measurements,
        };
    }
    get id(): string {
        return this._props.id;
    }
    get name(): string {
        return this._props.name;
    }
    get measurements(): IMeasurement[] | undefined {
        return this._props.measurements;
    }
}
