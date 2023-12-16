import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await axios.get('https://api.tegallearningcenter.id/users')
    setUsers(response.data)
  }

  const deleteUser = async (userId) => {
    await axios.delete(`https://api.tegallearningcenter.id/users/${userId}`)
    getUsers()
  }

  return (
    <div>
      <h1 className='title'>Users</h1>
      <h2 className='subtitle'>List of Users</h2>
      <Link to="/users/add" className="button is-primary mb-2">Add New</Link >
      <div className="table-container">
        <table className='table is-striped is-fullwidth'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Job</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.uuid}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.job}</td>
                <td>
                  <figure className='image is-96x96'>
                    <img src={user.url} alt="img-admin" />
                  </figure>
                </td>
                <td>
                  <Link to={`/users/edit/${user.uuid}`} className='button is-small is-info'>Edit</Link>
                  {/* <button onClick={() => deleteUser(user.uuid)} className='button is-small is-danger'>Delete</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList
