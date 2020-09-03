import React from 'react';
import Main from './components/toDo/Main';
import talent from './components/codePen/Talent.jsx';
import antLab from './components/antLab/index.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/antLab" component={antLab}/>
          <Route path="/talent" component={talent}/>
          <Route path="/" component={Main}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
