import { Entity } from "./_entity";

export interface IPartReport {
    id?: string;
    idReport: string;
    date: Date;
    noMachine: string;
    pic: string;
    judgement: string;
    partName: string;
    partCode: string;
    model: string;
    machineNo: string;
    inspectionDate: Date;
    partWeightQis: number;
    lotProduction: string;
    checkedBy: string;
    shift: string;
    labelNo: string;
    acceptSampleTime: string;
    measureSampleTime: string;
    weightPart: number;
}

export class PartReport extends Entity<IPartReport> {
    static create(props: IPartReport): PartReport {
        return new PartReport(props);
    }

    unmarshall(): IPartReport {
        return {
            id: this.id,
            idReport: this.idReport,
            date: this.date,
            noMachine: this.noMachine,
            pic: this.pic,
            judgement: this.judgement,
            partName: this.partName,
            partCode: this.partCode,
            model: this.model,
            machineNo: this.machineNo,
            inspectionDate: this.inspectionDate,
            partWeightQis: this.partWeightQis,
            lotProduction: this.lotProduction,
            checkedBy: this.checkedBy,
            shift: this.shift,
            labelNo: this.labelNo,
            acceptSampleTime: this.acceptSampleTime,
            measureSampleTime: this.measureSampleTime,
            weightPart: this.weightPart,
        };
    }

    duplicate(): PartReport {
        return PartReport.create(this.unmarshall());
    }

    update(props: IPartReport): PartReport {
        this._props = props;
        return this;
    }

    get idReport(): string {
        return this._props.idReport;
    }
    get date(): Date {
        return this._props.date;
    }
    get noMachine(): string {
        return this._props.noMachine;
    }
    get pic(): string {
        return this._props.pic;
    }
    get judgement(): string {
        return this._props.judgement;
    }
    get partName(): string {
        return this._props.partName;
    }
    get partCode(): string {
        return this._props.partCode;
    }
    get model(): string {
        return this._props.model;
    }
    get machineNo(): string {
        return this._props.machineNo;
    }
    get inspectionDate(): Date {
        return this._props.inspectionDate;
    }
    get partWeightQis(): number {
        return this._props.partWeightQis;
    }
    get lotProduction(): string {
        return this._props.lotProduction;
    }
    get checkedBy(): string {
        return this._props.checkedBy;
    }
    get shift(): string {
        return this._props.shift;
    }
    get labelNo(): string {
        return this._props.labelNo;
    }
    get acceptSampleTime(): string {
        return this._props.acceptSampleTime;
    }
    get measureSampleTime(): string {
        return this._props.measureSampleTime;
    }
    get weightPart(): number {
        return this._props.weightPart;
    }
}
