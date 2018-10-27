import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import 'antd/dist/antd.css';
import Root from './root/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
