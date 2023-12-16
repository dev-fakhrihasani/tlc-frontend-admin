import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const PartnerList = () => {
  const [partners, setPartners] = useState([])

  useEffect(() => {
    getPartner()
  }, [])

  const getPartner = async () => {
    const response = await axios.get('https://api.tegallearningcenter.id/partners')
    setPartners(response.data)
  }

  const deletePartner = async (id) => {
    await axios.delete(`https://api.tegallearningcenter.id/partners/${id}`)
    getPartner()
  }


  return (
    <div>
      <h1 className='title'>Partners</h1>
      <h2 className='subtitle'>List of Partners</h2>
      <Link to="/partners/add" className="button is-primary mb-2">Add New</Link >
      <div className="table-container">
        <table className='table is-striped is-fullwidth'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner, index) => (
              <tr key={partner.id}>
                <td> {index + 1} </td>
                <td> {partner.name} </td>
                <td>
                  <figure className='image is-96x96'>
                    <img src={partner.url} alt="img-admin" />
                  </figure>
                </td>
                <td>
                  <Link to={`/partners/edit/${partner.id}`} className='button is-small is-info mb-1'>Edit</Link>
                  <button onClick={() => deletePartner(partner.id)} className='button is-small is-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PartnerList
