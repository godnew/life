/**
 * Created by godnew on 2017/10/16.
 */
import React from 'react'
import { Router, Route ,hashHistory,IndexRedirect} from 'react-router'
import App from './App'
import Index from './pages/index'
import Weather from './pages/weather/index'
export default function router(){
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/index" />
        <Route path="index" component={Index}/>
        <Route path="weather" component={Weather}/>
      </Route>
    </Router>
  );
}