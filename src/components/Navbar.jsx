import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logOut, reset } from "../features/authSlice"
import Sidebar from "./Sidebar"
import "../styles/main.css"

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const [isActive, setActive] = useState(false)

  const logout = () => {
    dispatch(logOut())
    dispatch(reset())
    navigate("/")
  }
  return (
    <nav
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <NavLink to="/dashboard" className="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Logo"
            width="112"
            height="28"
          />
        </NavLink>

        <a
          onClick={() => {
            setActive(!isActive)
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="lg-hidden">
              <Sidebar />
            </div>
            <div className="buttons">
              <button onClick={logout} className="button is-light">
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
