import './App.css';
import {useState} from 'react';
import AppContext from './AppContext';
import Three from './Three';

function App() {
  const [counter, setCounter]  = useState(20);
  const [name,setName] = useState('xyz')

  const fetchData = () => {
    fetch(url).then(data => [
      setData(data)
    ])
  }
  return (
    <AppContext.Provider value={{
      counter: counter,
      name: name
    }} >
      <div className="App">
          App Counter {counter}
          <button onClick={()=> fetchData()}>+</button>
          <Three  />
      </div>
    </AppContext.Provider>
  );
}

export default App;
