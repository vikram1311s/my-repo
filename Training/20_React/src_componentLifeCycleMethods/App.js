import './App.css';
import {useState} from 'react'
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';


function App() {

  const [count, setCounter] = useState(0);
  const [load, setLoad] = useState(true);

  const handleLoad = () => {
    if(load){
      setLoad(false)
    }else {
      setLoad(true)
    }
  }

  return (
    <div className="App">
      <button onClick={() => handleLoad()}>load</button>
       { load && <ClassComponent  countValue={count}/> } 
        <FunctionComponent   countValue={count} />
    </div>
  );
}

export default App;
