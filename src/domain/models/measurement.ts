import { Entity } from "./_entity";
import { ITool, Tool } from "./tool";

export interface IMeasurement {
  id?: string;
  character: string;
  nominal: string;
  nominalValue: string;
  upper: number;
  lower: number;
  saUpper: number;
  saLower: number;
  tool?: ITool;
  result: string;
  judgement: string;
  saResult: string;
  saJudgement: string;
  checked: boolean;
}

export class Measurement extends Entity<IMeasurement> {
  static Measurement(arg0: {
    character: string;
    nominal: string;
    nominalValue: string;
    upper: string;
    lower: string;
    saUpper: string;
    saLower: string;
    checked: false;
    result: string;
    judgement: string;
    saResult: string;
    saJudgement: string;
  }): import("./measurement-std").MeasurementStd {
    throw new Error("Method not implemented.");
  }
  static create(props: IMeasurement): Measurement {
    return new Measurement(props);
  }
  unmarshall(): IMeasurement {
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
      result: this.result,
      judgement: this.judgement,
      saResult: this.saResult,
      saJudgement: this.saJudgement,
      checked: this.checked,
    };
  }
  duplicate(): Measurement {
    return Measurement.create(this.unmarshall());
  }
  update(props: IMeasurement): Measurement {
    this._props = props;
    return this;
  }
  get character(): string {
    return this._props.character;
  }
  set character(value) {
    this._props.character = value;
  }
  get nominal(): string {
    return this._props.nominal;
  }
  set nominal(value) {
    this._props.nominal = value;
  }
  get nominalValue(): string {
    return this._props.nominalValue;
  }
  set nominalValue(value) {
    this._props.nominalValue = value;
  }
  get upper(): number {
    return this._props.upper;
  }
  set upper(value) {
    this._props.upper = value;
  }
  get lower(): number {
    return this._props.lower;
  }
  set lower(value) {
    this._props.lower = value;
  }
  get saUpper(): number {
    return this._props.saUpper;
  }
  set saUpper(value) {
    this._props.saUpper = value;
  }
  get saLower(): number {
    return this._props.saLower;
  }
  set saLower(value) {
    this._props.saLower = value;
  }
  get tool(): Tool | undefined {
    return this._props.tool ? Tool.create(this._props.tool) : undefined;
  }

  set tool(value) {
    this._props.tool = value
  }

  get result(): string {
    return this._props.result;
  }
  set result(value) {
    this._props.result = value;
  }
  get judgement(): string {
    if (parseFloat(this._props.result) > parseFloat(this._props.nominalValue)) {
      if (
        parseFloat(this._props.nominalValue) + +this._props.upper >=
        parseFloat(this._props.result)
      ) {
        return "ok".toUpperCase();
      } else {
        const count =
          parseFloat(this._props.result) -
          parseFloat(this._props.nominalValue) -
          this._props.upper;

        if (isNaN(count)) {
          return "";
        } else {
          return count.toFixed(5).toString();
        }
      }
    } else {
      if (
        parseFloat(this._props.nominalValue) + +this._props.lower <=
        parseFloat(this._props.result)
      ) {
        return "ok".toUpperCase();
      } else {
        const count =
          parseFloat(this._props.result) -
          parseFloat(this._props.nominalValue) -
          +this._props.lower;

        if (isNaN(count)) {
          return "";
        } else {
          return count.toFixed(5).toString();
        }
      }
    }
  }
  get saResult(): string {
    return this._props.saResult;
  }
  set saResult(value) {
    this._props.saResult = value;
  }
  get saJudgement(): string {
    if (this._props.saJudgement !== "ok") {
      if (parseInt(this._props.saResult) > parseInt(this._props.nominalValue)) {
        if (
          parseInt(this._props.nominalValue) + +this._props.upper >=
          parseInt(this._props.saResult)
        ) {
          return "ok".toLowerCase();
        } else {
          const count =
            parseInt(this._props.saResult) -
            parseInt(this._props.nominalValue) +
            +this._props.saUpper;

          if (isNaN(count)) {
            return "";
          } else {
            return count.toFixed(5).toString();
          }
        }
      } else {
        if (
          parseInt(this._props.nominalValue) + +this._props.saLower <=
          parseInt(this._props.saResult)
        ) {
          return "ok".toUpperCase();
        } else {
          const count =
            parseInt(this._props.saResult) -
            parseInt(this._props.nominalValue) -
            +this._props.saLower;

          if (isNaN(count)) {
            return "";
          } else {
            return count.toFixed(5).toString();
          }
        }
      }
    }
  }
  get checked(): boolean {
    return !!this._props.checked;
  }
}

