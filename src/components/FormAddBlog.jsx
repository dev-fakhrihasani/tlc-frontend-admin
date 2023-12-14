import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const FormAddBlog = () => {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [desc, setDesc] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')
  const [file, setFile] = useState('')
  const [preview, setPreview] = useState('')

  const [msg, setMsg] = useState('')

  const navigate = useNavigate()
  const saveBlog = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/blogs', {
        title,
        slug,
        desc,
        date,
        category,
        file

      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      navigate('/blogs')
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
          <h1 className='title'>Add New Blogs</h1>
          <div className="content">
            <form onSubmit={saveBlog} >
              <p className='has-text-centered'>{msg}</p>

              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Slug</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder='Name'
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  >
                  </textarea>
                </div>
              </div>

              <div className="field">
                <label className="label">Date</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Category</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder='Category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Image</label>
                <div className="control">
                  <div className="file">
                    <label className="file-label">
                      <input
                        type="file"
                        className='file-input'
                        onChange={loadImage}
                      />
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
                  <Link to="/blogs" className="button is-danger ml-2">Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormAddBlog
