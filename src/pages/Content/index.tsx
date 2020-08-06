import React, {Component} from 'react';
import {View, Button} from '@tarojs/components';
import { AtTabs, AtTabsPane, AtFloatLayout } from 'taro-ui'
import Footer from '../Footer';
import './content.scss';

export default class Content extends Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      isShow: false,
    };
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  handleClose () {
    this.setState({
      isShow: false,
    })
  }
  handleshow () {
    this.setState({
      isShow: true,
    })
  }
  render() {
    const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }];
    const {isShow} :any = this.state;
    return(
      <View>
        <View className="title-name">
          Tab栏
        </View>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
        <View className="title-name MT20">
          浮动弹层
        </View>
        <Button className="curBtn" onClick={this.handleshow.bind(this)}>点我</Button>
        <AtFloatLayout isOpened={isShow} title="这是个标题" onClose={this.handleClose.bind(this)}>
          这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
          随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
        </AtFloatLayout>
        <Footer />
      </View>
    )
  }
}
