import { useEffect } from 'react';

function FunctionComponent({countValue}){

    useEffect(() => {
     console.log(' function component like component did mount')
    },[])


    useEffect(() => {
     console.log('useEffect countValue updated', countValue)
    },[countValue])

    return <div> function co unt {countValue} </div>
}

export default FunctionComponent;