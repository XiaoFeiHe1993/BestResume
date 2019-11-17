import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import App from '../component/App';
import Book from '../component/Book';
import City from '../component/City';

const AppRouter = () => (
    <Router>
        <div>
            <Route path="/" exact component={App}/>
            <Route path="/book" exact component={Book}/>
            <Route path="/city" exact component={City}/>
        </div>
    </Router>
);

export default AppRouter;