import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const FinanceList = () => {
  const [finances, setFinances] = useState([])

  useEffect(() => {
    getFinances()
  })

  const getFinances = async () => {
    const response = await axios.get('http://localhost:5000/finances')
    setFinances(response.data)
  }

  const deleteFinance = async (id) => {
    await axios.delete(`http://localhost:5000/finances/${id}`)
    getFinances()
  }

  return (
    <div>
      <h1 className='title'>Counters</h1>
      <h2 className='subtitle'>List of Counters</h2>
      <Link to="/counters/add" className="button is-primary mb-2">Add New</Link >
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
          {finances.map((finance, index) => (
            <tr key={finance.id}>
              <td>{index + 1}</td>
              <td>{finance.income}</td>
              <td>{finance.outcome}</td>
              <td>
                <Link to={`/finances/edit/${finance.id}`} className='button is-small is-info'>Edit</Link>
                <button onClick={() => deleteFinance(finance.id)} className='button is-small is-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FinanceList
