import React, {Component} from 'react';
import {Card, CardFooter, CardImg} from "./CardColumns";

export default class CustomCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: ""
        };
        this.handleBefore = this.handleBefore.bind(this);
        this.handleAfter = this.handleAfter.bind(this);
    }

    componentDidMount() {
        this.setState({
            src: this.props.before
        });
    }

    handleBefore() {
        this.setState({
            src: this.props.before
        });
    }

    handleAfter() {
        this.setState({
            src: this.props.after
        });
    }
    render() {
        return(
            <Card>
                <CardImg
                    src={this.state.src}
                />
                <CardFooter className="d-flex justify-content-around">
                    <button className="btn btn-outline-danger" onClick={this.handleBefore}>Before</button>
                    <button className="btn btn-outline-success" onClick={this.handleAfter}>After</button>
                </CardFooter>
            </Card>
        );
    }
}