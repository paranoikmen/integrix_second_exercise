
const AUTH_SUCCESS = "AUTH_SUCCESS"

export const authReducer = (state = null, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state, login: action["action"]["login"], password: action["action"]["password"]};
        default:
            return state
    }
}

export const authSuccess = (action) => ({type: AUTH_SUCCESS, action})

