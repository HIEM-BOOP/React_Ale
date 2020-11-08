import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ShowList from './pages/ShowList';
import Add from './pages/Add';
import Cart from './pages/Cart';



function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
          <Route path="/cart">
              <Cart />

            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/">
              <ShowList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
