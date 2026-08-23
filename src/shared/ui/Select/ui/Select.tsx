import styles from './Select.module.scss';
import {Select as AntdInput} from 'antd';
import type {SelectProps} from 'antd/es/select';
import cn from 'classnames';

const Select = ({className, placeholder, ...props}: SelectProps) => {
    return (
        <div className={cn(styles.input, className)}>
            {placeholder && <label>{placeholder}</label>}
            <AntdInput placeholder={placeholder} {...props} />
        </div>
    );
};

export {Select};
