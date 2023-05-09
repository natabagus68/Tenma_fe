import { Entity } from "./_entity";
import {
    DailyProgressCheck,
    IDailyProgressCheck,
} from "./daily-progress-check";

export interface ITraceability {
    totalPart: number;
    progressCheck: number;
    check3d: number;
    check2d: number;
}

export class Traceability extends Entity<ITraceability> {
    static create(props: ITraceability): Traceability {
        return new Traceability(props);
    }

    unmarshall() {
        return {
            totalPart: this.totalPart,
            progressCheck: this.progressCheck,
            check3d: this.check3d,
            check2d: this.check2d,
        };
    }

    get totalPart(): number {
        return this._props.totalPart;
    }
    get progressCheck(): number {
        return this._props.progressCheck;
    }
    get check3d(): number {
        return this._props.check3d;
    }
    get check2d(): number {
        return this._props.check2d;
    }
}
