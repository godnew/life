/**
 * Created by godnew on 2017/10/18.
 */
import React, {Component} from 'react';
import GetFamous from '../../fetch/famous'
import GetLifeMessage from '../../fetch/getLifeMessage'
import {Map} from 'react-amap'
import Geolocation from '../../components/geo'

const pluginProps = {
  enableHighAccuracy: false,//是否使用高精度定位，默认:true
  timeout: 10000,          //超过10秒后停止定位，默认：无穷大
  maximumAge: 0,           //定位结果缓存0毫秒，默认：0
  convert: false,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
  showMarker: false,        //定位成功后在定位到的位置显示点标记，默认：true
  panToLocation: false,     //定位成功后将定位到的位置作为地图中心点，默认：true
  zoomToAccuracy: false    //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
}

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      name: '',
      city: '',
      environment: {}
    }
  }

  render() {
    let data = this.state;
    return (
      <div style={styles.container}>
        <div>
          <iframe scrolling="no" src="http://tianqiapi.com/api.php?style=tk&skin=pitaya" frameBorder="0" width="260"
                  height="195" allowTransparency="true"></iframe>
        </div>
        <div style={styles.message}>{this.state.message}</div>
        <p style={styles.name}>—{this.state.name}</p>
        {
          data.environment.time ?
            (
              <ul>
                <li style={styles.environmentItem}>
                  <div><span>空气质量指数：</span><span>{data.environment.aqi['#text']}</span></div>
                  <div><span>空气质量：</span><span>{data.environment.quality['#text']}</span></div>
                </li>
                <li style={styles.environmentItem}>
                  <div><span>PM25：</span><span>{data.environment.pm25['#text']}</span></div>
                  <div style={{display: 'flex'}}>
                    <span style={{marginRight: '10px'}}>可吸入物</span>
                    <div style={{textAlign: 'left'}}>
                      <div><span>臭氧：</span><span>{data.environment.o3['#text']}</span></div>
                      <br/>
                      <div><span>一氧化碳：</span><span>{data.environment.co['#text']}</span></div>
                      <br/>
                      <div><span>pm10：</span><span>{data.environment.pm10['#text']}</span></div>
                      <br/>
                      <div><span>二氧化硫：</span><span>{data.environment.so2['#text']}</span></div>
                      <br/>
                      <div><span>二氧化氮：</span><span>{data.environment.no2['#text']}</span></div>
                    </div>
                  </div>
                </li>
              </ul>
            ) :
            (
              <ul>
                <li style={styles.environmentItem}>
                  <div><span>空气质量指数：</span><span></span></div>
                  <div><span>空气质量：</span><span></span></div>
                </li>
                <li style={styles.environmentItem}>
                  <div><span>PM25：</span><span></span></div>
                  <div style={{display: 'flex'}}>
                    <span style={{marginRight: '10px'}}>可吸入物</span>
                    <div style={{textAlign: 'left'}}>
                      <div><span>臭氧：</span><span></span></div>
                      <br/>
                      <div><span>一氧化碳：</span><span></span></div>
                      <br/>
                      <div><span>pm10：</span><span></span></div>
                      <br/>
                      <div><span>二氧化硫：</span><span></span></div>
                      <br/>
                      <div><span>二氧化氮：</span><span></span></div>
                    </div>
                  </div>
                </li>
              </ul>
            )
        }
        <div style={{display: 'none'}}>
          <Map amapkey="1e1b1fba21ccd4bdc59283ca2db0df93">
            <Geolocation {...pluginProps} geoComplete={this.geoComplete.bind(this)}/>
          </Map>
        </div>
      </div>
    );
  }

  componentWillMount() {
    // GetFamous().then((res)=>{
    //   res=JSON.parse(res)
    //   console.log(res)
    //   this.setState({
    //     message:res.newslist[0].content,
    //     name:res.newslist[0].mrname
    //   })
    // })
  }

  xmlToJson(xml) {
    // Create the return object
    var obj = {};
    if (xml.nodeType == 1) { // element
      // do attributes
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) { // text
      obj = xml.nodeValue;
    }
    // do children
    if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof(obj[nodeName]) == "undefined") {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof(obj[nodeName].length) == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }

  loadXML(xmlString) {
    var xmlDoc = null;
    //判断浏览器的类型
    //支持IE浏览器
    // console.log(window.ActiveXObject)
    // if(!window.DOMParser && window.ActiveXObject){   //window.DOMParser 判断是否是非ie浏览器
    //   var xmlDomVersions = ['MSXML.2.DOMDocument.6.0','MSXML.2.DOMDocument.3.0','Microsoft.XMLDOM'];
    //   for(var i=0;i<xmlDomVersions.length;i++){
    //     try{
    //       xmlDoc = new ActiveXObject(xmlDomVersions[i]);
    //       xmlDoc.async = false;
    //       xmlDoc.loadXML(xmlString); //loadXML方法载入xml字符串
    //       break;
    //     }catch(e){
    //     }
    //   }
    // }
    // //支持Mozilla浏览器
    // else if(window.DOMParser && document.implementation && document.implementation.createDocument){
    //   try{
    //     /* DOMParser 对象解析 XML 文本并返回一个 XML Document 对象。
    //      * 要使用 DOMParser，使用不带参数的构造函数来实例化它，然后调用其 parseFromString() 方法
    //      * parseFromString(text, contentType) 参数text:要解析的 XML 标记 参数contentType文本的内容类型
    //      * 可能是 "text/xml" 、"application/xml" 或 "application/xhtml+xml" 中的一个。注意，不支持 "text/html"。
    //      */
    var domParser = new DOMParser();
    xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
    //   }catch(e){
    //   }
    // }
    // else{
    //   return null;
    // }

    return xmlDoc;
  }

  geoComplete(result) {
    this.setState({
      city: result.addressComponent.city
    }, () => {
      GetLifeMessage(this.state.city).then((res) => {
        var buf = this.xmlToJson(this.loadXML(res))
        console.log(buf.resp.environment)
        this.setState({
          environment: buf.resp.environment
        })
      });
    })
  }
}

var styles = {
  container: {
    width: '100vw',
    height: '100vh',
    background: `url(${require("./images/bg.jpg")})`,
    backgroundSize: 'cover'
  },
  message: {
    textAlign: 'left',
    padding: '20px',
    color: '#fff',
    fontSize: '16px'
  },
  name: {
    textAlign: 'right',
    paddingRight: '20px',
    color: '#fff',
    fontSize: '16px'
  },
  environmentItem: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#fff',
    padding: '10px',
    fontSize: '14px'
  }
}

export default Weather;
