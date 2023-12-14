import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'

const FormEditPartner = () => {
  const [name, setName] = useState('')
  const [file, setFile] = useState('')
  const [preview, setPreview] = useState('')

  const [msg, setMsg] = useState('')

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const getPartnerById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/partners/${id}`)
        setName(response.data.name)
        setFile(response.data.image)
        setPreview(response.data.url)
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg)
        }
      }
    }
    getPartnerById()
  }, [id])

  const updatePartner = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(`http://localhost:5000/partners/${id}`, {
        name,
        file

      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      navigate('/partners')
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
          <h1 className='title'>Edit Partner</h1>
          <div className="content">

            <form onSubmit={updatePartner} >
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
                  <button type='submit' className="button is-success">Update</button>
                  <Link to="/partners" className="button is-danger ml-2">Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormEditPartner
