import React from "react"
import {
  IoHappy,
  IoHome,
  IoList,
  IoNewspaper,
  IoPeople,
  IoPerson,
  IoPricetag,
  IoSpeedometer,
  IoThumbsUp,
} from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { logOut, reset } from "../features/authSlice"

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const logout = () => {
    dispatch(logOut())
    dispatch(reset())
    navigate("/")
  }

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label"> General </p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li style={{ pointerEvents: "none" }}>
            <NavLink onClick={(e) => e.preventDefault()} to={"/products"}>
              <IoPricetag /> Products
            </NavLink>
          </li>
          <li>
            <NavLink to={"/blogs"}>
              <IoNewspaper /> Blog{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/counters"}>
              <IoSpeedometer /> Counters{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/partners"}>
              <IoPeople /> Partners{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/programs"}>
              <IoList /> Programs{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/testimonies"}>
              <IoThumbsUp /> Testiomnies{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/volunteers"}>
              <IoHappy /> Volunteers{" "}
            </NavLink>
          </li>
        </ul>
        <p className="menu-label">Admin</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/users"}>
              <IoPerson /> Users
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar
