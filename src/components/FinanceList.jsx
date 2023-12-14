import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format'

const FinanceList = () => {
  const [finances, setFinances] = useState([])

  useEffect(() => {
    getFinances()
  }, [])

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
      <h1 className='title'>Finances</h1>
      <h2 className='subtitle'>List of Finances</h2>
      <Link to="/finances/add" className="button is-primary mb-2">Add New</Link >
      <table className='table is-striped is-fullwidth'>
        <thead>
          <tr>
            <th>No</th>
            <th>Month</th>
            <th>Income</th>
            <th>Outcome</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {finances.map((finance, index) => (
            <tr key={finance.id}>
              <td>{index + 1}</td>
              <td>{finance.month}</td>
              <td><NumericFormat value={finance.income} displayType={'text'} thousandSeparator="." decimalSeparator="," prefix={'Rp '} /></td>
              <td><NumericFormat value={finance.outcome} displayType={'text'} thousandSeparator="." decimalSeparator="," prefix={'Rp '} /></td>
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
