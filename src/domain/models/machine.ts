import { Entity } from "./_entity";

export interface IMachine {
    id?: string;
    idMachine: string;
    noMachine: string;
    checked: boolean;
}

export class Machine extends Entity<IMachine> {
    static create(props: IMachine): Machine {
        return new Machine(props);
    }
    unmarshall(): IMachine {
        return {
            id: this.id,
            idMachine: this.idMachine,
            noMachine: this.noMachine,
            checked: this.checked,
        };
    }
    check():Machine{
        this._props.checked = true
        return this
    }
    uncheck():Machine{
        this._props.checked = false
        return this
    }
    get idMachine(): string {
        return this._props.idMachine;
    }
    get noMachine(): string {
        return this._props.noMachine;
    }
    get checked(): boolean {
        return !!this._props.checked;
    }
}
