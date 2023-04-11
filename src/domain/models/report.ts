import { Entity } from "./_entity";

export interface IReport {
    id?: string;
    idCode: string;
    partName: string;
    lastReport: Date;
    pic: string;
    checked: boolean;
}
export class Report extends Entity<IReport> {
    static create(props: IReport): Report {
        return new Report(props);
    }
    unmarshall(): IReport {
        return {
            id: this.id,
            idCode: this.idCode,
            partName: this.partName,
            lastReport: this.lastReport,
            pic: this.pic,
            checked: this.checked,
        };
    }
    duplicate(): Report {
        return Report.create(this.unmarshall());
    }
    update(props: IReport): Report {
        this._props = props;
        return this;
    }
    get idCode(): string {
        return this._props.idCode;
    }
    get partName(): string {
        return this._props.partName;
    }
    get lastReport(): Date {
        return this._props.lastReport;
    }
    get pic(): string {
        return this._props.pic;
    }
    get checked(): boolean {
        return this._props.checked;
    }
}
