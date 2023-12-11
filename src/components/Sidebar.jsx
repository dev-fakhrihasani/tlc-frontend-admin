import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoPerson, IoPricetag, IoHome, IoLogOut, IoNewspaper, IoPeople, IoList, IoThumbsUp, IoHappy, IoSpeedometer } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, reset } from '../features/authSlice'

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const logout = () => {
    dispatch(logOut())
    dispatch(reset())
    navigate('/')
  }

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label"> General </p>
        <ul className="menu-list">
          <li><NavLink to={'/dashboard'}><IoHome /> Dashboard</NavLink></li>
          <li style={{ pointerEvents: 'none' }} ><NavLink onClick={e => e.preventDefault()} to={"/products"}><IoPricetag /> Products</NavLink></li>
          <li><NavLink to={"/blogs"}><IoNewspaper /> Blog </NavLink></li>
          <li><NavLink to={"/counters"}><IoSpeedometer /> Counters </NavLink></li>
          <li><NavLink to={"/partners"}><IoPeople /> Partners </NavLink></li>
          <li><NavLink to={"/programs"}><IoList /> Programs </NavLink></li>
          <li><NavLink to={"/testimonies"}><IoThumbsUp /> Testiomnies </NavLink></li>
          <li><NavLink to={"/volunteers"}><IoHappy /> Volunteers </NavLink></li>
        </ul>
        <p className="menu-label">
          Admin
        </p>
        <ul className="menu-list">
          <li><NavLink to={"/users"}><IoPerson /> Users</NavLink></li>
        </ul>
        <p className="menu-label">
          Settings
        </p>
        <ul className="menu-list">
          <li><button onClick={logout} className='button is-white'><IoLogOut /> Logout</button></li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar
