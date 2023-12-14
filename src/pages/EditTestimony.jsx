import React, { useEffect } from 'react'
import Layout from './Layout'
import FormEditTestimony from '../components/FormEditTestimony'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const EditTestimony = () => {
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
        <FormEditTestimony />
      </Layout>
    </div>
  )
}

export default EditTestimony
