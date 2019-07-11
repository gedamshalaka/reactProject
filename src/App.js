import React from 'react';
import { BrowserRouter, Route, Switch } from '../node_modules/react-router-dom';
import './App.css';
import Login from './Login'
import Welcome from './Welcome';
import Location from './Location';
import Appointment from './Appointment';
import Notes from './Notes';
import Confirmation from './Confirmation';
import FinalPage from './FinalPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/location" component={Location} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/appointment" component={Appointment} />
        <Route path="/notes" component={Notes} />
        <Route path="/confirmation" component={Confirmation} />
        <Route path="/final" component={FinalPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
