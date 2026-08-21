import type {Step} from 'react-joyride';

export const onboardingSteps: Step[] = [
    {
        target: '#onboarding-center-target',
        content:
            'Добро пожаловать в раздел заявки на поставку! Тут вы можете создать заявку на поставку и она появится в вашем кабинете или выгрузить уже созданные чтобы на основе них создать отгрузки',
        placement: 'center',
    },
    {
        target: '#onboarding-api-btn',
        content: 'Нажмите на эту кнопку чтобы подтянуть актуальные заявки на поставку',
    },
    {
        target: '#onboarding-create-btn',
        content: 'Нажмите на эту кнопку чтобы создать свою собственную заявку на поставку!',
    },
    {
        target: '#onboarding-table-target',
        content: 'Вы большой молодец! Поздравляем с освоением нового раздела, надеюсь он принесет вам много пользы!',
    },
];
