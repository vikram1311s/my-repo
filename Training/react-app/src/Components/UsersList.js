import { useSelector } from "react-redux";


function UsersList(){

    const users = useSelector(state => state.users);

    return <div>
        <h2>Users List</h2>
        {
           users &&  users.map(u => {
                return <div> <b>first name:</b> <span>{u.firstName} </span>  <b>type:</b>  <span>{u.type} </span>
             
                 </div>
            })
        }
    </div>
}

export default UsersList;