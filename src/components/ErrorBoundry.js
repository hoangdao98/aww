import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        const { hasError } = this.state;

        return hasError ?
            <h1>Oops. That is not good</h1> :
            this.props.children
    }
}