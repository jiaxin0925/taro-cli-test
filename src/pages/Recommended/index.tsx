import {View} from '@tarojs/components'
import React, { Component } from 'react';
import Footer from '../Footer';
import Select from './select/index'
import { AtSearchBar, AtTabs, AtTabsPane  } from 'taro-ui'
import './recommended.scss'
import Taro from '@tarojs/taro';
export default class Recommended extends Component<any, any>{
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      current: 0    }
  }
  componentDidMount(): void {
    Taro.setNavigationBarTitle({
      title: "推荐"
    })
  }
  onChange(value){
    this.setState({
      value: value
    })
  }
  handleClick(value){
    this.setState({
      current: value
    })
  }
  render(){
    return (
      <View className="recommendde">
        <AtSearchBar
          fixed={true}
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
        <AtTabs
          animated={false}
          scroll={true}
          current={this.state.current}
          tabList={[
            { title: '精选' },
            { title: '鞋包' },
            { title: '女装' },
            { title: '美妆超市' },
            { title: '电脑' },
            { title: '男装' },
            { title: '家电' },
            { title: '家居' },
            { title: '数码' },
            { title: '母婴' },
            { title: '手机' }]}
          onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View><Select /></View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style='background-color: #FAFBFC;text-align: center;'>标签页33的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            <View style='background-color: #FAFBFC;text-align: center;'>标签页44的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={4}>
            <View style='background-color: #FAFBFC;text-align: center;'>标签页5的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={5}>
            <View style='background-color: #FAFBFC;text-align: center;'>标签页6的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={6}>
            <View style='background-color: #FAFBFC;text-align: center;'>标签页7的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={7}>
            <View style='background-color: #FAFBFC;text-align: center;'>标签页8的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={8}>
            <View style='background-color: #FAFBFC;text-align: center;'>标签页9的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={9}>
            <View style='background-color: #FAFBFC;text-align: center;'>标签页10的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={10}>
            <View style='background-color: #FAFBFC;text-align: center;'>标签页11的内容</View>
          </AtTabsPane>
        </AtTabs>
        <Footer />
      </View>
    )
  }

}
