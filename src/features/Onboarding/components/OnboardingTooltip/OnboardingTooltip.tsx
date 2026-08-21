import type {TooltipRenderProps} from 'react-joyride';
import {memo, MouseEvent} from 'react';
import styles from './OnboardingTooltip.module.scss';
import {Button} from 'antd';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

interface ITooltipProps extends TooltipRenderProps {
    onCloseTour: () => void;
    stepIndex: number;
    totalSteps: number;
}

export const OnboardingTooltip = memo(
    ({tooltipProps, closeProps, primaryProps, backProps, step, onCloseTour, stepIndex, totalSteps}: ITooltipProps) => {
        const handleClose = (event: MouseEvent<HTMLButtonElement>) => {
            closeProps?.onClick?.(event);
            onCloseTour();
        };

        return (
            <div {...tooltipProps} className={styles.modal}>
                <div className={styles.header}>
                    <h3>Пункт {stepIndex + 1}</h3>
                    <Button onClick={handleClose} type='text'>
                        <CloseOutlinedIcon />
                    </Button>
                </div>
                <div className={styles.content}>{step.content}</div>
                <div className={styles.footer}>
                    <span className={styles.counter}>
                        Шаг {stepIndex + 1} из {totalSteps}
                    </span>
                    <div className={styles.buttons}>
                        <Button {...backProps}>Назад</Button>
                        <Button {...primaryProps} type='primary'>
                            Далее
                        </Button>
                    </div>
                </div>
            </div>
        );
    },
);
