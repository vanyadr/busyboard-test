import type {TooltipRenderProps} from 'react-joyride';
import {memo, MouseEvent} from 'react';
import styles from './OnboardingTooltip.module.scss';
import {Button} from 'antd';
import {Button as UiButton} from '@/shared/ui/Button';
import {CloserIcon} from '@/shared/assets/svg';

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
                        <CloserIcon />
                    </Button>
                </div>
                <div className={styles.content}>{step.content}</div>
                <div className={styles.footer}>
                    <span className={styles.counter}>
                        Шаг {stepIndex + 1} из {totalSteps}
                    </span>
                    <div className={styles.buttons}>
                        <UiButton uiType='outline' {...backProps}>
                            Назад
                        </UiButton>
                        <UiButton {...primaryProps} type='primary'>
                            Далее
                        </UiButton>
                    </div>
                </div>
            </div>
        );
    },
);
