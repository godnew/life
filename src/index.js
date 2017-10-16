import React from 'react';
import ReactDOM from 'react-dom';
import './static/reset.css'
import './index.css';
import RouteMap from './router'
import { hashHistory } from 'react-router'


ReactDOM.render(<RouteMap history={hashHistory}/>, document.getElementById('root'));
