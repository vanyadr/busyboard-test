import {useCallback, useEffect} from 'react';
import Joyride, {EVENTS, STATUS, type CallBackProps} from 'react-joyride';
import {observer} from 'mobx-react-lite';
import {onboardingStore} from '../lib/onboarding.store';
import {OnboardingTooltip} from '../components/OnboardingTooltip/OnboardingTooltip';
import {onboardingSteps} from '../lib/steps';

export const Onboarding = observer(() => {
    const {stepIndex} = onboardingStore;

    useEffect(() => {
        onboardingStore.startTour();
    }, []);

    const handleCallback = useCallback(({status, type, action}: CallBackProps) => {
        if (status === STATUS.FINISHED || status === STATUS.SKIPPED || action === 'close') {
            onboardingStore.closeTour();
            return;
        }

        if (type === EVENTS.STEP_AFTER) {
            if (action === 'next') {
                onboardingStore.nextStep(onboardingSteps.length);
            } else if (action === 'prev') {
                onboardingStore.prevStep(onboardingSteps.length);
            }
        }
    }, []);

    return (
        <Joyride
            run={onboardingStore.run}
            stepIndex={onboardingStore.stepIndex}
            steps={onboardingSteps}
            continuous
            showSkipButton={false}
            showProgress={false}
            disableOverlayClose
            disableScrolling
            callback={handleCallback}
            tooltipComponent={(props) => (
                <OnboardingTooltip
                    {...props}
                    onCloseTour={() => onboardingStore.closeTour()}
                    stepIndex={stepIndex}
                    totalSteps={onboardingSteps.length}
                />
            )}
            styles={{
                options: {
                    zIndex: 1000,
                },
            }}
        />
    );
});
