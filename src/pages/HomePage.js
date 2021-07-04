import React from "react"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center">VPass</h1>
      <div className="container text-center">
        <div className="btn-row">
          <Link to="/admin/login">
            <button className="btn btn-primary btn-lg btn-spacing">
              Admin Login
            </button>
          </Link>
          <Link to="/lgu-registration">
            <button className="btn btn-primary btn-lg btn-spacing">
              LGU Registration
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
