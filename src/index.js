import App from './Containers/App';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './Store/store';


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));