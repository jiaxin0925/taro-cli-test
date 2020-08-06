import React, {Component} from 'react';
import {View} from '@tarojs/components';
import Footer from '../Footer';

export default class Content extends Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <View>
        我是内容模块
        <Footer />
      </View>
    )
  }
}
