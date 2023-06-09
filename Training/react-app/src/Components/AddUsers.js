import {useState} from 'react'

function AddUsers({updateUser}){

    const [firstName, setFirstName] = useState('');

    const handleSubmit = () => {
        const user = {
            firstName: firstName
        }
        updateUser(user)
    }

    return <div>
        <input type="text" placeholder="enter first name" onChange={(e) => setFirstName(e.target.value)} value={firstName} name="firstName" />
        
        <button onClick={handleSubmit}> submit </button>
    </div>
}

export default AddUsers;