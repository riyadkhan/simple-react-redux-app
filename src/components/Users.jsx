import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store'


class Users extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }
    render() {
        const { users } = this.props.userData
        return (
            <div>
                {users && 
                    <table className='table table-bordered table-striped table-hover'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Creation Time</th>
                        </tr>
                        {users.map(user => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.isActive ? <span className="badge badge-success">Active</span> : <span className="badge badge-danger">Inactive</span>}</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        })}
                    </table>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)