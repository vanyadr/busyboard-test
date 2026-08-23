import styles from './RangePicker.module.scss';
import {ConfigProvider, DatePicker as AntdInput} from 'antd';
import type {RangePickerProps} from 'antd/es/date-picker';
import cn from 'classnames';
import locale from 'antd/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');
const {RangePicker: AntdRangePicker} = AntdInput;

interface IDatePickerProps extends RangePickerProps {
    label?: string;
}

const RangePicker = ({className, placeholder, label, ...props}: IDatePickerProps) => {
    return (
        <div className={cn(styles.input, className)}>
            {label && <label>{label}</label>}
            <ConfigProvider locale={locale}>
                <AntdRangePicker separator={<span>-</span>} placeholder={placeholder} format='DD.MM.YYYY' {...props} />
            </ConfigProvider>
        </div>
    );
};

export {RangePicker};
