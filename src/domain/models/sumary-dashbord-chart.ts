import { Entity } from "./_entity";

export interface SumaryInterface {
    total: Number;
    ok: Number;
    ng: Number;
    waiting: Number;
}

export class Sumary extends Entity<SumaryInterface> {
    static create(props: SumaryInterface): Sumary {
        return new Sumary(props);
    }
    unmarshall(): SumaryInterface {
        return {
            total: this.total,
            ok: this.ok,
            ng: this.ng,
            waiting: this.waiting,
        };
    }

    get total(): Number {
        return this._props.total;
    }
    get ok(): Number {
        return this._props.ok;
    }
    get ng(): Number {
        return this._props.ng;
    }
    get waiting(): Number {
        return this._props.waiting;
    }
}
