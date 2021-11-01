import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
//   Link,
} from "react-router-dom";

import Header from "./components/Header/Header"
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Partner from "./pages/Partner";
import './App.scss';

function App() {
    return (
        <div className="App">
            <Router>
            
                <Header />
                <Switch>
                    
                    <Route exact patch="/"> <Home/></Route>
                
                    <Route exact patch="/"> <Destination/></Route>
                    <Route exact patch="/"> <Partner/></Route>
        
                
                </Switch>
            
            </Router>
        </div>
    );
}

export default App;