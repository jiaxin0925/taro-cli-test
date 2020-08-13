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
    Taro.redirectTo({
      url: '/pages/index/index'
    })
  }
  ContentFun = (e) => {
    e.stopPropagation();
    Taro.redirectTo({
      url: '/pages/Content/index'
    })
  }
  MyContentFun = (e) => {
    e.stopPropagation();
    Taro.redirectTo({
      url: '/pages/My/index'
    })
  }
  recommended(e){
    // e.stopP
  }
  shoppingCart(e){

  }
  render() {
    return(
      <View className='Footer'>
        <View className='at-row'>
          <View className='at-col' onClick={this.HomeFun}>首页</View>
          <View className='at-col' onClick={this.ContentFun}>分类</View>
          <View className='at-col' onClick={this.recommended}>推荐</View>
          <View className='at-col' onClick={this.shoppingCart}>购物车</View>

          <View className='at-col' onClick={this.MyContentFun}>我的</View>
        </View>
      </View>

    )
  }
}
