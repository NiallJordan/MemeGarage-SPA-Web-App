import React, { Component } from "react";
import "./header.css"

class Header extends Component{
    render(){
        return(
            <header id="top-nav">
                <div class="nav-wrap">
                    <h1>Meme<span class="bold">Garage</span></h1>
                    <nav class="nav-menu">
                        <button type="button" class="btn btn-default">
                            <span class="glyphicon glyphicon-search"></span>
                        </button>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;