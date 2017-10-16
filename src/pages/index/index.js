/**
 * Created by godnew on 2017/10/16.
 */
import React, { Component } from 'react';

class Index extends Component {
  constructor(props){
    super(props)
    this.state={
      icon:[
        {
          icon:'#icon-gongjuxiang',
          text:'工具'
        },
        {
          icon:'#icon-rewenshoulu',
          text:'热文'
        },
        {
          icon:'#icon-xinwenbaozhi',
          text:'新闻'
        },
        {
          icon:'#icon-chaxun-copy',
          text:'查询'
        },
        {
          icon:'#icon-youxi',
          text:'游戏'
        },
        {
          icon:'#icon-190',
          text:'笑话'
        },
        {
          icon:'#icon-cloud',
          text:'天气'
        },
        {
          icon:'#icon-dianying',
          text:'电影'
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <ul style={styles.ul}>
          {
            this.state.icon.map((item,index)=>{
              return (
                <li key={index} style={styles.li}>
                  <div>
                    <svg className="iconfont" aria-hidden="true" style={{fontSize:'30px'}}>
                      <use xlinkHref={item.icon}></use>
                    </svg>
                  </div>
                  <span style={styles.text}>{item.text}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

var styles={
  ul:{
    display:'flex',
    flexWrap:'wrap',
    width:'100%'
  },
  li:{
    width:'33%',
    padding:'50px 0'
  },
  text:{
    color:'#ffb5a1',
    display:'inline-block',
    marginTop:'8px'
  }
}

export default Index;