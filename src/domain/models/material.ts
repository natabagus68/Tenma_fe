import { uid } from "uid";
export interface IMaterial {
    id?: string;
    name: string;
    checked?: boolean;
}
export class Material {
    id: string;
    name: string;
    checked: boolean;
    constructor(props: IMaterial) {
        this.id = props.id || uid();
        this.name = props.name;
        this.checked = !!props.checked;
    }
    static create(props: IMaterial): Material {
        return new Material(props);
    }
    check(): Material {
        this.checked = true;
        return this;
    }
    uncheck(): Material {
        this.checked = false;
        return this;
    }
    unmarshall(): IMaterial {
        return {
            id: this.id,
            name: this.name,
            checked: !!this.checked,
        };
    }
}
