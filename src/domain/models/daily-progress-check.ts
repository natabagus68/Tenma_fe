import { Entity } from "./_entity";
import { IMachine, Machine } from "./machine";
import { IPart, Part } from "./part";
import { IPic, Pic } from "./pic";

export interface IDailyProgressCheck {
    id?: string;
    picId: string;
    judgement: string;
    judgement2d: string;
    judgement3d: string;
    updatedAt: string;
    partCode: string;
    model: string;
    shift: string;
    has3d: boolean;
    has2d: boolean;
    pic?: IPic;
    partId: string;
    machineId: string;
    machine?: IMachine;
    inspectionDate: Date;
    lotProduction: string;
    labelNo: string;
    acceptSampleTime: string;
    measureSampleTime: string;
    weightPart: number;
    checked: boolean;
    part?: IPart;
    checkedBy?: string;
}

export class DailyProgressCheck extends Entity<IDailyProgressCheck> {
    static create(props: IDailyProgressCheck): DailyProgressCheck {
        return new DailyProgressCheck(props);
    }
    unmarshall(): IDailyProgressCheck {
        return {
            id: this.id,
            picId: this.picId,
            judgement: this.judgement,
            judgement2d: this.judgement2d,
            judgement3d: this.judgement3d,
            updatedAt: this.updatedAt,
            partCode: this.partCode,
            model: this.model,
            shift: this.shift,
            has3d: this.has3d,
            has2d: this.has2d,
            pic: this.pic ? this.pic.unmarshall() : undefined,
            partId: this.partId,
            machineId: this.machineId,
            inspectionDate: this.inspectionDate,
            lotProduction: this.lotProduction,
            labelNo: this.labelNo,
            acceptSampleTime: this.acceptSampleTime,
            measureSampleTime: this.measureSampleTime,
            weightPart: this.weightPart,
            machine: this.machine ? this.machine.unmarshall() : undefined,
            checked: this.checked,
            part: this.part ? this.part.unmarshall() : undefined,
            checkedBy: this.checkedBy,
        };
    }
    check(): DailyProgressCheck {
        this._props.checked = true;
        return this;
    }
    uncheck(): DailyProgressCheck {
        this._props.checked = false;
        return this;
    }
    duplicate(): DailyProgressCheck {
        return DailyProgressCheck.create(this.unmarshall());
    }
    get picId(): string {
        return this._props.picId;
    }
    get judgement(): string {
        return this._props.judgement;
    }
    set judgement(value) {
        this._props.judgement = value;
    }
    get judgement2d(): string {
        return this._props.judgement2d;
    }
    get judgement3d(): string {
        return this._props.judgement3d;
    }
    set judgement2d(value) {
        this._props.judgement2d = value;
    }
    set judgement3d(value) {
        this._props.judgement3d = value;
    }
    get updatedAt(): string {
        return this._props.updatedAt;
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
    get has3d(): boolean {
        return this._props.has3d;
    }
    get has2d(): boolean {
        return this._props.has2d;
    }
    get pic(): Pic {
        return this._props.pic ? Pic.create(this._props.pic) : undefined;
    }
    get partId(): string {
        return this._props.partId;
    }
    get machineId(): string {
        return this._props.machineId;
    }
    get inspectionDate(): Date {
        return this._props.inspectionDate;
    }
    get lotProduction(): string {
        return this._props.lotProduction;
    }
    get labelNo(): string {
        return this._props.labelNo;
    }
    get acceptSampleTime(): string {
        if (this._props.acceptSampleTime === "Invalid date") return "-";
        else return this._props.acceptSampleTime;
    }
    get measureSampleTime(): string {
        if (this._props.measureSampleTime === "Invalid date") return "-";
        else return this._props.measureSampleTime;
    }
    get weightPart(): number {
        return this._props.weightPart;
    }
    get checked(): boolean {
        return this._props.checked;
    }
    get machine(): Machine | undefined {
        return this._props.machine
            ? Machine.create(this._props.machine)
            : undefined;
    }
    get part(): Part | undefined {
        return this._props.part ? Part.create(this._props.part) : undefined;
    }
    get checkedBy(): string | undefined {
        return this._props.checkedBy;
    }
}
