import type {ISupplyItem} from '@/entities/Supply/model/supply.types';
import {Table} from '@/shared/ui/Table';
import {columns} from '../lib/Columns/Columns';
import {memo} from 'react';
import styles from './SupplyTable.module.scss';

interface Props {
    data: ISupplyItem[];
}

export const SupplyTable = memo(({data}: Props) => {
    return (
        <section id='onboarding-table-target' className={styles.container}>
            <Table<ISupplyItem> data={data} columns={columns} />
        </section>
    );
});
