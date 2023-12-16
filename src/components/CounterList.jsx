import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const CounterList = () => {
  const [counters, setCounters] = useState([])

  useEffect(() => {
    getCounters()
  }, [])

  const getCounters = async () => {
    const response = await axios.get('https://api.tegallearningcenter.id/counters')
    setCounters(response.data)
  }

  const deleteCounter = async (id) => {
    await axios.delete(`https://api.tegallearningcenter.id/counters/${id}`)
    getCounters()
  }
  return (
    <div>
      <h1 className='title'>Counters</h1>
      <h2 className='subtitle'>List of Counters</h2>
      <Link to="/counters/add" className="button is-primary mb-2">Add New</Link >
      <div className="table-container">


        <table className='table is-striped is-fullwidth'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {counters.map((counter, index) => (
              <tr key={counter.id}>
                <td>{index + 1}</td>
                <td>{counter.name}</td>
                <td>{counter.amount}</td>
                <td>
                  <Link to={`/counters/edit/${counter.id}`} className='button is-small is-info mb-1'>Edit</Link>
                  <button onClick={() => deleteCounter(counter.id)} className='button is-small is-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CounterList
