import styles from './SupplyFilters.module.scss';
import {ISupplySelect} from '@/entities/Supply/model/supply.types';
import {memo} from 'react';
import {Button} from '@/shared/ui/Button';
import {
    BookmarkOutlineIcon,
    DownloadOutlineIcon,
    EraseOutlineIcon,
    PlusOutlineIcon,
    SearchOutlineIcon,
    SettingsOutlineIcon,
} from '@/shared/assets/svg';
import {RangePicker} from '@/shared/ui/DatePicker';
import {Select} from '@/shared/ui/Select';

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
                    <Button uiType='secondary' className={styles.sq}>
                        <BookmarkOutlineIcon />
                    </Button>
                    <Button uiType='secondary' className={styles.sq}>
                        <EraseOutlineIcon />
                    </Button>
                    <Button uiType='secondary' className={styles.sq}>
                        <SearchOutlineIcon />
                    </Button>
                </div>
                <div className={styles.group}>
                    <Button id='onboarding-api-btn' type='primary'>
                        <div className={styles.btnIcon}>
                            <DownloadOutlineIcon />
                        </div>
                        <span>Загрузить по API</span>
                    </Button>
                    <Button id='onboarding-create-btn' type='primary'>
                        <div className={styles.btnIcon}>
                            <PlusOutlineIcon />
                        </div>
                        <span>Заявка на поставку</span>
                    </Button>
                    <Button className={styles.sq} uiType='outline'>
                        <SettingsOutlineIcon />
                    </Button>
                </div>
            </div>
            <div className={styles.inputs}>
                <RangePicker label='Дата' placeholder={['00.00.0000', '00.00.0000']} />
                <Select placeholder='Котрагент' options={data} />
                <Select placeholder='Организация' options={data} />
                <Select placeholder='Товар' options={data} />
                <Select placeholder='Склад отправителя' options={data} />
                <Select placeholder='№ поставки' options={data} />
                <Select placeholder='Способ доставки' options={data} />
                <Select placeholder='Статус операции' options={data} />
                <Select placeholder='Склад получателя' options={data} />
                <Select placeholder='Проведено' options={data} />
            </div>
            <div className={styles.downButtons}>
                <Button shape='round' uiType='secondary'>
                    Фильтр первый
                </Button>
                <Button shape='round'>Фильтр первый</Button>
            </div>
        </section>
    );
});
