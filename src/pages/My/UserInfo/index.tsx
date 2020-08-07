import React, {Component} from 'react';
import {View} from '@tarojs/components';

export default class UserInfo extends Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <View>
        我是用户信息模块,二狗子的
      </View>
    )
  }
}
