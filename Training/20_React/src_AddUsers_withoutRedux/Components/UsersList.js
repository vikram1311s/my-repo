function UsersList({users}){
    return <div>
        <h2>Users List</h2>
        {
            users.map(u => {
                return <div> first name: <span>{u.firstName} </span>
                last name: <span>{u.lastName} </span>
                 </div>
            })
        }
    </div>
}

export default UsersList;