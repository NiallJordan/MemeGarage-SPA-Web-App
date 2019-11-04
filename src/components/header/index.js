import React, { Component } from "react";
import "./header.css"

class Header extends Component{
    render(){
        return(
            <header id="top-nav">
                <div class="nav-wrap">
                    <nav class="nav-menu">
                        <div class="webName">
                            <h1>Meme<b>Garage</b></h1>
                        </div>
                        <button type="button" class="btn-search">
                        <span class="glyphicon glyphicon-search"></span>
                        </button>
                        <button type="button" class="btn-edit">
                            <span class="glyphicon glyphicon-edit"></span>
                        </button>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;