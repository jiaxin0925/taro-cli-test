import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components'
import { AtGrid, AtNoticebar, AtToast, AtTimeline, AtCountdown, AtSearchBar } from "taro-ui"
import Banner from '../Banner';
import Footer from '../Footer';
import  Invoice  from "./invoice";
import './index.scss'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testData: [
        {
          image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
          value: '找折扣'
        },
        {
          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          value: '新品首发'
        },
        {
          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
          value: '手机馆'
        }
      ],
      isShowMsg: false,
      value: '',// 搜索框value值
      fixed: true, // 搜索框是否固定顶部true： 固定顶部
    }
  }
  onChange(value, e){
    console.log('eee', e)
    this.setState({
      value: value
    })
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  curCardContent = (item, index) => {
    if (item.value) {
      this.setState({
        isShowMsg: true,
      })
    }
  }
  //倒计时回调
  onTimeUp () {
    Taro.showToast({
      title: '时间到',
      icon: 'success',
      duration: 2000
    })
  }
  render () {
    const {testData, isShowMsg}:any = this.state;
    return (
      <View className='index'>
        <AtSearchBar
          fixed={this.state.fixed}
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
        <Banner />
        <Invoice />
        <View>
          <View className='title-name'>
            公告栏
          </View>
          <AtNoticebar marquee className='MT20'>
            二狗子 - 二狗子 ❤️  大胖子 - 大胖子
          </AtNoticebar>
          <View className='title-name'>
            卡片
          </View>
          <AtGrid
            mode='rect'
            className="MT30"
            data={testData}
            onClick={this.curCardContent}
          />
          <View className='title-name'>
            时间轴
          </View>
          <AtTimeline
            className="MT20"
            pending
            items={[
              { title: '刷牙洗脸', content: ['大概7:00'], icon: 'check-circle' },
              { title: '吃早餐', content: ['牛奶+面包','大概7:20吃早点'], icon: 'clock' },
              { title: '上班', content: ['查看邮件', '写PPT','写代码','提交git', '发送PPT给领导', '7:30出门'], icon: 'clock' },
              { title: '睡觉', content: ['不超过23:00'], icon: 'clock' }
            ]}
          >
          </AtTimeline>
          <View className='title-name'>
            倒计时
          </View>
          <AtCountdown
            className="MT20"
            isShowDay
            day={((1997 + 1995) * 9)}
            hours={0}
            minutes={0}
            seconds={0}
            onTimeUp={this.onTimeUp.bind(this)}
          />
          <AtToast isOpened={isShowMsg} text="功能开发中" >功能开发中</AtToast>
        </View>
        <Footer />
      </View>
  )
  }
}
