import React, { useState, useEffect } from 'react'
import { fetchSingleUser } from '../store'
import { connect } from 'react-redux'

function SingleUser(props) {
    const [userId, setUserId] = useState(1)
    const [isMounted, setIsMounted] = useState(true)
    useEffect(() => {
        isMounted && props.fetchUser(userId)
        setIsMounted(false)
        
    }, [isMounted, props, userId])
    const onChangeHandle = (e) => {
        setUserId(e.target.value) 
        setIsMounted(true)
    }
    return (
        <div className="row">
            <div className="col-md-4">
                <input type="number" max="10" min="1" className="form-control" value={userId} onChange={e => onChangeHandle(e)} />
            </div>
            <div className="col-md-8">
                {props.user && <table className="table">
                    <tr>
                        <th>ID</th>
                        <td>{props.user.id}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{props.user.username} <span className="badge">{props.user.isActive}</span></td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{props.user.email}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{new Date(props.user.createdAt).toString('dddd, mmmm dS, yyyy, h:MM:ss TT')}</td>
                    </tr>
                    <tr>
                        <th>Website</th>
                        <td>{new Date(props.user.updatedAt).toString('dddd, mmmm dS, yyyy, h:MM:ss TT')}</td>
                    </tr>
                </table>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchSingleUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser)


