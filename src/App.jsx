import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import entrynew from './pages/entrynew';

class App extends Component {
    render() {
        return ( 
        <Router>
            <div>
                <Route exact path = "/" component = { Home }/> 
                <Route path = "/new"component = { entrynew }/> 
            </div> 
        </Router>
        )
    }
}

export default App;
