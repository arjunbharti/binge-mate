import { Route, Switch } from "react-router";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Display from "./components/Movies/Display";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";


function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route path="/" component={Display} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
}

export default App;
