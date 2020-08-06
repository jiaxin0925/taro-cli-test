import React, { Component } from 'react'
import { View } from '@tarojs/components'
import {  AtGrid, AtNoticebar, AtToast } from "taro-ui"
import Banner from '../Banner';
import Footer from '../Footer';
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
      isShowMsg: false
    }
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
  render () {
    const {testData, isShowMsg}:any = this.state;
    return (
      <View className='index'>
        <Banner />
        <View>
          <AtNoticebar marquee className='MT20'>
            二狗子 - 二狗子 ❤️  大胖子 - 大胖子
          </AtNoticebar>
          <AtGrid
            mode='rect'
            className="MT30"
            data={testData}
            onClick={this.curCardContent}
          />
          <AtToast isOpened={isShowMsg} text="功能开发中" >功能开发中</AtToast>
        </View>
        <Footer />
      </View>
    )
  }
}
