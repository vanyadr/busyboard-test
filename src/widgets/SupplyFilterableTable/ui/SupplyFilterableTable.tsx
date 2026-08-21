import styles from './SupplyFilterableTable.module.scss';
import {SupplyFilters} from '@/features/SupplyFilters/ui/SupplyFilters';
import {SupplyTable} from '@/features/SupplyTable/ui/SupplyTable';
import {useSuppliesQuery, useSuppliesSelectQuery} from '@/entities/Supply/api/supply.queries';
import {Spin} from 'antd';
import cn from 'classnames';
import {memo} from 'react';

interface ISupplyFilterableTableProps {
    className?: string;
}

const SupplyFilterableTable = memo(({className}: ISupplyFilterableTableProps) => {
    const {data: supplies = [], isLoading} = useSuppliesQuery();
    const {data: supplySelect = [], isLoading: isSupplySelectLoading} = useSuppliesSelectQuery();

    return (
        <>
            <div className={styles.subinfo}>
                <span>Заявки на поставку</span>
            </div>
            <div className={cn(className, styles.container)}>
                {isLoading || isSupplySelectLoading ? (
                    <div className={styles.spinner}>
                        <Spin size='default' />
                    </div>
                ) : (
                    <>
                        <SupplyFilters data={supplySelect} />
                        <SupplyTable data={supplies} />
                    </>
                )}
            </div>
        </>
    );
});

export {SupplyFilterableTable};
