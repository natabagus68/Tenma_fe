import { uid } from "uid";

export interface Segment {
    character: string;
    nominal_type: string;
    nominal_value: string;
    standart_upper: string;
    standart_lower: string;
    special_acept_upper: string;
    special_acept_lower: string;
    tool_id: string;
    tool?: {
        id?: string;
        id_tool: string;
        code: string;
        name: string;
        address: string;
    };
}

export interface Part {
    id?: string;
    cust_item_cd: string;
    part_name: string;
    part_cd: string;
    item_group_cd: string;
    item_group_name: string;
    old_part_number: string;
    unit_cd: string;
    product_weigth: number;
    customer_model: {
        id?: string;
        name: string;
    };
}

export interface IMeasurement {
    id?: string;
    part: Part;
    special_accept_segments: Segment[];
    checked?: boolean;
}

export class MeasurementStd {
    id: string;
    part: Part;
    special_accept_segments: Segment[];
    checked: boolean;
    part_code: any;
    segments: any;
    constructor(props: IMeasurement) {
        this.id = props.id;
        this.part = props.part;
        this.special_accept_segments = props.special_accept_segments;
        this.checked = !!props.checked;
    }
    static create(props: IMeasurement): MeasurementStd {
        return new MeasurementStd(props);
    }
    check(): MeasurementStd {
        this.checked = true;
        return this;
    }
    uncheck(): MeasurementStd {
        this.checked = false;
        return this;
    }

    unmarshall(): IMeasurement {
        return {
            id: this.id,
            part: this.part,
            special_accept_segments: this.special_accept_segments,
            checked: this.checked,
        };
    }
}
