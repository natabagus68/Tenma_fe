import { uid } from "uid";
export interface ICustomer {
    id?: string;
    name: string;
    checked?: boolean;
}
export class Customer {
    id: string;
    name: string;
    checked: boolean;
    constructor(props: ICustomer) {
        this.id = props.id || uid();
        this.name = props.name;
        this.checked = !!props.checked;
    }
    static create(props: ICustomer): Customer {
        return new Customer(props);
    }
    check(): Customer {
        this.checked = true;
        return this;
    }
    uncheck(): Customer {
        this.checked = false;
        return this;
    }
    unmarshall(): ICustomer {
        return {
            id: this.id,
            name: this.name,
            checked: !!this.checked,
        };
    }
}
