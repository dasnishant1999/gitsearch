import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GithubContextProvider from "./context/GithubContextProvider";

function App() {
  return (
    <GithubContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </GithubContextProvider>
  );
}

export default App;
