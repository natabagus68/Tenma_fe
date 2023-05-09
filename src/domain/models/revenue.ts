import moment from "moment";
import { Entity } from "./_entity";

export interface IRevenue {
    nominal: number;
    upper: number;
    lower: number;
    saUpper: number;
    saLower: number;
    saResult: number;
    result: number;
    createdAt: string[];
}

export class Revenue extends Entity<IRevenue> {
    static create(props: IRevenue): Revenue {
        return new Revenue(props);
    }

    unmarshall() {
        return {
            nominal: this.nominal,
            upper: this.upper,
            lower: this.lower,
            saUpper: this.saUpper,
            saLower: this.saLower,
            saResult: this.saResult,
            result: this.result,
            createdAt: this.createdAt,
        };
    }

    get nominal(): number {
        return this._props.nominal;
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
    get saResult(): number {
        return this._props.saResult;
    }
    get result(): number {
        return this._props.result;
    }
    get createdAt(): string[] {
        return [
            moment(this._props.createdAt).format("LT"),
            moment(this._props.createdAt).format("ddddd MMM"),
        ];
    }
}
