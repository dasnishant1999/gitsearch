import "./App.css";
import Dashboard from "./pages/Dashboard";
import GithubContextProvider from "./context/GithubContextProvider";

function App() {
  return (
    <GithubContextProvider>
      <Dashboard />
    </GithubContextProvider>
  );
}

export default App;
