import React, {Component} from 'react';
import {View} from '@tarojs/components';
import { AtAvatar, AtList, AtListItem } from 'taro-ui';
import Taro from '@tarojs/taro';
import Footer from '../Footer';
import img1 from '../../assets/image/user-icon1.jpg';
import './my.scss';

export default class My extends Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
      userImg: '',
      userName: '',
    };
  }
  //负责把这个搞来， 哼知道了
  // 点击事件执行的时候要让用户跳到新的页面
  setUsetInfo = (e) => {
    e.stopPropagation();
    Taro.redirectTo({
      url: '/pages/My/UserInfo/index',
    })
  }
  render() {
    return(
      <View className='My-Content'>
        <View className='my-header' onClick={this.setUsetInfo}>
          <AtAvatar className="user-Img" circle image={img1}></AtAvatar>
          <View className="user-name">姓名</View>
        </View>
        <View className='my-content'>
          <AtList>
            <AtListItem
              title='标题文字'
              arrow='right'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
            <AtListItem
              title='标题文字'
              arrow='right'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
            <AtListItem
              title='标题文字'
              arrow='right'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='标题文字'
              note='描述信息'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
          </AtList>
        </View>
        <Footer />
      </View>
    )
  }
}
