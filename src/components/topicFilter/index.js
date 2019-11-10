import React, { Component } from "react";
import "./topicFilter.css"

export default class Filter extends Component{
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                        <ul className="nav">
                            <li><a className="hot" href="/hot"><i className="glyphicon glyphicon-fire"></i> Hot</a></li>
                            <li><a className="trending" href="/trending"><i className="glyphicon glyphicon-stats"></i> Trending</a></li>
                            <li><a className="new" href="/new"><i className="glyphicon glyphicon-upload"></i> New</a></li>
                        </ul>
                    </div>
                </div>
        )
    }
}
