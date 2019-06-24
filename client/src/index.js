import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import App from './views/App';

const Root = () => (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
);
ReactDOM.render(Root(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
