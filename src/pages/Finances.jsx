import React, { useEffect } from 'react'
import Layout from './Layout'
import FinanceList from '../components/FinanceList'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const Finances = () => {
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
        <FinanceList />
      </Layout>
    </div>
  )
}

export default Finances
