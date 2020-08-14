
import React, { Component} from 'react'
import {View, Form} from '@tarojs/components'
import Footer from '../Footer';
import { AtSearchBar} from 'taro-ui'
export default class shoppingCar extends Component<any, any>{
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  onChange(value) {
    this.setState({
      value: value
    })
  }
  render(){
    return(
      <View>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
        <Footer />
      </View>
    )
  }
}
