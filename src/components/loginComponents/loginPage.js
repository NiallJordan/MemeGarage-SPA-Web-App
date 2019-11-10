import React, { Component } from 'react';
import Header from './header';
import LoginForm from './loginForm';
import request from "superagent";
import api from '../dataStore/stubAPI';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';

import { withRouter } from 'react-router-dom';

class LoginPage extends Component {

    render() {
        return (
        <div className="page-container">
            <div className="container-fluid">
                <Header/>
                <div className="row">
                    <div className ="form-container">
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default withRouter(HotFilteredPage);