import React, { useEffect } from 'react'
import Layout from './Layout'
import VolunteerList from '../components/VolunteerList'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const Volunteers = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isError } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  useEffect(() => {
    if (isError) {
      navigate('/')
    }
  }, [isError, navigate])
  return (
    <div>
      <Layout>
        <VolunteerList />
      </Layout>
    </div>
  )
}

export default Volunteers
