import {observable, action, computed} from 'mobx';

class DataStore{
    @observable user = {userName: '', admin: false};

    @observable workRequest = {fullName: '', postCode: '', city:'', street: '', houseNum:'', tel: '', email: '', serviceCode: '', notes: '', pictureURL: '' };

    @observable articles = {};

    @observale pendingJos = {};
}   

const store = new DataStore();
export default store;