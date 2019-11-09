import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import CommentPage from "./components/commentComponents/commentPage";
import Header from './components/header';

const Router = (props) => {
    return(
        <BrowserRouter>
                <Switch>
                    <Route path="/posts/:post_id" component = {CommentPage}/>
                    <Route exact path="/" component={App}/>
                    <Redirect from="*" to="/"/>
                </Switch>
        </BrowserRouter>
    );
};
ReactDOM.render(<Router />, document.getElementById('root'));

