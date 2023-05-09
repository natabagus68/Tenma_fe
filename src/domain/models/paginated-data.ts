export interface IPaginatedData<T> {
    q?: string;
    page: number;
    limit: number;
    lastPage: number;
    totalRow?: number;
    data: T[];
    totalPart?: number;
    progressCheck?: number;
    check3d?: number;
    check2d?: number;
}

export class PaginatedData<T> {
    q?: string;
    page: number;
    limit: number;
    lastPage: number;
    totalRow?: number;
    data: T[];
    totalPart?: number;
    progressCheck?: number;
    check3d?: number;
    check2d?: number;

    constructor(props: IPaginatedData<T>) {
        this.q = props.q;
        this.page = props.page;
        this.limit = props.limit;
        this.lastPage = props.lastPage;
        this.totalRow = props.totalRow;
        this.data = props.data;
        this.totalPart = props.totalPart;
        this.progressCheck = props.progressCheck;
        this.check3d = props.check3d;
        this.check2d = props.check2d;
    }
    static create<T>(props: IPaginatedData<T>) {
        return new PaginatedData<T>(props);
    }
    next(): PaginatedData<T> {
        if (this.lastPage < this.page) {
            this.page++;
        }
        return this;
    }
    prev(): PaginatedData<T> {
        if (this.page > 1) {
            this.page--;
        }
        return this;
    }
    unmarshall() {
        return {
            q: this.q,
            page: this.page,
            limit: this.limit,
            lastPage: this.lastPage,
            data: this.data,
        };
    }
    duplicate(): PaginatedData<T> {
        return PaginatedData.create<T>(this.unmarshall());
    }
    updateData(data: T[]): PaginatedData<T> {
        this.data = data;
        return this;
    }
}
