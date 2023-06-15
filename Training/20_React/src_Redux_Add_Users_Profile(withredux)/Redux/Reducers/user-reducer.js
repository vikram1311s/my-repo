
const initialState = {
    users: [{
        firstName: 'Suresh',
        type: 'normal'
    }]
}



function UserReducer(state = initialState, action) {
    console.log('state', state)

    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state
    }

}

export default UserReducer;