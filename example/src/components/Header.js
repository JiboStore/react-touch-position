import React from 'react';
import { MenuItem, Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';

import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

import npmLogo from '../../images/npm-logo.png';
import githubLogo from '../../images/github-logo.png';

import '../../styles/header.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedNavKey: 0
        };
    }

    componentDidMount() {
        const path = this.props.route.path;

        this.setState({
            selectedNavKey: this.getNavKeyByRoutePath(path)
        })
    }

    getNavKeyByRoutePath(path) {
        switch (path) {
        case '/' :
            return 1;
        case '/map-child-props' :
            return 2.1;
        case '/on-position-changed' :
            return 2.2;
        case '/should-decorate-children' :
            return 2.3;
        case '/class-name' :
            return 2.4;
        case '/style' :
            return 2.5;
        case '/image-magnify' :
            return 3.1;
        case '/support' :
            return 4;
        default :
            return 1;
        }
    }

    render() {
        return (
            <Navbar inverse fixedTop>
                <ScrollToTopOnMount />
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="logo" href="#/">
                            &lt;ReactTouchPosition/&gt;
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav {...{activeKey: this.state.selectedNavKey}}>
                        <NavItem eventKey={1} href="#/">Home</NavItem>
                        <NavDropdown eventKey={2} title="API Examples" id="nav-dropdown">
                            <MenuItem eventKey={2.1} href="#/map-child-props">mapChildProps</MenuItem>
                            <MenuItem eventKey={2.2} href="#/on-position-changed">onPositionChanged</MenuItem>
                            <MenuItem eventKey={2.3} href="#/should-decorate-children">shouldDecorateChildren</MenuItem>
                            <MenuItem eventKey={2.4} href="#/class-name">className</MenuItem>
                            <MenuItem eventKey={2.5} href="#/style">style</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Use Cases" id="nav-dropdown">
                            <MenuItem eventKey={3.1} href="#/image-magnify">React Image Magnify</MenuItem>
                        </NavDropdown>
                        <NavItem href="https://github.com/ethanselzer/react-touch-position#props-api">API Docs</NavItem>
                        <NavItem eventKey={4} href="#/support">Support</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem
                            eventKey={1}
                            className="github-link"
                            href="https://github.com/ethanselzer/react-touch-position"
                        >
                            <img src={githubLogo} alt="GitHub Logo" />
                        </NavItem>
                        <NavItem
                            eventKey={2}
                            href="https://www.npmjs.com/package/react-touch-position"
                            className="npm-link"
                        >
                            <img src={npmLogo} alt="NPM Logo" />
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
