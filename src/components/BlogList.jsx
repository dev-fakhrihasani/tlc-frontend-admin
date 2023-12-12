import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  return (
    <div>
      <h1 className='title'>Blogs</h1>
      <h2 className='subtitle'>List of Blogs</h2>
      <Link to="/blogs/add" className="button is-primary mb-2">Add New</Link >
      <table className='table is-striped is-fullwidth'>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Desc</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Link className='button is-small is-info'>Edit</Link>
              <button className='button is-small is-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default BlogList