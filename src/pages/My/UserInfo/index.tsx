import Taro,{ Current } from '@tarojs/taro';
import React, { useState, useEffect, Component} from 'react';
import {View, Button} from '@tarojs/components';
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
      ]
    };

  }


  handleshow() {
    Taro.navigateTo({ url: '/pages/My/index' })// 返回我的页面
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

      </View>
    )
  }
}
