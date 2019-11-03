import React, { Component } from "react";
import "./filter.css"

export default class Filter extends Component{
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h3>
                            <p>
                            <span>Filter</span>
                            <input type="text" placeholder="Author Name"/>
                            </p>
                            <span>Genre</span>
                            <select id="genre">
                                <option value="all">All Genres</option>
                                <option value="sci-fi">Science Fiction</option>
                                <option value="novel">Novel</option>
                                <option value="romance">Romance</option>
                                <option value="thriller">Thriller</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="mystery">Mystery</option>
                                <option value="crime">Crime</option>
                                <option value="young">Young Adult</option>
                            </select>
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}
