const redux = require('redux')
const axios = require('axios').default
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

// types
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

// actions
const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}
const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data.map(user => user.name)
            dispatch(fetchUserSuccess(users))
        })
        .catch(err => {
            dispatch(fetchUserFailure(err.message))
        })
    }
}

// initial state
const initialState = {
    loading: false,
    user: [],
    error: ''
}

// reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                user: [],
                error: action.payload
            }
        default:
            return state
    }
}

// store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => console.log('initial state', store.getState()))

store.dispatch(fetchUsers())

// steps
// 1. types
// 2. action
// 3. reducers
// 4. store
