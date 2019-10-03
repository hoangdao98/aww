import React, { Component } from 'react';

export default class Scroll extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.children);
    }

    render() {
        const { children } = this.props;
        return(
            <div style={{overflow: 'auto', height: '100%'}}>
                {children}
            </div>
        );
    }
}