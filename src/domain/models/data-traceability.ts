import { Entity } from "./_entity";

export interface IDataTraceability {
    id?: string;
    date: Date;
    partCode: string;
    model: string;
    shift: string;
    threeD: boolean;
    twoD: boolean;
    pic: string;
    judgement: string;
}

export class DataTraceability extends Entity<IDataTraceability> {
    static create(props: IDataTraceability): DataTraceability {
        return new DataTraceability(props);
    }

    unmarshall() {
        return {
            id: this.id,
            date: this.date,
            partCode: this.partCode,
            model: this.model,
            shift: this.shift,
            threeD: this.threeD,
            twoD: this.twoD,
            pic: this.pic,
            judgement: this.judgement,
        };
    }

    get id(): string {
        return this._props.id;
    }
    get date(): Date {
        return this._props.date;
    }
    get partCode(): string {
        return this._props.partCode;
    }
    get model(): string {
        return this._props.model;
    }
    get shift(): string {
        return this._props.shift;
    }
    get threeD(): boolean {
        return this._props.threeD;
    }
    get twoD(): boolean {
        return this._props.twoD;
    }
    get pic(): string {
        return this._props.pic;
    }
    get judgement(): string {
        return this._props.judgement;
    }
}
