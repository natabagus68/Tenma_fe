import { Entity } from "./_entity";

export interface ITool {
    id?: string;
    idTool: string;
    toolCode: string;
    name: string;
    address: string;
    checked: boolean;
}

export class Tool extends Entity<ITool> {
    static create(props: ITool) {
        return new Tool(props);
    }
    unmarshall(): ITool {
        return {
            id: this.id,
            idTool: this.idTool,
            toolCode: this.toolCode,
            name: this.name,
            address: this.address,
            checked: this.checked,
        };
    }
    check():Tool{
        this._props.checked = true
        return this
    }
    uncheck():Tool{
        this._props.checked = false
        return this
    }
    get idTool(): string {
        return this._props.idTool;
    }
    get toolCode(): string {
        return this._props.toolCode;
    }
    get name(): string {
        return this._props.name;
    }
    get address(): string {
        return this._props.address;
    }
    get checked(): boolean {
        return !!this._props.checked;
    }
}
