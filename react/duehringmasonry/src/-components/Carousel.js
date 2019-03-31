import React from 'react';

export const Carousel = (props) => {
    return (
        <div id="carouselExampleIndicators" className={"carousel slide " + props.className} data-ride="carousel">
            {props.children}
        </div>
    );
};

export const CarouselIndicators = (props) => {
    return (
        <ol className={"carousel-indicators " + props.className}>
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
        </ol>
    );
};

export const CarouselInner = (props) => {
    return (
        <div className={"carousel-inner " + props.className}>
            {props.children}
        </div>
    );
};

export const CarouselItem = (props) => {
    return (
        <div className={"carousel-item " + props.className}>
            <img className="d-block w-100" src={props.src} alt={props.alt}/>
        </div>
    );
};

export const CarouselControl = (props) => {
    return (
        <div className={props.className}>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export const CenterText = (props) => {
    return(
        <div style={{position:"absolute", top:"50%", left: "50%", transform:"translate(-50%, -50%)"}} className={props.className}>
            {props.children}
        </div>
    );
};