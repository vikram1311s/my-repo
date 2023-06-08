import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Display(){

    const count = useSelector((state) => state.count);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(count > 10){
            setError(true)
        } else {
            setError(false)
        }
    }, [count])
 
    return (
        <div>Display count  
            <h1 >{count}</h1>
            { error && <div> its greater than 10</div>}
            </div>
    )
}

export default Display;