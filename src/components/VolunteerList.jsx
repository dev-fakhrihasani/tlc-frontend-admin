import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([])

  useEffect(() => {
    getVolunteers()
  }, [])

  const getVolunteers = async () => {
    const response = await axios.get('http://localhost:5000/volunteers')
    setVolunteers(response.data)
  }

  return (
    <div>
      <h1 className='title'>Volunteers</h1>
      <h2 className='subtitle'>List of Volunteers</h2>
      <Link to="/volunteers/add" className="button is-primary mb-2">Add New</Link >
      <table className='table is-striped is-fullwidth'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Division</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer, index) => (
            <tr key={volunteers.id}>
              <td> {index + 1} </td>
              <td> {volunteer.name} </td>
              <td> {volunteer.division}  </td>
              <td>
                <figure className='image is-128x128'>
                  <img src={volunteer.url} alt="admin-img" />
                </figure>
              </td>
              <td>
                <Link className='button is-small is-info'>Edit</Link>
                <button className='button is-small is-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VolunteerList
