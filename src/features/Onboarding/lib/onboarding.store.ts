import {makeAutoObservable} from 'mobx';

class OnboardingStore {
    run = false;
    stepIndex = 0;

    constructor() {
        makeAutoObservable(this);
    }

    nextStep(total: number) {
        this.stepIndex = (this.stepIndex + 1) % total;
    }
    prevStep(total: number) {
        if (this.stepIndex === 0) {
            this.stepIndex = total - 1;
        } else {
            this.stepIndex = (this.stepIndex - 1) % total;
        }
    }
    startTour() {
        this.stepIndex = 0;
        this.run = true;
    }
    closeTour() {
        this.run = false;
    }
}

export const onboardingStore = new OnboardingStore();
