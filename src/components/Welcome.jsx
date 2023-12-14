import React from 'react'
import { useSelector } from 'react-redux'

const Welcome = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <div>
      <div className="columns">
        <div className="column is-10-desktop is-10-tablet ">
          <h1 className='title'>Dashboard</h1>
          <h2 className='subtitle'>Welcome Back, <strong>{user && user.name}</strong> 😊 </h2>
        </div>
        <div className="column">
          <figure className='image is-128x128'>
            <img src={user && user.url} alt="admin-img" className='is-rounded' />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Welcome
