import Taro,{ Current } from '@tarojs/taro';
import React, { useState, useEffect, Component} from 'react';
import {View, Button} from '@tarojs/components';
import { AtImagePicker } from 'taro-ui'
import './userinfo.scss'
export default class UserInfo extends Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
      routerParams: Current.router.params.blogMy, // 获取路由参数
      myList:[
        {
          name: 'Dream',
          age: '21',
          object: '胖子'
        }
      ],
      files: [{
        url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=349607136,2971567896&fm=26&gp=0.jpg',
      },
      {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597637811533&di=61ed771657fe66f0a05b61a26cf28022&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fc869f65e4da08d884a2f2affa134c7f3ef3d4406.jpg',
      },
      {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597637811532&di=574d8a44dc4ec6af36c41c044d341996&imgtype=0&src=http%3A%2F%2Fec4.images-amazon.com%2Fimages%2FI%2F41UaJkwtjML._SL500_AA300_.jpg',
      }]
    };

  }


  handleshow() {
    Taro.redirectTo({ url: '/pages/My/index' })// 返回我的页面
  }
  onChange(files){
    this.setState({
      files
    })
  }
  onFail(mes) { // 选择失败触发的回掉
    console.log(mes)
  }
  onImageClick(index, file) {// 点击图片触发的回掉
    console.log(index, file)
  }
  render() {
    const { myList, routerParams}: any = this.state;
    return(
      <View>
        <Button style="display:inline-block;" className='btn-max-w' type='primary' size='mini' onClick={this.handleshow}>点我
        </Button>

        {
          myList.map((item, index) => {
            return routerParams === '2'? (
              <View key='index'>
                <View>姓名{item.name}</View>
                <View>性别{item.age}</View>
                <View>对象{item.object}</View>
              </View>) : (
                <View key='index'>无内容</View>)
          })
        }
        <AtImagePicker
          multiple={true}
          files={this.state.files}
          onChange={this.onChange.bind(this)}
        />
      </View>
    )
  }
}
