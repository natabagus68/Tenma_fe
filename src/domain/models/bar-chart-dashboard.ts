import { Entity } from "./_entity";

export interface IBar {
    date: Date[];
    data3D: Number[];
    data2D: Number[];
}

export class Bar extends Entity<IBar> {
    static create(props: IBar): Bar {
        return new Bar(props);
    }

    unmarshall() {
        return {
            date: this.date,
            data3D: this.data3D,
            data2D: this.data2D,
        };
    }

    get date(): Date[] {
        return this._props.date;
    }
    get data3D(): Number[] {
        return this._props.data3D;
    }
    get data2D(): Number[] {
        return this._props.data2D;
    }
}
