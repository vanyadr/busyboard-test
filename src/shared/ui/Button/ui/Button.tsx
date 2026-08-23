import styles from './Button.module.scss';
import {type ButtonProps, Button as AntdButton} from 'antd';
import cn from 'classnames';

interface IButtonProps extends ButtonProps {
    className?: string;
    uiType?: 'primary' | 'secondary' | 'outline';
}

const Button = ({className, children, uiType = 'primary', ...props}: IButtonProps) => {
    return (
        <AntdButton className={cn(className, styles.button, styles[uiType])} {...props}>
            {children}
        </AntdButton>
    );
};

export {Button};
