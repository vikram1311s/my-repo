import './App.css';
import  Counter from './Counter';
import  Display from './Display';
import { createStore } from  'redux';
import { Provider } from 'react-redux';

const initialState = {
  count: 5
}

const counterReducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        ...state,
        count: state.count+1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count-1
      }
    default:
      return state
  }

}
const store = createStore(counterReducer);


function App() {
  return (
    <Provider store={store}>
       <Counter />
       <Display />
    </Provider>
  )
}

export default App;


