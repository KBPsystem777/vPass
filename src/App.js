import { Switch, Route } from "react-router"
import AdminLoginPage from "./pages/AdminLoginPage"
import HomePage from "./pages/HomePage"
import MyPassport from "./public/Passport"

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/admin/login" component={AdminLoginPage} />
        <Route path="/mypassport" component={MyPassport} />
      </Switch>
    </div>
  )
}

export default App
