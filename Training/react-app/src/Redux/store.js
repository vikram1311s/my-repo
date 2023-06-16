import { createStore, applyMiddleware } from 'redux';
import UserReducer from './Reducers/user-reducer';
import sagaMware from './saga';






const myAppStore = createStore(UserReducer, applyMiddleware(sagaMware));

export default myAppStore;