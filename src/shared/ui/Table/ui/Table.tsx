import styles from './Table.module.scss';
import {ConfigProvider, Pagination, Table as AntdTable} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {useMemo, useState} from 'react';
import cn from 'classnames';
import locale from 'antd/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

interface ITableProps<T> {
    className?: string;
    data: T[];
    columns: ColumnsType<T>;
}

const Table = <T extends Record<string, unknown>>({className, data, columns}: ITableProps<T>) => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const paginatedData = useMemo(() => {
        const start = (page - 1) * pageSize;
        const end = start + pageSize;

        return data.slice(start, end);
    }, [data, page, pageSize]);

    return (
        <section className={cn(styles.container, className)}>
            <ConfigProvider
                locale={locale}
                theme={{
                    components: {
                        Table: {
                            headerBg: 'var(--color-accent-light)',
                            bodySortBg: 'none',
                            headerSortActiveBg: 'var(--color-accent-light)',
                        },
                        Pagination: {
                            itemActiveBg: 'var(--color-accent)',
                            itemActiveColor: 'var(--color-item-bg)',
                            itemActiveColorHover: 'var(--color-item-bg)',
                        },
                    },
                }}
            >
                <AntdTable<T>
                    rowKey='id'
                    columns={columns}
                    dataSource={paginatedData}
                    pagination={false}
                    scroll={{x: 1200}}
                    showSorterTooltip={false}
                />
                <div className={styles.pagination}>
                    <Pagination
                        current={page}
                        pageSize={pageSize}
                        total={data.length}
                        showSizeChanger
                        pageSizeOptions={['5', '10', '20', '50']}
                        onChange={(nextPage, nextPageSize) => {
                            setPage(nextPage);
                            setPageSize(nextPageSize);
                        }}
                        onShowSizeChange={(_, nextSize) => {
                            setPage(1);
                            setPageSize(nextSize);
                        }}
                        locale={{
                            items_per_page: '',
                        }}
                    />
                </div>
            </ConfigProvider>
        </section>
    );
};

export {Table};
