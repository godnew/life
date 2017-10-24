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
import Movie from './pages/movie/index'
import Maps from './pages/map/map'
import Location from './pages/map/location'
export default function router(){
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/index" />
        <Route path="index" component={Index}/>
        <Route path="weather" component={Weather}/>
        <Route path="news" component={News}/>
        <Route path="outAdvise" component={OutAdvise}/>
        <Route path="movie" component={Movie}/>
        <Route path="map" component={Maps}/>
        <Route path="location" component={Location}/>
      </Route>
    </Router>
  );
}