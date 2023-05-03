import { Entity } from "./_entity";

interface IProgressCheck {
    part: Number;
    progressCheck: Number;
    ThreeDCheck: Number;
    TwoDCheck: Number;
}

export class ProgressCheck extends Entity<IProgressCheck> {
    static create(props: IProgressCheck): ProgressCheck {
        return new ProgressCheck(props);
    }

    unmarshall() {
        return {
            part: this.part,
            progressCheck: this.progressCheck,
            ThreeDCheck: this.ThreeDCheck,
            TwoDCheck: this.TwoDCheck,
        };
    }

    get part(): Number {
        return this._props.part;
    }
    get progressCheck(): Number {
        return this._props.progressCheck;
    }
    get ThreeDCheck(): Number {
        return this._props.ThreeDCheck;
    }
    get TwoDCheck(): Number {
        return this._props.TwoDCheck;
    }
}
