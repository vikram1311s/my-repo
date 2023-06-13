import { createStore, combineReducers } from 'redux';
import UserReducer from './Reducers/user-reducer';



const allReducers = combineReducers({
    UserReducer: UserReducer
})


const myAppStore = createStore(UserReducer);

export default myAppStore;