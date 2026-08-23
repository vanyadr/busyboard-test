import type {ColumnsType} from 'antd/es/table';
import cn from 'classnames';
import styles from './Columns.module.scss';
import {ISupplyItem} from '@/entities/Supply/model/supply.types';
import {FilterOutlineIcon} from '@/shared/assets/svg';

const titleWithIcon = (label: string) => (
    <span className={styles.columnTitle}>
        <span>{label}</span>
        <div>
            <FilterOutlineIcon />
        </div>
    </span>
);
const dateSorter = (a: string, b: string) => new Date(a).getTime() - new Date(b).getTime();
const columns: ColumnsType<ISupplyItem> = [
    {
        title: titleWithIcon('№'),
        dataIndex: 'number',
        key: 'number',
        sorter: (a, b) => a.number.localeCompare(b.number),
        defaultSortOrder: 'ascend',
    },
    {
        title: titleWithIcon('ДАТА'),
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => dateSorter(a.date, b.date),
    },
    {
        title: titleWithIcon('ОРГАНИЗАЦИЯ'),
        dataIndex: 'organization',
        key: 'organization',
        sorter: (a, b) => a.organization.localeCompare(b.organization),
    },
    {
        title: titleWithIcon('КОНТРАГЕНТ'),
        dataIndex: 'contractor',
        key: 'contractor',
        sorter: (a, b) => a.contractor.localeCompare(b.contractor),
    },
    {
        title: titleWithIcon('№ ПОСТАВКИ'),
        dataIndex: 'supplyNumber',
        key: 'supplyNumber',
        sorter: (a, b) => a.supplyNumber.localeCompare(b.supplyNumber),
    },
    {
        title: titleWithIcon('КОЛ-ВО'),
        dataIndex: 'quantity',
        key: 'quantity',
        sorter: (a, b) => a.quantity - b.quantity,
    },
    {
        title: titleWithIcon('СТАТУС'),
        dataIndex: 'statusText',
        key: 'status',
        sorter: (a, b) => a.statusText.localeCompare(b.statusText),
        render: (_, item) => (
            <span
                className={cn(styles.statusBadge, {
                    [styles.statusAccepted]: item.status === 'accepted',
                    [styles.statusUnreserved]: item.status === 'unreserved' || item.status === 'not_reserved',
                })}
            >
                {item.statusText}
            </span>
        ),
    },
    {
        title: titleWithIcon('ДАТА ПРИЕМКИ'),
        dataIndex: 'acceptanceDate',
        key: 'acceptanceDate',
        sorter: (a, b) => dateSorter(a.acceptanceDate, b.acceptanceDate),
    },
    {
        title: titleWithIcon('СУММА'),
        dataIndex: 'amount',
        key: 'amount',
        sorter: (a, b) => a.amount - b.amount,
    },
    {
        title: titleWithIcon('КОММЕНТАРИЙ'),
        dataIndex: 'comment',
        key: 'comment',
        sorter: (a, b) => a.comment.localeCompare(b.comment),
    },
];

export {columns};
