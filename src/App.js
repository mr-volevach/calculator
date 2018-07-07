import React, {Component} from 'react';
import './App.css';
import Home from './screens/home/index';
import Complete from './screens/complete/index';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from './reducers/index';

import {
    Route,
    BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Provider store={createStore(indexReducer, applyMiddleware(thunk))}>
                <Router>
                    <div>
                        <Route path="/calculator/" exact component={Home}/>
                        <Route path="/calculator/complete" component={Complete}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
