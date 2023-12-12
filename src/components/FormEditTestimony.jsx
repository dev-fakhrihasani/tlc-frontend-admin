import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const FormEditTestimony = () => {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [desc, setDesc] = useState('')

  const [file, setFile] = useState('')
  const [preview, setPreview] = useState('')

  const [msg, setMsg] = useState('')

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/testimonies/${id}`)
        setName(response.data.name)
        setPosition(response.data.position)
        setDesc(response.data.desc)
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

  const updateTestimony = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(`http://localhost:5000/testimonies/${id}`, {
        name,
        position,
        desc,
        file

      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      navigate('/testimonies')
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
          <h1 className='title'>Edit Testimony</h1>
          <div className="content">
            <form onSubmit={updateTestimony} >
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
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Position</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder='Position'
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder='Description'
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Image</label>
                <div className="control">
                  <div className="file">
                    <label className="file-label">
                      <input type="file" className='file-input' onChange={loadImage} />
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
                  <button type='submit' className="button is-success">Save</button>
                  <Link to={'/testimonies'} className="button is-danger ml-2">Cancel</Link>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormEditTestimony
