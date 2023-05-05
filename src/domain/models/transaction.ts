import { Entity } from "./_entity";

export interface ITransaction {
    id?: string;
    progressTransactionID: string;
}

export class Transaction extends Entity<ITransaction> {
    static create(props: ITransaction): Transaction {
        return new Transaction(props);
    }

    unmarshall() {
        return {
            id: this.id,
            progressTransactionID: this.progressTransactionID,
        };
    }

    get id(): string | undefined {
        return this._props.id;
    }

    get progressTransactionID(): string {
        return this._props.progressTransactionID;
    }
}
