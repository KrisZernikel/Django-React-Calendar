import React from 'react';

export function Navbar(props) {
    return (
        <nav className={"navbar navbar-expand-lg " + props.className}>
            {props.children}
        </nav>
    );
}

export const NavbarBrand = (props) => {
    return (
        <a className={"navbar-brand " + props.className} href={props.href}>{props.children}</a>
    );
};

export const NavbarToggle = (props) => {
    return(
        <button className={"navbar-toggler " + props.className} type="button" data-toggle="collapse" data-target="#navbar"
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>
    );
};

export const NavbarCollapse = (props) => {
    return (
        <div className={"collapse navbar-collapse " + props.className} id="navbar">
            {props.children}
        </div>
    );
};

export const NavbarNav = (props) => {
    return (
        <div className={"navbar-nav " + props.className}>
            {props.children}
        </div>
    );
};

export const NavLink = (props) => {
    return (
        <a className={"nav-item nav-link " + props.className} href={props.href}>{props.children}</a>
    );
};

export const NavBtn = (props) => {
    return(
        <a href={props.href} className={"nav-item btn " + props.className} role="button" aria-pressed="true">{props.children}</a>
    );
};