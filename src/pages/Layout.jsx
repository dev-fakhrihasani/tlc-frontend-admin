import React from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import "../styles/main.css"

const Layout = ({ children }) => {
  return (
    <div className="sm-padding">
      <React.Fragment>
        <Navbar />
        <div className="columns mt-6" style={{ minHeight: "100vh" }}>
          <div className="column is-2 ">
            <div className="sm-hidden">
              <Sidebar />
            </div>
          </div>
          <div className="column has-background-light">
            <main>{children}</main>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}

export default Layout
