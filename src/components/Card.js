import React, { Component } from 'react';
import './Card.css';
export default class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {robot} = this.props;
        return(
            <div className="card">
                <img alt='' src={`https://robohash.org/${robot.name}200x200`} />
                <div>
                    <h2>{robot.name}</h2>
                    <p>{robot.email}</p>
                </div>
            </div>
        );
    }
}