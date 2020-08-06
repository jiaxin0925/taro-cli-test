import React, {Component} from 'react';
import {View} from '@tarojs/components';
import Footer from '../Footer';

export default class My extends Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <View>
        我是我的模块
        <Footer />
      </View>
    )
  }
}
