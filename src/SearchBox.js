import React, {Component} from 'react';
import './SearchBox.css';
export default class SearchBox extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const {searchChange} = this.props;
        return(
            <div className="searchBox">
                <h1>RoboFriends</h1>
                <input type="search"
                    placeholder="search robots"
                    onChange={searchChange}
                />     
            </div>   
        );
    }
}