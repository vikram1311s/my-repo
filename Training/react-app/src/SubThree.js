import {useContext} from 'react';
import CounterContext from './CounterContext';

function SubThree(){

    const myCounter = useContext(CounterContext)
    return <div style={{border: '1px solid blue'}}>Sub three
    <p>sub three counter {myCounter}</p>
    </div>
}

export default SubThree;