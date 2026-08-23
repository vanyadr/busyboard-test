import styles from './SupplyFilterableTable.module.scss';
import {SupplyFilters} from '@/features/SupplyFilters/ui/SupplyFilters';
import {SupplyTable} from '@/features/SupplyTable/ui/SupplyTable';
import {useSuppliesQuery, useSuppliesSelectQuery} from '@/entities/Supply/api/supply.queries';
import {Spin} from 'antd';
import {memo} from 'react';
import {SectionContainer} from '@/shared/ui/SectionContainer';

interface ISupplyFilterableTableProps {
    className?: string;
}

const SupplyFilterableTable = memo(({className}: ISupplyFilterableTableProps) => {
    const {data: supplies = [], isLoading} = useSuppliesQuery();
    const {data: supplySelect = [], isLoading: isSupplySelectLoading} = useSuppliesSelectQuery();

    return (
        <SectionContainer className={className} title={'Заявки на поставку'}>
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
        </SectionContainer>
    );
});

export {SupplyFilterableTable};
