import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'
import CurrencyInput from 'react-currency-input-field';

const FormEditFinance = () => {
  const [month, setMonth] = useState('')
  const [income, setIncome] = useState('')
  const [outcome, setOutcome] = useState('')

  const [msg, setMsg] = useState('')

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    const getFinanceById = async () => {
      try {
        const response = await axios.get(`https://api.tegallearningcenter.id/finances/${id}`)
        setMonth(response.data.month)
        setIncome(response.data.income)
        setOutcome(response.data.outcome)
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg)
        }
      }
    }
    getFinanceById()
  }, [id])

  const updateFinance = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(`https://api.tegallearningcenter.id/finances/${id}`, {
        month,
        income,
        outcome
      })
      navigate('/finances')
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }

  return (
    <div>
      <div className="card is-shadowless">
        <div className="card-content">
          <h1 className='title'>Edit Finance</h1>
          <div className="content">
            <form onSubmit={updateFinance} >
              <p className='has-text-centered'> {msg} </p>
              <div className="field">
                <label className="label">Month</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    placeholder='Month'
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    autoFocus
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Income</label>
                <div className="control">
                  {/* <input
                    type="number"
                    className="input"
                    placeholder='Income'
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    required
                  /> */}

                  <CurrencyInput
                    className="input"
                    placeholder="Income"
                    decimalsLimit={2}
                    value={income}
                    onValueChange={(value) => setIncome(value)}
                    decimalSeparator=","
                    groupSeparator='.'
                    prefix='Rp'
                  />

                </div>
              </div>
              <div className="field">
                <label className="label">Outcome</label>
                <div className="control">
                  {/* <input
                    type="number"
                    className="input"
                    placeholder='Outcome'
                    value={outcome}
                    onChange={(e) => setOutcome(e.target.value)}
                    required
                  /> */}
                  <CurrencyInput
                    className="input"
                    placeholder="Outcome"
                    decimalsLimit={2}
                    value={outcome}
                    onValueChange={(value) => setOutcome(value)}
                    decimalSeparator=","
                    groupSeparator='.'
                    prefix='Rp'
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type='submit' className="button is-success">Save</button>
                  <Link to="/finances" className="button is-danger ml-2">Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormEditFinance
