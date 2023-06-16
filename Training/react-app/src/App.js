import { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import myAppStore from './Redux/store';
import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch();

  const getData = () => {
    dispatch({type: 'GET_DATA'})
  }

  return (
    <>

      {/* create store and provide in root level */}
      <Provider store={myAppStore}>
          <button onClick={getData}>get data</button>
      </Provider>
    </>

  )
}

export default App;


