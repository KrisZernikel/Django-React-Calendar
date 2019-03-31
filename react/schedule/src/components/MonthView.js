import React, {Component} from 'react';

export default class MonthView extends Component {
    render() {
        return(
            <div id={"grid-calendar"} className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}