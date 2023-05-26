import './App.css';
import {useState} from 'react';
import CounterContext from './CounterContext';
import Three from './Three';

function App() {
  const [counter, setCounter]  = useState(20);

  return (
    <CounterContext.Provider value={counter} store>
      <div className="App">

          Counter {counter}
          <button onClick={()=> setCounter(counter+1)}>+</button>
          <Three counter={counter} />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
