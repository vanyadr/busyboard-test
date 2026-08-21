export interface ISupplyItem {
    id: string;
    number: string;
    date: string;
    organization: string;
    contractor: string;
    supplyNumber: string;
    quantity: number;
    status: string;
    statusText: string;
    acceptanceDate: string;
    deliveryTime: string;
    amount: number;
    comment: string;
    [key: string]: unknown;
}

export interface ISupplySelect {
    id: number;
    label: string;
    value: string;
}
