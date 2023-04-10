import { Entity } from "./_entity";
import { ITool, Tool } from "./tool";

export interface IPacSegment {
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

export class PacSegment extends Entity<IPacSegment> {
    static PacSegment(arg0: {
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
    static create(props: IPacSegment): PacSegment {
        return new PacSegment(props);
    }
    unmarshall(): IPacSegment {
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
    duplicate(): PacSegment {
        return PacSegment.create(this.unmarshall());
    }
    update(props: IPacSegment): PacSegment {
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
    get result(): string {
        return this._props.result;
    }
    get judgement(): string {
        return this._props.judgement;
    }
    get saResult(): string {
        return this._props.saResult;
    }
    get saJudgement(): string {
        return this._props.saJudgement;
    }
    get checked(): boolean {
        return !!this._props.checked;
    }
}
