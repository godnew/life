/**
 * Created by godnew on 2017/10/18.
 */
import React, { Component } from 'react';
import GetFamous from '../../fetch/famous'

class Weather extends Component {
  constructor(props){
    super(props)
    this.state={
      message:'',
      name:''
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <div>
          <iframe scrolling="no" src="http://tianqiapi.com/api.php?style=tk&skin=pitaya" frameborder="0" width="260" height="195" allowtransparency="true"></iframe>
        </div>
        <div style={styles.message}>{this.state.message}</div>
        <p style={styles.name}>—{this.state.name}</p>
      </div>
    );
  }

  componentWillMount(){
    GetFamous().then((res)=>{
      res=JSON.parse(res)
      console.log(res)
      this.setState({
        message:res.newslist[0].content,
        name:res.newslist[0].mrname
      })
    })
  }
}

var styles={
  container:{
    width:'100vw',
    height:'100vh',
    background: `url(${require("./images/bg.jpg")})`,
    backgroundSize:'cover'
  },
  message:{
    textAlign:'left',
    padding:'20px',
    color:'#fff',
    fontSize:'16px'
  },
  name:{
    textAlign:'right',
    paddingRight:'20px',
    color:'#fff',
    fontSize:'16px'
  }
}

export default Weather;
