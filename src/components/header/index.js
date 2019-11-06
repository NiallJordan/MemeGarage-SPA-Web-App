import React, { Component } from "react";
import "./header.css"

class Header extends Component{
    render(){
        return(
            <header id="top-nav">
                <div className="nav-wrap">
                    <nav className="nav-menu">
                        <div className="webName col-md-2">
                            <h1>Meme<b>Garage</b></h1>
                        </div>
                        <button type="button" className="btn-search">
                        <span className="glyphicon glyphicon-search"></span>
                        </button>
                        <button type="button" className="btn-edit">
                            <span className="glyphicon glyphicon-edit"></span>
                        </button>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;