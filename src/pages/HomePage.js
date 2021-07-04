import React from "react"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center">VPass</h1>
      <p className="text-center">
        Making Vaccination Passport easier and digital.
      </p>
      <div className="container text-center homepage-padding">
        <div className="btn-row">
          <Link to="/admin/login" className="btn-spacing">
            <button className="btn btn-primary btn-lg">Admin Login</button>
          </Link>
          <Link to="/lgu-registration" className="btn-spacing">
            <button className="btn btn-primary btn-lg">LGU Registration</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
