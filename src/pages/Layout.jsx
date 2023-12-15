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
          <div className="column is-2 is-hidden-tablet-only has-background-link-light">
            <div className="sm-hidden">
              <Sidebar />
            </div>
          </div>
          <div className="column p-3">
            <main>{children}</main>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}

export default Layout
