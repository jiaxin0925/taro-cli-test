import React, { Component } from 'react';
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components';
import { AtToast, AtNoticebar, message, AtIcon } from 'taro-ui';
import './invoice.scss';

export default class invoice extends Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {};
  }
  onMoney = (e) => {
    e.stopPropagation(),
    Taro.redirectTo({
      url: '/pages/index/Money/index'
    })
  }
  onDoods = (e) => {
    e.stopPropagation()
    Taro.redirectTo({
      url: '/pages/index/Doods/index'
    })
  }
  onEvaluation = (e) => {
    e.stopPropagation()
    Taro.redirectTo({
      url: '/pages/index/Evaluation/index'
    })
  }
  onAfterSales = (e) => {
    e.stopPropagation()
    Taro.redirectTo({
      url: '/pages/index/AfterSales/index'
    })
  }
  onOrders = (e) => {
    e.stopPropagation()
    Taro.redirectTo({
      url: '/pages/index/Orders/index'
    })
  }

  render() {
    return (
      <View className='at-row invoice'>
        <View onClick={this.onMoney} className='at-col'> <AtIcon value="money" color='blue'></AtIcon><View>待付款</View></View>
        <View onClick={this.onDoods} className='at-col'><AtIcon value="message" color='orange'></AtIcon><View>待收货</View></View>
        <View onClick={this.onEvaluation} className='at-col'><AtIcon value="user" color='blue'></AtIcon><View>待评价</View></View>
        <View onClick={this.onAfterSales} className='at-col'><AtIcon value="file-code" color='green'></AtIcon><View>退换/售后</View></View>
        <View onClick={this.onOrders} className='at-col'><AtIcon value="file-audio" color='red'></AtIcon><View>全部订单</View></View>
      </View>

    )
  }
}
