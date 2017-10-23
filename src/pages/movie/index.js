/**
 * Created by godnew on 2017/10/23.
 */
import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div style={{height:'100vh'}}>
        <iframe src="https://m.douban.com/movie/" frameborder="0" width={'100%'} height={'100%'}></iframe>
      </div>
    );
  }
}

export default Movie;