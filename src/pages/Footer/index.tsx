import React, { Component } from 'react';
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
    console.log('111')
  }
  render() {
    return(
      <View className='Footer'>
        <View className='at-row'>
          <View className='at-col' onClick={this.HomeFun}>首页</View>
          <View className='at-col'>内容</View>
          <View className='at-col'>我的</View>
        </View>
      </View>

    )
  }
}
