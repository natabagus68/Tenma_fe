import { Entity } from "./_entity";

export interface IComparisson {
    id?: string;
    result: string;
    resultJudgment: string;
    saResult: string;
    saResultJudgment: string;
}

export class Comparisson extends Entity<IComparisson> {
    static create(props: IComparisson): Comparisson {
        return new Comparisson(props);
    }

    unmarshall() {
        return {
            id: this.id,
            result: this.result,
            resultJudgment: this.resultJudgment,
            saResult: this.saResult,
            saResultJudgment: this.saResultJudgment,
        };
    }
    get id(): string {
        return this._props.id;
    }
    get result(): string {
        return this._props.result;
    }
    get resultJudgment(): string {
        return this._props.resultJudgment;
    }
    get saResult(): string {
        return this._props.saResult;
    }
    get saResultJudgment(): string {
        return this._props.saResultJudgment;
    }
}
