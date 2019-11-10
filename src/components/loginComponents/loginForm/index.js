import React, { Component } from 'react'

export default class LoginForm extends Component {
    state = {title:'', user:'',imageUrl:'', thread:''}
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.user,this.state.password)
        this.setState({user:'',password:''})
    }

    render(){
        return(
            <form className="form">
                <h2>Enter Login Details</h2>
                <div className="form-group">
                    <input type="text" className="" placeholder="Username" value={this.state.title}></input>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" value={this.state.password} ></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Post</button>
            </form>
        );
    }
}
