import React from "react"
import { Link } from "react-router-dom"
import Logo from "../components/Logo"

const HomePage = () => {
  return (
    <div>
      <Logo />
      <h3 className="text-center">
        Making Vaccination Passport easier and digital.
      </h3>
      <div className="container text-center">
        <div className="btn-row">
          <Link to="/admin/login" className="btn-spacing">
            <button className="btn btn-primary btn-lg">Admin Login</button>
          </Link>
          <Link to="/lgu-registration" className="btn-spacing">
            <button className="btn btn-secondary btn-lg">
              LGU Registration
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
