import {makeAutoObservable} from 'mobx';
import {IUser} from '../model/user.types';

class UserStore {
    user: IUser = {
        name: 'ГК ТУЗЕМУН',
        color: '#1AB889',
    };

    constructor() {
        makeAutoObservable(this);
    }
}

export const userStore = new UserStore();
