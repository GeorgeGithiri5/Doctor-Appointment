import React from "react";
import "./App.css";
import {Route,Switch} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Admin from './pages/Admin'


function App() {
  return (
    <>
    <Switch>
      <Route exact path='/'>
        <Homepage/>
      </Route>
      <Route  path='/Admin'>
        <Admin/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
