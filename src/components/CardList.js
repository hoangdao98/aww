import React, { Component } from 'react';
import Card from './Card';
import './CardList.css';
export default class CardList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {robots} = this.props;
        const cardComponent = robots.map((robot, i) => {
            return <Card key={i} robot={robot} />
        });
        return (
            <div className="cardList">
                {cardComponent}
            </div>
        );
    }
}