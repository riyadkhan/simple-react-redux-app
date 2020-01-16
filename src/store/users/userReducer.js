import { FETCH_USER_COMPLETED, FETCH_USER_FAILED, SHOW_SINGLE_USER, FETCH_USER_REQUEST } from './userTypes'

const initialState = {
    loading: false,
    users: [],
    singleUser: {},
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_COMPLETED:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
                users: []
            }
        case SHOW_SINGLE_USER:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: ''
            }
        default: return state
    }
}

export default userReducer