
import React, { Component} from 'react'
import Taro, { Config } from "@tarojs/taro"
import {View, Checkbox} from '@tarojs/components'
import Footer from '../Footer';
import { AtCheckbox } from 'taro-ui'
import './shoppingCar.scss'
export default class shoppingCar extends Component<any, any>{
  constructor(props) {
    super(props)
    this.state = {
      allOptions: [
        {value: 'all', label: '全选'}
      ],
      allCheck: [],
      isAllCheck: false,
      checkedList: ['list1'],
      checkboxOption: [
        {
        value: 'list1',
        label: 'iPhone X',
        desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
      },
      {
        value: 'list2',
        label: 'HUAWEI P20'
      },
      {
        value: 'list3',
        label: 'OPPO Find X',
        desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
      },
      {
        value: 'list4',
        label: 'vivo NEX',
        desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
        disabled: true
      }
    ]
    }

  }
  componentDidMount(): void {
    Taro.setNavigationBarTitle({
      title: "购物车"
    })
  }

  handleChange(value){
    this.setState({
      checkedList: value
    })
  };
  handleClick(value) {
    const {checkboxOption, isAllCheck } = this.state;
    console.log(isAllCheck)
    if(isAllCheck === false) {
      const Arr = [];
      checkboxOption.map((item) =>{
        if (!item.disabled) {
          Arr.push(item.value)
        }
      })
      this.setState({
        checkedList: Arr,
        isAllCheck: true,
        allCheck: ['all'],
      })
    }else {
      this.setState({
        allCheck: [],
        checkedList: [],
        isAllCheck: false
      })

    }

  };
  render(){
    return(
      <View>
        <AtCheckbox
          options={this.state.checkboxOption}
          selectedList={this.state.checkedList}
          onChange={this.handleChange.bind(this)}
        >
          全选</AtCheckbox>
        <AtCheckbox
          options={this.state.allOptions}
          onChange={this.handleClick.bind(this)}
          selectedList={this.state.allCheck}
        />
        <Footer />
      </View>
    )
  }
}
