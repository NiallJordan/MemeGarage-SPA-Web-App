import React, { Component } from 'react';
import './postForm.css';

export default class Form extends Component {
    state = {title:'', user:'', imageUrl:''}
    render(){
        return(
            <form className="form">
                <h2>Add a new post</h2>
                <div className="form-group">
                    <input type="text" className="" placeholder="Title"></input>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Image URL"></input>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Username"></input>
                </div>
                <div className="form-group">
                    <select>
                        <option selected disabled>Please choose..</option>
                        <option value="/hot">Hot</option>
                        <option value="/trending">Trending</option>
                        <option value="/new">New</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        );
    }
}