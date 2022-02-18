import { Route, Switch } from "react-router-dom";
import "./App.css";
import AddUser from "./page/AddUser";
import EditUser from "./page/EditUser";

import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/adduser" component={AddUser} />
        <Route path="/edituser/:id" component={EditUser} />
      </Switch>
    </div>
  );
}

export default App;
