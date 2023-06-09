import {useState} from 'react'

function AddUsers({updateUser}){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = () => {
        const user = {
            firstName: firstName,
            lastName: lastName
        }
        updateUser(user)
    }

    return <div>
        <input type="text" placeholder="enter first name" onChange={(e) => setFirstName(e.target.value)} value={firstName} name="firstName" />
        <input type="text" placeholder="enter last name" onChange={(e) => setLastName(e.target.value)} value={lastName} name="lastName" />
        <button onClick={handleSubmit}> submit </button>
    </div>
}

export default AddUsers;