import React from 'react';

export const CardDeck = (props) => {
    return(
        <div className={"card-deck " + props.className}>
            {props.children}
        </div>
    );
};

export const Card = (props) => {
    return(
        <div id={props.id} className={"card " + props.className}>
            {props.children}
        </div>
    );
};

export const CardImg = (props) => {
    return(
        <img className={"card-img " + props.className} src={props.src} alt={props.alt}/>
    );
};

export const CardBody = (props) => {
    return(
        <div className="card-body">
            {props.children}
        </div>
    );
};

export const CardTitle = (props) => {
    return(
        <h5 className={"card-title " + props.className}>{props.children}</h5>
    );
};

export const CardText = (props) => {
    return(
        <p className={"card-text " + props.className}>{props.children}</p>
    );
};

export const CardFooter = (props) => {
    return(
        <footer className={"card-footer " + props.className}>
            {props.children}
        </footer>
    );
};
