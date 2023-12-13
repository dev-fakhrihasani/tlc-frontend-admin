import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const FormEditVolunteer = () => {
  const [name, setName] = useState('')
  const [division, setDivision] = useState('')
  const [file, setFile] = useState('')
  const [preview, setPreview] = useState('')

  const [msg, setMsg] = useState('')
  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/volunteers/${id}`)
        setName(response.data.name)
        setDivision(response.data.division)
        setFile(response.data.image)
        setPreview(response.data.url)
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg)
        }
      }
    }
    getUserById()
  }, [id])

  const updateVolunteer = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(`http://localhost:5000/volunteers/${id}`, {
        name,
        division,
        file

      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      navigate('/volunteers')
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }

  const loadImage = (e) => {
    const image = e.target.files[0]
    setFile(image)
    setPreview(URL.createObjectURL(image))
  }

  return (
    <div>
      <div className="card is-shadowless">
        <div className="card-content">
          <h1 className='title'>Edit Volunteer</h1>
          <div className="content">
            <form onSubmit={updateVolunteer} >
              <p className='has-text-centered'>{msg}</p>

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
                <label className="label">Division</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder='Division'
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Image</label>
                <div className="control">
                  <div className="file">
                    <label className="file-label">
                      <input type="file" className='file-input' onChange={loadImage} required />
                      <span className='file-cta'>
                        <span className="file-label">Choose a file....</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {preview ? (
                <figure className="image is-128x128">
                  <img src={preview} alt="preview-img" />
                </figure>
              ) : ("")}


              <div className="field mt-6">
                <div className="control">
                  <button type='submit' className="button is-success">Update</button>
                  <Link to="/volunteers" className="button is-danger ml-2">Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormEditVolunteer
