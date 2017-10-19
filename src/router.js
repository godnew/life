/**
 * Created by godnew on 2017/10/16.
 */
import React from 'react'
import { Router, Route ,hashHistory,IndexRedirect} from 'react-router'
import App from './App'
import Index from './pages/index'
import Weather from './pages/weather/index'
import News from './pages/news/index'
import OutAdvise from './pages/outAdvise/index'
export default function router(){
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/index" />
        <Route path="index" component={Index}/>
        <Route path="weather" component={Weather}/>
        <Route path="news" component={News}/>
        <Route path="outAdvise" component={OutAdvise}/>
      </Route>
    </Router>
  );
}