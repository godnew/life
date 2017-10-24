/**
 * Created by godnew on 2017/10/24.
 */
import React, { Component } from 'react';
import {Map,Marker} from 'react-amap'

const styleA = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  padding: '5px 10px',
  border: '1px solid #d3d3d3',
  backgroundColor: '#f9f9f9'
}

class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: {
        longitude: 0,
        latitude: 0,
        location:''
      }
    }
  }

  render() {
    let buf={}
    buf.longitude=this.state.result.longitude
    buf.latitude=this.state.result.latitude
    return (
      <div>
        <div style={{width:'100%',height:'100vh'}}>
          <Map amapkey="1e1b1fba21ccd4bdc59283ca2db0df93"
               center={buf}
               zoomEnable={true}
               zoom={18}
                >
            <Marker position={buf} />
            <div className="customLayer" style={styleA}>
              <h4>对方所在位置</h4>
              <p>{this.state.result.location}</p>
            </div>
          </Map>
        </div>
      </div>
    );
  }

  componentWillMount(){
    this.setState({
      result:this._UrlSearch()
    },()=>{
      console.log(this.state.result)
    })
  }

  _UrlSearch() {
    var buf={}
    var name,value;
    var str=window.location.href; //取得整个地址栏
    var num=str.indexOf("?")
    str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

    var arr=str.split("&"); //各个参数放到数组里
    for(var i=0;i < arr.length;i++){
      num=arr[i].indexOf("=");
      if(num>0){
        name=arr[i].substring(0,num);
        value=arr[i].substr(num+1);
        buf[name]=value;
      }
    }
    return buf;
  }
}
export default Location;