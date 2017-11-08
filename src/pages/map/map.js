/**
 * Created by godnew on 2017/10/24.
 */
import React, {Component} from 'react';
import {Map} from 'react-amap'
import Geolocation from '../../components/geo'
import PostLocation from '../../fetch/postLocation'

const pluginProps = {
  enableHighAccuracy: true,//是否使用高精度定位，默认:true
  timeout: 10000,          //超过10秒后停止定位，默认：无穷大
  maximumAge: 0,           //定位结果缓存0毫秒，默认：0
  convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
  showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
  panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
  zoomToAccuracy: true    //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
}

class Maps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: '',
      userName: '',
      token: ''
    }
  }

  render() {
    return (
      <div>
        <div style={{display: 'none'}}>
          <Map amapkey="1e1b1fba21ccd4bdc59283ca2db0df93">
            <Geolocation {...pluginProps} geoComplete={this.geoComplete.bind(this)}/>
          </Map>
        </div>
        <div>
          <img src="http://images2015.cnblogs.com/news/66372/201511/66372-20151111165128978-139054411.jpg" alt=""/>
        </div>
      </div>
    );
  }

  geoComplete(res) {
    console.log(res)
    var message = {};
    message.latitude = res.position.lat
    message.longitude = res.position.lng
    message.location = res.formattedAddress
    var Request=this.GetRequest()
    // console.log(Request)
    message.fromUsername=Request['from']
    message.toUsername=Request['to']
    console.log(message)
    PostLocation(message)
    this.setState({
      result: res
    })
  }

  GetRequest() {
    var url = window.location.href; //获取url中"?"符后的字串
    var str=url.split('map?')[1];
    var theRequest = new Object();
    var strs = str.split("&");
    for(var i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
    }
    return theRequest;
  }
}

export default Maps;
