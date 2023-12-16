import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([])

  useEffect(() => {
    getVolunteers()
  }, [])

  const getVolunteers = async () => {
    const response = await axios.get('https://api.tegallearningcenter.id/volunteers')
    setVolunteers(response.data)
  }

  const deleteVolunteer = async (id) => {
    await axios.delete(`https://api.tegallearningcenter.id/volunteers/${id}`)
    getVolunteers()
  }

  return (
    <div>
      <h1 className='title'>Volunteers</h1>
      <h2 className='subtitle'>List of Volunteers</h2>
      <Link to="/volunteers/add" className="button is-primary mb-2">Add New</Link >
      <div className="table-container">
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
              <tr key={volunteer.id}>
                <td> {index + 1} </td>
                <td> {volunteer.name} </td>
                <td> {volunteer.division}  </td>
                <td>
                  <figure className='image is-128x128'>
                    <img src={volunteer.url} alt="admin-img" />
                  </figure>
                </td>
                <td>
                  <Link to={`/volunteers/edit/${volunteer.id}`} className='button is-small is-info mb-1'>Edit</Link>
                  <button onClick={() => deleteVolunteer(volunteer.id)} className='button is-small is-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default VolunteerList
