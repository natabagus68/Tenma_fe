import { uid } from "uid";
export interface ICustomerModelGroup {
    id?: string;
    name: string;
    checked?: boolean;
}
export class CustomerModelGroup {
    id: string;
    name: string;
    checked: boolean;
    constructor(props: ICustomerModelGroup) {
        this.id = props.id || uid();
        this.name = props.name;
        this.checked = !!props.checked;
    }
    static create(props: ICustomerModelGroup): CustomerModelGroup {
        return new CustomerModelGroup(props);
    }
    check(): CustomerModelGroup {
        this.checked = true;
        return this;
    }
    uncheck(): CustomerModelGroup {
        this.checked = false;
        return this;
    }
    unmarshall(): ICustomerModelGroup {
        return {
            id: this.id,
            name: this.name,
            checked: !!this.checked,
        };
    }
}
