import type {ISupplyItem} from '@/entities/Supply/model/supply.types';
import {Table} from '@/shared/ui/Table';
import {columns} from '../lib/columns';
import {memo} from 'react';

interface Props {
    data: ISupplyItem[];
}

export const SupplyTable = memo(({data}: Props) => {
    return (
        <section id='onboarding-table-target'>
            <Table<ISupplyItem> data={data} columns={columns} />
        </section>
    );
});
