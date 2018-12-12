import React from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Badge,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

import classes from './Toolbar.module.css';
import imgLogo from '../../../assets/images/logo.svg';

const toolbar = (props) => {
    return (
        <div className={classes.Root}>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/mern-demo">
                    <div className={classes.NavbarBrand}>
                        <img className={classes.NavbarBrandIcon} src={imgLogo} alt="logo" draggable="false" />
                        {props.appName}
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={props.onCollapseToggle} />
                <Collapse isOpen={props.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#" onClick={() => props.onLinkClick('Dashboard')}>
                                <div className={classes.NavLink}>
                                    Dashboard
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() => props.onLinkClick('Network')}>
                                <div className={classes.NavLink}>
                                    Network
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() => props.onLinkClick('Network')}>
                                <div className={classes.NavLink}>
                                    Network
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() => props.onLinkClick('Network')}>
                                <div className={classes.NavLink}>
                                    Network
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() => props.onLinkClick('Network')}>
                                <div className={classes.NavLink}>
                                    Network
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() => props.onLinkClick('Network')}>
                                <div className={classes.NavLink}>
                                    Network
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem active>
                            <NavLink href="#" onClick={() => props.onLinkClick('Billing')} active>
                                <div className={classes.NavLink}>
                                    Billing
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() => props.onLinkClick('Network')}>
                                <div className={classes.NavLink}>
                                    Network
                                </div>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#" onClick={() => props.onLinkClick('Search')}>
                                <div className={classes.NavLink}>
                                    <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch} size="lg"/>
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() => props.onLinkClick('Help')}>
                                <div className={classes.NavLink}>
                                    <FontAwesomeIcon className={classes.HelpIcon} icon={faQuestionCircle} size="lg"/>
                                </div>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() => props.onLinkClick('Notifications')}>
                                <div className={classes.NavLink}>
                                    <div className={classes.NotificationsContainer}>
                                        <FontAwesomeIcon className={classes.AlertIcon} icon={faBell} size="lg"/>
                                        <div className={classes.NotificationsCount}>
                                            <Badge color="danger">2</Badge>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </NavItem>
                        <Dropdown isOpen={props.dropdownOpen} toggle={props.onDropdownToggle} nav inNavbar>
                            <DropdownToggle className={classes.DropdownToggle} nav caret>
                                <div className={classes.DropdownMenu}>JS</div>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem header>Header</DropdownItem>
                                <DropdownItem onClick={() => props.onActionClick('Action 1')}>Action 1</DropdownItem>
                                <DropdownItem onClick={() => props.onActionClick('Action 2')}>Action 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={() => props.onActionClick('Action 3')}>Action 3</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default toolbar;