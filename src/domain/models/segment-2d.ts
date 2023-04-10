import { Entity } from "./_entity";
import { MeasurementStd } from "./measurement-std";
import { PacSegment } from "./pac-segment";

export interface ISegment2D {
    id?: string;
    name: string;
    segmentTable?: MeasurementStd[];
}

export class Segment2D extends Entity<ISegment2D> {
    static create(props: ISegment2D): Segment2D {
        return new Segment2D(props);
    }

    unmarshall() {
        return {
            id: this.id,
            name: this.name,
            segmentTable: this.segmentTable,
        };
    }
    get id(): string {
        return this._props.id;
    }
    get name(): string {
        return this._props.name;
    }
    get segmentTable(): MeasurementStd[] | undefined {
        return this._props.segmentTable;
    }
}
