import { uid } from "uid";
export interface ICustomerModel {
    id?: string;
    name: string;
    checked?: boolean;
}
export class CustomerModel {
    id: string;
    name: string;
    checked: boolean;
    constructor(props: ICustomerModel) {
        this.id = props.id || uid();
        this.name = props.name;
        this.checked = !!props.checked;
    }
    static create(props: ICustomerModel): CustomerModel {
        return new CustomerModel(props);
    }
    check(): CustomerModel {
        this.checked = true;
        return this;
    }
    uncheck(): CustomerModel {
        this.checked = false;
        return this;
    }
    unmarshall(): ICustomerModel {
        return {
            id: this.id,
            name: this.name,
            checked: !!this.checked,
        };
    }
}
