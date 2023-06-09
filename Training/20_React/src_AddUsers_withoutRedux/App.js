import {useState} from 'react';
import './App.css';
import AddUsers from './Components/AddUsers';
import UsersList from './Components/UsersList'

function App() {

  const [users, setUsers] = useState([]);

  const updateUser = (user) => {
    let existingUsers = [...users];
    existingUsers.push(user);
    setUsers(existingUsers)
  }
  return (
    <div>
        <AddUsers updateUser={updateUser} />
        <UsersList users={users} />
    </div>
  )
}

export default App;


