import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header.js"
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Partner from "./pages/Partner";
import './App.scss';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    
                    <Route exact patch="/"> <Home/></Route>
                  
                    <Route exact patch="/"> <Destination/></Route>
                    <Route exact patch="/"> <Partner/></Route>
          
                   
                </Switch>
            </div>
        </Router>
    );
}

export default App;