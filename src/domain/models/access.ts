import { Entity } from "./_entity";

export interface IAccess {
  id?: string;
  name: string;
  checked: boolean;
}

export class Access extends Entity<IAccess> {
  static create(props: IAccess): Access {
    return new Access(props);
  }
  update(props: IAccess): Access {
    this._props = props;
    return this;
  }
  duplicate(): Access {
    return Access.create(this.unmarshall());
  }
  unmarshall(): IAccess {
    return {
      id: this.id,
      name: this.name,
      checked: this.checked,
    };
  }
  get name(): string {
    return this._props.name;
  }
  get checked(): boolean {
    return this._props.checked;
  }
}

