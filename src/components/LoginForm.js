// Login form for LGU

import { useState } from "react"
import { Link } from "react-router-dom"

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <h3>VPass Login</h3>
      <form>
        <fieldset>
          <div className="form-group">
            <label for="exampleInputEmail1" class="form-label mt-4">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label mt-4">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="top-padding btn-row">
            <button type="submit" class="btn btn-primary btn-spacing">
              Submit
            </button>
            <Link to="/">
              <button type="submit" class="btn btn-secondary btn-spacing">
                Cancel
              </button>
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default LoginForm
