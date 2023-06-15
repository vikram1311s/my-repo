import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddUsers() {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');

    const handleSubmit = () => {
        const user = {
            firstName: firstName,
            type: 'regular'
        }
        // updateUser(user)
        const createUserAction = {
            type: 'CREATE_USER',
            payload: user
        }
        dispatch(createUserAction) 
    }

    return <div>
        <h1> Add User</h1>
        <input type="text" placeholder="enter first name" onChange={(e) => setFirstName(e.target.value)} value={firstName} name="firstName" />

        <button onClick={handleSubmit}> submit </button>
    </div>
}

export default AddUsers;