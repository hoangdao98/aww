import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducer';

const store = createStore(searchRobots);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'));