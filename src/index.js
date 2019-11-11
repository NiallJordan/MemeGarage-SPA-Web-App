import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import App from './App';
import api from './dataStore/stubAPI'
import request from "superagent";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import CommentPage from "./components/commentComponents/commentPage";
import Header from './components/header';
import hotFilteredPage from './components/hotFilteredPage';
import LoginPage from './components/loginComponents/loginPage';

class Router extends Component {
    componentDidMount(){
        request.get("http://localhost:3001/posts").end((err,res) => {
            if(res){
                let { results : posts} = JSON.parse(res.text);
                api.initialize(posts);
                //localCache.populate(posts.json);
                this.setState({});
            }else{
                console.log(err);
            }
        });
    }

    render(){
        return(
            <BrowserRouter>
                    <Switch>
                        <Route path="/posts/:post_id" component = {CommentPage}/>
                        <Route exact path="/" component={App}/>
                        <Route path="/hot" component = {hotFilteredPage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
            </BrowserRouter>
        );
    }
};

ReactDOM.render(<Router />, document.getElementById('root'));

