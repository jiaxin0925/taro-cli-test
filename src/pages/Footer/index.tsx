import React, { Component } from 'react';
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components';
import { AtTabBar, AtIcon} from 'taro-ui';
import './footer.scss';

export default class Footer extends Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
      current: ''
    };
  }
  //点当前项
  handleClick = (e) => {
    if (e === 0) {
      this.setState({
        current: 0
      })
      Taro.redirectTo({
        url: '/pages/index/index'
      })
    }else if (e === 1) {
      this.setState({
        current: 1
      })
      Taro.redirectTo({
        url: '/pages/Content/index'
      })
    }else if (e === 2) {
      this.setState({
        current: 2
      })
      Taro.redirectTo({
        url: '/pages/My/index'
      })
    }
  }
  recommended(e){
    e.stopPropagation();
    Taro.redirectTo({
      url: '/pages/Recommended/index'
    })
  }
  shoppingCart(e){
    e.stopPropagation();
    Taro.redirectTo({
      url: '/pages/shoppingCar/index'
    })
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
        {/*<AtTabBar*/}
        {/*  fixed*/}
        {/*  selectedColor="red"*/}
        {/*  tabList={[*/}
        {/*    { title: '首页', iconType: 'bullet-list', text: 'new' },*/}
        {/*    { title: '内容', iconType: 'camera' },*/}
        {/*    { title: '我的', iconType: 'folder', text: '100', max: 99 }*/}
        {/*  ]}*/}
        {/*  onClick={this.handleClick.bind(this)}*/}
        {/*  current={this.state.current}*/}
        {/*/>*/}
      </View>

    )
  }
}
