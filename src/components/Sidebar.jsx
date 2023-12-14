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
import { AiFillDollarCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom"

const Sidebar = () => {
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
              <IoNewspaper /> Blog
            </NavLink>
          </li>
          <li>
            <NavLink to={"/counters"}>
              <IoSpeedometer /> Counters
            </NavLink>
          </li>
          <li>
            <NavLink to={"/finances"}>
              <AiFillDollarCircle /> Finances
            </NavLink>
          </li>
          <li>
            <NavLink to={"/partners"}>
              <IoPeople /> Partners
            </NavLink>
          </li>
          <li>
            <NavLink to={"/programs"}>
              <IoList /> Programs
            </NavLink>
          </li>
          <li>
            <NavLink to={"/testimonies"}>
              <IoThumbsUp /> Testiomnies
            </NavLink>
          </li>
          <li>
            <NavLink to={"/volunteers"}>
              <IoHappy /> Volunteers
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
