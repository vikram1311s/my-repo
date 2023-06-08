import {useContext} from 'react';
import AppContext from './AppContext';
import SubFour from './SubFour';

function SubThree(){

    const {counter, name} = useContext(AppContext)
    return <div style={{border: '1px solid blue'}}>Sub three
    <p>sub three counter { counter }</p>
    <p>sub three name { name }</p>

    <SubFour />

    </div>
}

export default SubThree;