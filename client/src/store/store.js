import {observable, action, computed} from 'mobx';

class DataStore{
    @observable user = {name: '', admin: false}
}   

const store = new DataStore();
export default store;