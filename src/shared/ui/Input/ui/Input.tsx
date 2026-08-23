import styles from './Input.module.scss';
import {Input as AntdInput} from 'antd';
import type {InputProps} from 'antd/es/input';
import cn from 'classnames';

const Input = ({className, placeholder, ...props}: InputProps) => {
    return (
        <div className={cn(styles.input, className)}>
            {placeholder && <label>{placeholder}</label>}
            <AntdInput placeholder={placeholder} {...props} />
        </div>
    );
};

export {Input};
