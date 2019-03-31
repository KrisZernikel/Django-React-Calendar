import React, {Component} from 'react';

export default class DayView extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert(this.props.date)
    }

    render() {
        return(
            <div onClick={this.handleClick}
                 id={this.props.id}
                 className="grid-calendar-item">
                <h2 className="h3">{this.props.date.substring(8,10)}</h2>
                {this.props.children}
            </div>
        );
    }
}
