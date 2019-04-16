import React, { Component } from 'react';
import "./custom_stylesheet.css";

class Nav_Header extends Component {
    render() { 
        return ( 
            <div id="header" style={{margin: "0"}}>
            <div id="header-bar">
              <div id="header-bar-wrap">
                <div class="main-menu">
                  <div class="main-option main-selected"><a href="/">Link 1</a></div> |
                  <div class="main-option "><a href="/">Link 2</a></div> |
                  <div class="main-option "><a href="/">Link 3</a></div>
                </div>
                <span>PlaceHolder</span>
                <a href="/"><div class="main-sub">Link 4</div></a>
              </div>
            </div>
            PlaceHolder Title
          </div>  
         );
    }
}
 
export default Nav_Header;