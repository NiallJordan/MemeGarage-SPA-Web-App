import React, { Component } from 'react';
import './postForm.css';

export default class Form extends Component {
    state = {title:'', user:'',imageUrl:'', thread:''}
    handlePostTitleChange = (e) => this.setState({title: e.target.value});
    handleUserChange = (e) => this.setState({user: e.target.value});
    handleImageUrlChange = (e) => this.setState({imageUrl: e.target.value});
    handleThreadChange = (e) => this.setState({thread: e.target.value});
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.title,this.state.user,this.state.imageUrl,this.state.thread)
        this.setState({title:'',user:'',imageUrl:'',thread:''})
    }

    render(){
        return(
            <form className="form">
                <h2>Add a new post</h2>
                <div className="form-group">
                    <input type="text" className="" placeholder="Title" value={this.state.title} onChange={this.handlePostTitleChange}></input>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Image URL" value={this.state.imageUrl} onChange={this.handleImageUrlChange}></input>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Username" value={this.state.user} onChange={this.handleUserChange}></input>
                </div>
                <div className="form-group">
                    <select value={this.state.thread} onChange={this.handleThreadChange}>
                        <option selected disabled>Please choose..</option>
                        <option value="/hot">Hot</option>
                        <option value="/trending">Trending</option>
                        <option value="/new">New</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Post</button>
            </form>
        );
    }
}