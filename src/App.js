import { Switch, Route } from "react-router"
import LoginForm from "./components/LoginForm"
import AdminLoginPage from "./pages/AdminLoginPage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/admin/login" component={AdminLoginPage} />
      </Switch>
    </div>
  )
}

export default App
