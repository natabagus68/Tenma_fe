import { Entity } from "./_entity";
import { Machine } from "./machine";
import { Part } from "./part";

export interface IReport {
    id?: string;
    idCode: string;
    partName: string;
    lastReport: Date;
    pic: string;
    part: Part;
    checked: boolean;
    judgement: string;
    machine: Machine;
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
            part: this.part,
            checked: this.checked,
            judgement: this.judgement,
            machine: this.machine,
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
    get part(): Part {
        return this._props.part;
    }
    get checked(): boolean {
        return this._props.checked;
    }
    get judgement(): string {
        return this._props.judgement;
    }
    get machine(): Machine {
        return this._props.machine;
    }
}
