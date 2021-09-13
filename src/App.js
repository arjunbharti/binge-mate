import { Route, Switch } from "react-router";
import Display from "./components/Movies/Display";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route path="/" component={Display} exact />
      </Switch>
    </>
  );
}

export default App;
