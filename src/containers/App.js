import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
export default class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            robots: [],
            searchfield: ''
        }

        this.onSearchChange = this.onSearchChange.bind(this);
        console.log('constructor');
    }

    onSearchChange(event) {
        this.setState({ searchfield: event.target.value });
    }

    componentDidMount() {
        console.log('componentDidMount', this.props.store);
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resource => resource.json())
        .then(users => this.setState({robots: users}))
        .catch(err => console.error(err));
    }
    render() {
        const { robots } = this.state;
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return !robots.length ? 
        <div className="Loadding">Loadding</div> :
        (
            <div className="robot-friends">
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}