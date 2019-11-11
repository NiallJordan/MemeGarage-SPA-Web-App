import React, { Component } from 'react';
import Header from '../header';
import LoginForm from './loginForm';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';
import './loginPage.css'

import { withRouter } from 'react-router-dom';

class LoginPage extends Component {

    render() {
        return (
        <div className="page-container">
                <Header/>
                <div className="row">
                    <div className ="form-container">
                        <LoginForm/>
                    </div>
            </div>
        </div>
        );
    }
}
export default withRouter(LoginPage);