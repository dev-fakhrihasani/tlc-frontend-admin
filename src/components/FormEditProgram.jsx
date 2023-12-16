import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const FormEditProgram = () => {
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    const getCounterById = async () => {
      try {
        const response = await axios.get(`https://api.tegallearningcenter.id/programs/${id}`)
        setName(response.data.name)
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg)
        }
      }
    }
    getCounterById()
  }, [id])

  const updateProgram = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(`https://api.tegallearningcenter.id/programs/${id}`, {
        name
      })
      navigate('/programs')
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
          <h1 className='title'>Edit Program</h1>
          <div className="content">
            <form onSubmit={updateProgram} >
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
                    required />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type='submit' className="button is-success">Update</button>
                  <Link to='/programs' className="button is-danger ml-2">Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormEditProgram
