import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const FormEditCounter = () => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [msg, setMsg] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const getCounterById = async () => {
      try {
        const response = await axios.get(`https://api.tegallearningcenter.id/counters/${id}`)
        setName(response.data.name)
        setAmount(response.data.amount)
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg)
        }
      }
    }
    getCounterById()
  }, [id])

  const navigate = useNavigate()

  const updateProduct = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(`https://api.tegallearningcenter.id/counters/${id}`, {
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
      <div className="card is-shadowless">
        <div className="card-content">
          <h1 className='title'>Edit Count</h1>
          <div className="content">
            <form onSubmit={updateProduct} >
              <p className='has-text-centered'> {msg} </p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                    required
                  />
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
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type='submit' className="button is-success">Update</button>
                  <Link to="/counters" className="button is-danger ml-2">Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormEditCounter
