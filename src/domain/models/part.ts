import { uid } from "uid";

export interface IPart {
    id?: string;
    custItemId: string;
    partCode: string;
    partName: string;
    oldPartNumber: string;
    itemGroupCode: string;
    itemGroupName: string;
    customerModel: string;
    customer: string;
    material: string;
    materialColor: string;
    customerModelGroup: string;
    unitCd: string;
    materialDetails: string;
    productWeight: number;
    customerModelId: string;
    customerId: string;
    customerModelGroupId: string;
    checked?: boolean;
}

export class Part {
    id: string;
    custItemId: string;
    partCode: string;
    partName: string;
    oldPartNumber: string;
    itemGroupCode: string;
    itemGroupName: string;
    customerModel: string;
    customer: string;
    material: string;
    materialColor: string;
    customerModelGroup: string;
    unitCd: string;
    materialDetails: string;
    productWeight: number;
    customerModelId: string;
    customerId: string;
    customerModelGroupId: string;
    checked: boolean;

    constructor(props: IPart) {
        this.id = props.id || uid();
        this.custItemId = props.custItemId;
        this.partCode = props.partCode;
        this.partName = props.partName;
        this.oldPartNumber = props.oldPartNumber;
        this.itemGroupCode = props.itemGroupCode;
        this.itemGroupName = props.itemGroupName;
        this.customerModel = props.customerModel;
        this.customer = props.customer;
        this.material = props.material;
        this.materialColor = props.materialColor;
        this.customerModelGroup = props.customerModelGroup;
        this.unitCd = props.unitCd;
        this.materialDetails = props.materialDetails;
        this.productWeight = props.productWeight;
        this.customerModelId = props.customerModelId;
        this.customerId = props.customerId;
        this.customerModelGroupId = props.customerModelGroupId;
        this.checked = !!props.checked;
    }

    static create(props: IPart): Part {
        return new Part(props);
    }

    static createEmpty(): Part {
        return new Part({
            custItemId: "",
            partCode: "",
            partName: "",
            oldPartNumber: "",
            itemGroupCode: "",
            itemGroupName: "",
            customerModel: "",
            customer: "",
            material: "",
            materialColor: "",
            customerModelGroup: "",
            unitCd: "",
            materialDetails: "",
            productWeight: 0,
            customerModelId: "",
            customerId: "",
            customerModelGroupId: "",
        });
    }

    check(): Part {
        this.checked = true;
        return this;
    }

    uncheck(): Part {
        this.checked = false;
        return this;
    }

    unmarshall(): IPart {
        return {
            id: this.id,
            custItemId: this.custItemId,
            partCode: this.partCode,
            partName: this.partName,
            oldPartNumber: this.oldPartNumber,
            itemGroupCode: this.itemGroupCode,
            itemGroupName: this.itemGroupName,
            customerModel: this.customerModel,
            customer: this.customer,
            material: this.material,
            materialColor: this.materialColor,
            customerModelGroup: this.customerModelGroup,
            unitCd: this.unitCd,
            materialDetails: this.materialDetails,
            productWeight: this.productWeight,
            customerModelId: this.customerModelId,
            customerId: this.customerId,
            customerModelGroupId: this.customerModelGroupId,
            checked: !!this.checked,
        };
    }
}
