import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import "../css/stylesheet.css";

class Navagation extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      TitleClick = e => {
        window.location.assign(e.target.name);
      }
    render() { 
        return (
            <div style={{marginBottom: "20px"}}>
            <Navbar color="dark" light expand="md">
              <NavbarBrand href="/" style={{float: "center"}}>
                <div className="index-title" onClick={this.TitleClick} name="/">
                    Placeholder Title
                </div>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/FanData" style={{color: "whitesmoke"}}>Link 1</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret style={{color: "whitesmoke"}}>
                      Dropdown
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Link 1
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Link 2
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
         );
    }
}
 
export default Navagation;