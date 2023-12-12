import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const FormAddProgram = () => {
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')

  const navigate = useNavigate()

  const savePrograms = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/programs', {
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
          <h1 className='title'>Add New Programs</h1>
          <div className="content">
            <form onSubmit={savePrograms} >
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
                  <button type='submit' className="button is-success">Save</button>
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

export default FormAddProgram
