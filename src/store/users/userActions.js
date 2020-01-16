import { FETCH_USER_COMPLETED, FETCH_USER_FAILED, FETCH_USER_REQUEST, SHOW_SINGLE_USER} from './userTypes'

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())

        fetch('http://localhost:3000/api/user', {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2kiOiI1ZGQ2OTViN2M3MTY2YTUzMjg3ZWMyYmUiLCJyb2xlSWQiOjEsImlhdCI6MTU3OTE5MDM0NywiZXhwIjoxNTc5Mjc2NzQ3fQ.jipSELhhsmfuiYCJBVDPvL32M5eu2HWcPyPlwfvuPNU'}})
            .then(res => res.json())
            .then((users) => {
                dispatch(fetchUserCompleted(users))
            })
            .catch((error) => {
                dispatch(fetchUserFailed(error.message))
            })
    }
}

export const fetchSingleUser = (id) => {
    return (dispatch) => {
        dispatch(fetchUserRequest())

        fetch('http://localhost:3000/api/user/5dd695b7c7166a53287ec2be', {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2kiOiI1ZGQ2OTViN2M3MTY2YTUzMjg3ZWMyYmUiLCJyb2xlSWQiOjEsImlhdCI6MTU3OTE5MDM0NywiZXhwIjoxNTc5Mjc2NzQ3fQ.jipSELhhsmfuiYCJBVDPvL32M5eu2HWcPyPlwfvuPNU'}})
            .then(res => res.json())
            .then((user) => {
                dispatch(fetchSingleUserCompleted(user))
            })
            .catch((error) => {
                dispatch(fetchUserFailed(error.message))
            })
        fetch('http://localhost:3000/api/user', {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2kiOiI1ZGQ2OTViN2M3MTY2YTUzMjg3ZWMyYmUiLCJyb2xlSWQiOjEsImlhdCI6MTU3OTE5MDM0NywiZXhwIjoxNTc5Mjc2NzQ3fQ.jipSELhhsmfuiYCJBVDPvL32M5eu2HWcPyPlwfvuPNU'}})
        .then(res => res.json())
        .then((users) => {
            dispatch(fetchUserCompleted(users))
        })
        .catch((error) => {
            dispatch(fetchUserFailed(error.message))
        })
    }
}

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserCompleted = users => {
    return {
        type: FETCH_USER_COMPLETED,
        payload: users
    }
}

export const fetchUserFailed = error => {
    return {
        type: FETCH_USER_FAILED,
        payload: error
    }
}

export const fetchSingleUserCompleted = user => {
    return {
        type: SHOW_SINGLE_USER,
        payload: user
    }
}