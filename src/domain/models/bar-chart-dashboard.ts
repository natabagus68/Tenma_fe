import moment from "moment";
import { Entity } from "./_entity";

export interface IBar {
    date: string[];
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

    getMonthName(monthString: string) {
        const monthIndex = parseInt(monthString) - 1;
        const date = new Date(2000, monthIndex, 1);
        const options = { month: "long" };
        return date.toLocaleDateString("default", options);
    }

    get date(): string[] {
        const data = this._props.date.map((el) => {
            const time = moment(el, "DD-MM-YYYY").format("DD MMM");
            if (time !== "Invalid date") return time;
            else return el;
        });
        return data;
    }
    get data3D(): Number[] {
        return this._props.data3D;
    }
    get data2D(): Number[] {
        return this._props.data2D;
    }
}
