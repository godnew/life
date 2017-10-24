/**
 * Created by godnew on 2017/10/24.
 */
import React, { Component } from 'react';
import {Map} from 'react-amap'
import Geolocation from '../../components/geo'

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
      result:'',
      userName:'',
      token:''
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
          {this.state.result?(this.state.result.position.lat+'-'+this.state.result.position.lng):'无数据'}
        </div>
      </div>
    );
  }

  geoComplete(res){
    console.log(res)
    this.setState({
      result:res
    })
  }
}

export default Maps;
