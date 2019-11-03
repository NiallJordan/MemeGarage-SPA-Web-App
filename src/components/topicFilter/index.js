import React, { Component } from "react";
import "./topicFilter.css"

export default class Filter extends Component{
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <ul class="nav">
                            <li><a class="label" href="/hot"><i class="glyphicon glyphicon-fire"></i> Hot</a></li>
                            <li><a class="label" href="/trending"><i class="glyphicon glyphicon-stats"></i> Trending</a></li>
                            <li><a class="label" href="/new"><i class="glyphicon glyphicon-upload"></i> New</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
