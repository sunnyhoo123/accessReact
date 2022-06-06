import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "@views/home";
import toDo from "./components/toDo/Main.js";
import codePen from "./components/codePen";
import antLab from "@views/antLab";
import boil from "@views/boiling";
import TicTacToe from "@views/ticTacToe";
// import Lifecycle from '@views/lifecycle';
import HookRoute from "@views/hook/components/HookRouter/LinkPage";
import ClassRoute from "@views/talent/components/ClassRoute";

function App() {
  useEffect(() => {
    console.log("-----app-----");
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/antLab" component={antLab} />
          <Route path="/codePen" component={codePen} />
          <Route path="/toDo" component={toDo} />
          <Route path="/boil" component={boil} />
          <Route path="/ticTacToe" component={TicTacToe} />
          {/* <Route path="/lifecycle" component={Lifecycle}/> */}
          <Route path="/hookRoute/:type+" component={HookRoute} />
          <Route path="/classRoute/:id" component={ClassRoute} />
          <Route path="/" component={home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
