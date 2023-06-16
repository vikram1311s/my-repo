import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddProfile() {

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');

    const handleSubmit = () => {
        const user = {
            firstName: firstName,
            type: 'profile'
        }
        const createProfileAction = {
            type: 'CREATE_USER',
            payload: user
        }
        dispatch(createProfileAction) 
    }

    return <div>
        <h1> Add Profile</h1>
        <input type="text" placeholder="enter first name" 
        onChange={(e) => setFirstName(e.target.value)} value={firstName} name="firstName" />
        <button onClick={handleSubmit}> submit </button>
    </div>
}

export default AddProfile;