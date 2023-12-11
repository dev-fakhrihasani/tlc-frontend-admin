import React from 'react'
import { useSelector } from 'react-redux'

const Welcome = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <div>
      <h1 className='title'>Dashboard</h1>
      <h2 className='subtitle'>Welcome Back <strong>{user && user.name}</strong> </h2>
      <figure className='image is-128x128'>
        <img src={user && user.url} alt="admin-img" />
      </figure>
    </div>
  )
}

export default Welcome
