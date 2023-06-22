import React, { Component } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";
// Import Logo
import logodark from "../../assets/images/zooki.png";
import logolight from "../../assets/images/zooki.png";


//import icon
import FeatherIcon from "feather-icons-react";

import ScrollspyNav from "./Scrollspy";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,      
    };
  }

  

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {    
    var targetId = this.props.navItems.map((item) => {
      return item.idnm;
    });    
    return (
      <React.Fragment>
        {/* Navbar Start */}
        <nav
         className={"navbar navbar-expand-lg fixed-top sticky " + this.props.navClass}
        >
          <Container>
            {/* LOGO */}
            <NavbarBrand className="logo" href="/">
              <span style={{color:"#fff",font:"bolder"}}>&#10100;WDGT&#10101;</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <i>
                <FeatherIcon icon="menu" />
              </i>
            </NavbarToggler>
            <Collapse
              id="navbarCollapse"
              isOpen={this.state.isOpenMenu}
              className=" navbar-collapse"
            >
              <ScrollspyNav
                scrollTargetIds={targetId}
                scrollDuration="800"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav navbar className="ms-auto navbar-center" id="mySidenav">
                  {this.props.navItems.map((item, key) => (
                    <NavItem
                      key={key}
                      className={item.navheading === "Home" ? "active" : ""}
                    >
                      <NavLink
                        className={item.navheading === "Home" ? "active" : ""}
                        href={"#" + item.idnm}
                      >
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </ScrollspyNav>
            </Collapse>
          </Container>
        </nav>
      </React.Fragment>
    );
  }
}
// }
export default NavbarPage;
