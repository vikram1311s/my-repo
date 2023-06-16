
const initialState = {
    users: [{
        firstName: 'Suresh',
        type: 'normal'
    }]
}



function UserReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_DATA':
        default:
            return state
    }

}

export default UserReducer;