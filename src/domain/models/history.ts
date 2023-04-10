import { Entity } from "./_entity";

export interface IHistory {
    id?: string;
    date: Date;
    problemDetail: string;
    char: string;
    remark: string;
    checked?: boolean;
}

export class History extends Entity<IHistory> {
    static create(props: IHistory): History {
        return new History(props);
    }
    unmarshall(): IHistory {
        return {
            id: this.id,
            date: this.date,
            problemDetail: this.problemDetail,
            char: this.char,
            remark: this.remark,
            checked: this.checked,
        };
    }
    get date(): Date {
        return this._props.date;
    }
    get problemDetail(): string {
        return this._props.problemDetail;
    }
    get char(): string {
        return this._props.char;
    }
    get remark(): string {
        return this._props.remark;
    }
    get checked(): boolean {
        return !!this._props.checked;
    }
}
