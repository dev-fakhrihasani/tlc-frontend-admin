import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const TestimonyList = () => {
  return (
    <div>
      <h1 className='title'>Testimony</h1>
      <h2 className='subtitle'>List of Testimony</h2>
      <Link to="/testimonies/add" className="button is-primary mb-2">Add New</Link >
      <table className='table is-striped is-fullwidth'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Position</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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

export default TestimonyList
