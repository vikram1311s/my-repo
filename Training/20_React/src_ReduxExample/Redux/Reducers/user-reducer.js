
const initialState = {
    users: [{
        firstName: 'Suresh',
        type: 'normal'
    }]
}



function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case 'DELETE_USER':
            let updateUsers = [];
            setTimeout(() => {
                updateUsers = state.users.filter(user => user.firstName !== action.payload)
            }, 5000)
            
            return {
                ...state,
                users: [...updateUsers]
            }
        default:
            return state
    }

}

export default UserReducer;