import {useQuery} from '@tanstack/react-query';

import {fetchSupplies, fetchSupplySelect} from './supply.api';

export const useSuppliesQuery = () => {
    return useQuery({
        queryKey: ['supplies'],
        queryFn: fetchSupplies,
    });
};
export const useSuppliesSelectQuery = () => {
    return useQuery({
        queryKey: ['Supply-select'],
        queryFn: fetchSupplySelect,
    });
};
