import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormAddCounter = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [msg, setMsg] = useState('')

  const navigate = useNavigate()

  const saveProduct = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/counters', {
        name,
        amount
      })
      navigate('/counters')
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }

  return (
    <div>
      <h1 className='title'>Counters</h1>
      <h2 className='subtitle'>Add New Counter</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveProduct} >
              <p className='has-text-centered'> {msg} </p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <label className="label">Amount</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    placeholder='Amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type='submit' className="button is-success">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormAddCounter
