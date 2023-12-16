import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const TestimonyList = () => {
  const [testimonies, setTestimonies] = useState([])

  useEffect(() => {
    getTestimony()
  }, [])

  const getTestimony = async () => {
    const response = await axios.get('https://api.tegallearningcenter.id/testimonies')
    setTestimonies(response.data)
  }

  const deletePartner = async (id) => {
    await axios.delete(`https://api.tegallearningcenter.id/testimonies/${id}`)
    getTestimony()
  }

  return (
    <div>
      <h1 className='title'>Testimony</h1>
      <h2 className='subtitle'>List of Testimony</h2>
      <Link to="/testimonies/add" className="button is-primary mb-2">Add New</Link >
      <div className="table-container">
        <table className='table is-striped is-fullwidth'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Position</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonies.map((testimony, index) => (
              <tr key={testimony.id} >
                <td>{index + 1}</td>
                <td>{testimony.name}</td>
                <td>{testimony.position}</td>
                <td>{testimony.desc}</td>
                <td>
                  <figure className='image is-128x128'>
                    <img src={testimony.url} alt={testimony.name} />
                  </figure>
                </td>
                <td>
                  <Link to={`/testimonies/edit/${testimony.id}`} className='button is-small is-info mb-1'>Edit</Link>
                  <button onClick={() => deletePartner(testimony.id)} className='button is-small is-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TestimonyList
