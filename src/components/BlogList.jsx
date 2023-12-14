import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'

const BlogList = () => {
  const [blogs, SetBlogs] = useState([])

  useEffect(() => {
    getBlogs()
  }, [])

  const getBlogs = async () => {
    const response = await axios.get('http://localhost:5000/blogs')
    SetBlogs(response.data)
  }

  const deleteBlog = async (id) => {
    await axios.delete(`http://localhost:5000/blogs/${id}`)
    getBlogs()
  }

  return (
    <div>
      <h1 className='title'>Blogs</h1>
      <h2 className='subtitle'>List of Blogs</h2>
      <Link to="/blogs/add" className="button is-primary mb-2">Add New</Link >
      <div className="table-container">
        <table className='table is-striped is-fullwidth'>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog.id}>
                <td>{index + 1}</td>
                <td>{blog.title}</td>
                <td>{blog.category}</td>
                <td>{format(new Date(blog.date), 'dd MMM yyyy')}</td>
                <td>
                  <figure className="image is-128x128">
                    <img src={blog.url} alt={blog.title} />
                  </figure>
                </td>
                <td>
                  <Link to={`/blogs/edit/${blog.id}`} className='button is-small is-info mb-1'>Edit</Link>
                  <button onClick={() => deleteBlog(blog.id)} className='button is-small is-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default BlogList
