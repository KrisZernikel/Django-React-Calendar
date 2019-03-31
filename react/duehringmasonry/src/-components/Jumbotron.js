import React from 'react';

export default function Jumbotron(props) {
    return(
        <div className={"jumbotron " + props.className}>
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}
