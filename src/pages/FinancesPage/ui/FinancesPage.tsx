// import styles from './FinancesPage.module.scss';
import {Onboarding} from '@/features/Onboarding/ui/Onboarding';
import {SupplyFilterableTable} from '@/widgets/SupplyFilterableTable/ui/SupplyFilterableTable';

const FinancesPage = () => {
    return (
        <>
            <div id='onboarding-center-target' style={{position: 'absolute', width: 1, height: 1, opacity: 0}} />
            <SupplyFilterableTable />
            <Onboarding />
        </>
    );
};

export default FinancesPage;
