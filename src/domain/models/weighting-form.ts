import { Entity } from "./_entity";

export interface IWeightingForm {
    id?: string;
    toolID: string;
    transactionID: string;
}

export class WeightingForm extends Entity<IWeightingForm> {
    static create(props: IWeightingForm): WeightingForm {
        return new WeightingForm(props);
    }

    unmarshall() {
        return {
            id: this.id,
            toolID: this.toolID,
            transactionID: this.transactionID,
        };
    }

    duplicate(props: WeightingForm) {
        return WeightingForm.create(props.unmarshall());
    }

    get id(): string {
        return this._props.id;
    }
    get toolID(): string {
        return this._props.toolID;
    }

    get transactionID(): string {
        return this._props.transactionID;
    }
}
