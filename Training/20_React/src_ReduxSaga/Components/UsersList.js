import { useSelector, useDispatch } from "react-redux";



function UsersList(){

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const deleteUser = (userFirstName) => {
        const deleteAction = {
            type: 'DELETE_USER',
            payload: userFirstName
        }
       dispatch(deleteAction)
    }

    return <div>
        <h2>Users List</h2>
        {
           users &&  users.map(u => {
                return <div> <b>first name:</b> <span>{u.firstName} </span>  <b>type:</b>  <span>{u.type} 
                <button onClick={() => deleteUser(u.firstName)}>delete</button></span>
             
                 </div>
            })
        }
    </div>
}

export default UsersList;