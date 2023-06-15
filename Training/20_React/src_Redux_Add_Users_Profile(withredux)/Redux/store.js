import { createStore } from 'redux';
import UserReducer from './Reducers/user-reducer';






const myAppStore = createStore(UserReducer);

export default myAppStore;