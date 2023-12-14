import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const ProgramList = () => {
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    getPrograms()
  }, [])

  const getPrograms = async () => {
    const response = await axios.get('http://localhost:5000/programs')
    setPrograms(response.data)
  }

  const deleteProgram = async (id) => {
    await axios.delete(`http://localhost:5000/programs/${id}`)
    getPrograms()
  }

  return (
    <div>
      <h1 className='title'>Programs</h1>
      <h2 className='subtitle'>List of Programs</h2>
      <Link to="/programs/add" className="button is-primary mb-2">Add New</Link >
      <div className="table-container">
        <table className='table is-striped is-fullwidth'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program, index) => (
              <tr key={program.id} >
                <td> {index + 1} </td>
                <td> {program.name} </td>
                <td>
                  <Link to={`/programs/edit/${program.id}`} className='button is-small is-info mb-1'>Edit</Link>
                  <button onClick={() => deleteProgram(program.id)} className='button is-small is-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProgramList
