import type {ISupplyItem, ISupplySelect} from '@/entities/Supply/model/supply.types';
import './supply.mock';
import {ApiInstance} from '@/app/api';

export const fetchSupplies = async (): Promise<ISupplyItem[]> => {
    const response = await ApiInstance.get<ISupplyItem[]>('/supplies');
    return response.data;
};

export const fetchSupplySelect = async (): Promise<ISupplySelect[]> => {
    const response = await ApiInstance.get<ISupplySelect[]>('/supplies/select');
    return response.data;
};
