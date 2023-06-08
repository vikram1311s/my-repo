import {useContext} from 'react'
import SubThreeLevelContext from './SubThreeLevelContext';

function SubFour(){
    const country = useContext(SubThreeLevelContext)
    return <div> sub four country context value {country} </div>
}

export default SubFour;