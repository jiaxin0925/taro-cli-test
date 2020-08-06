import React, { Component } from 'react';
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components';
import {AtToast, AtNoticebar, message} from 'taro-ui';
import './footer.scss';

export default class Footer extends Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {};
  }
  HomeFun = (e) => {
    e.stopPropagation();
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }
  ContentFun = (e) => {
    e.stopPropagation();
    Taro.navigateTo({
      url: '/pages/Content/index'
    })
  }
  MyContentFun = (e) => {
    e.stopPropagation();
    Taro.navigateTo({
      url: '/pages/My/index'
    })
  }
  render() {
    return(
      <View className='Footer'>
        <View className='at-row'>
          <View className='at-col' onClick={this.HomeFun}>首页</View>
          <View className='at-col' onClick={this.ContentFun}>内容</View>
          <View className='at-col' onClick={this.MyContentFun}>我的</View>
        </View>
      </View>

    )
  }
}
