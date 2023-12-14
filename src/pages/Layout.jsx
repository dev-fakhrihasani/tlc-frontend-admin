import React from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import "../styles/main.css"

const Layout = ({ children }) => {
  return (
    <div className="sm-padding">
      <React.Fragment>
        <Navbar />
        <div className="columns pt-6" style={{ minHeight: "100vh" }}>
          <div className="column is-2 has-background-link-light is-hidden-tablet-only">
            <div className="sm-hidden">
              <Sidebar />
            </div>
          </div>
          <div className="column">
            <main>{children}</main>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}

export default Layout
