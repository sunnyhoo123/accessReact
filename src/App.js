import React from 'react';

import home from '@views/home';
// import talentHome from '@views/talentHome';
import toDo from './components/toDo/Main.js';
import talent from './components/codePen/Talent.jsx';
import antLab from './components/antLab';
import boil from '@views/boiling';
import TicTacToe from '@views/ticTacToe';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/antLab" component={antLab}/>
          <Route path="/talent" component={talent}/>
          <Route path="/toDo" component={toDo}/>
          <Route path="/boil" component={boil}/>
          <Route path="/ticTacToe" component={TicTacToe}/>
          <Route path="/" component={home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
