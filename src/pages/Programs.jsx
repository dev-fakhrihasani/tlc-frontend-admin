import React, { useEffect } from 'react'
import Layout from './Layout'
import ProgramList from '../components/ProgramList'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const Programs = () => {
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
        <ProgramList />
      </Layout>
    </div>
  )
}

export default Programs
