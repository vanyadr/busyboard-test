import {Button, DatePicker, Input, Select} from 'antd';
import styles from './SupplyFilters.module.scss';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {ISupplySelect} from '@/entities/Supply/model/supply.types';
import {memo} from 'react';

interface ISupplyFiltersProps {
    className?: string;
    data: ISupplySelect[];
}

export const SupplyFilters = memo(({className, data}: ISupplyFiltersProps) => {
    return (
        <section className={className ?? ''}>
            <div className={styles.buttons}>
                <div className={styles.group}>
                    <Button type='primary'>Фильтр</Button>
                    <Button color='default' variant='filled' className={styles.sq}>
                        <BookmarkBorderOutlinedIcon />
                    </Button>
                    <Button color='default' variant='filled' className={styles.sq}>
                        <BackspaceOutlinedIcon />
                    </Button>
                    <Button color='default' variant='filled' className={styles.sq}>
                        <SearchOutlinedIcon />
                    </Button>
                </div>
                <div className={styles.group}>
                    <Button id='onboarding-api-btn' type='primary'>
                        <FileDownloadOutlinedIcon />
                        <span>Загрузить по API</span>
                    </Button>
                    <Button id='onboarding-create-btn' type='primary'>
                        <AddOutlinedIcon />
                        <span>Заявка на поставку</span>
                    </Button>
                    <Button className={styles.sq}>
                        <SettingsOutlinedIcon />
                    </Button>
                </div>
            </div>
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <label>Дата</label>
                    <DatePicker placeholder='Дата' />
                </div>
                <div className={styles.input}>
                    <label>Контрагент</label>
                    <Input placeholder='Контрагент' />
                </div>
                <div className={styles.input}>
                    <label>Организация</label>
                    <Input placeholder='Организация' />
                </div>
                <div className={styles.input}>
                    <label>Товар</label>
                    <Input placeholder='Товар' />
                </div>
                <div className={styles.input}>
                    <label>Склад</label>
                    <Select placeholder='Склад' options={data} />
                </div>
                <div className={styles.input}>
                    <label>Статус</label>
                    <Select placeholder='Статус' options={data} />
                </div>
                <div className={styles.input}>
                    <label>№ поставки</label>
                    <Input placeholder='№ поставки' />
                </div>
                <div className={styles.input}>
                    <label>Комментарий</label>
                    <Input placeholder='Комментарий' />
                </div>
                <div className={styles.input}>
                    <label>№ поставки</label>
                    <Input placeholder='№ поставки' />
                </div>
                <div className={styles.input}>
                    <label>Комментарий</label>
                    <Input placeholder='Комментарий' />
                </div>
            </div>
            <div style={{marginTop: 12, display: 'flex', gap: 8}}>
                <Button shape='round' color='default' variant='filled'>
                    Фильтр первый
                </Button>
                <Button color='primary' shape='round' variant='filled'>
                    Фильтр первый
                </Button>
            </div>
        </section>
    );
});
