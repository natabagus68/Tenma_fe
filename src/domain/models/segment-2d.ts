import { Entity } from "./_entity";
import { ITool } from "./tool";

export interface ISegment2D {
    character: string;
    nominal: string;
    upper: string;
    lower: string;
    saUpper: string;
    saLower: string;
    tool: ITool;
    actualResult: number;
    SAresult: number;
}

export class Segmend2D extends Entity<ISegment2D> {
    static create(props: ISegment2D) {
        return new Segmend2D(props);
    }

    unmarshall() {
        return {
            character: this.character,
            nominal: this.nominal,
            upper: this.upper,
            lower: this.lower,
            saUpper: this.saUpper,
            saLower: this.saLower,
            tool: this.tool,
            actualResult: this.actualResult,
            SAresult: this.SAresult,
        };
    }

    get character(): string {
        return this._props.character;
    }
    get nominal(): string {
        return this._props.nominal;
    }

    get upper(): string {
        return this._props;
    }
}
