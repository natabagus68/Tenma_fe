import { IMeasurement, Measurement } from "./measurement";
import { Entity } from "./_entity";
import { IComparisson } from "./comparisson";

export interface ISegment {
  id?: string;
  name: string;
  partWeight?: string;
  type: string;
  pacSegments: IMeasurement[];
  comparisson?: IComparisson[][] | undefined;
  checked: boolean;
}
export class Segment extends Entity<ISegment> {
  static create(props: ISegment): Segment {
    return new Segment(props);
  }
  unmarshall(): ISegment {
    return {
      id: this.id,
      name: this.name,
      partWeight: this.partWeight,
      type: this.type,
      pacSegments: this.pacSegments,
      comparisson: this.comparisson,
      checked: this.checked,
    };
  }
  duplicate(): Segment {
    return Segment.create(this.unmarshall());
  }
  replace(props: ISegment): Segment {
    this._props = props;
    return this;
  }
  check(): Segment {
    this._props.checked = true;
    return this;
  }
  uncheck(): Segment {
    this._props.checked = false;
    return this;
  }
  pushNewPacSegment(value: Measurement) {
    this._props.pacSegments.push(value);
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
  get comparisson(): IComparisson[][] {
    return this._props.comparisson;
  }
  get checked(): boolean {
    return !!this._props.checked;
  }
  get partWeight(): string | undefined {
    return this._props.partWeight;
  }
}

